import { ProxyDispatcherService } from "../../clients/proxy-dispatcher.service";

export async function searchLocationsWithOsm(opts: {
  proxy: ProxyDispatcherService;
  merchantServiceUrl: string;
  q?: string;
  lat?: string;
  lng?: string;
}) {
  const { proxy, merchantServiceUrl, q, lat, lng } = opts;
  const params = new URLSearchParams();
  if (q) params.set("q", q);
  if (lat && lat !== "undefined") params.set("lat", lat);
  if (lng && lng !== "undefined") params.set("lng", lng);
  const qs = params.toString() ? `?${params.toString()}` : "";
  const trimmed = String(q || "").trim();

  const biasLat = lat && !Number.isNaN(Number(lat)) ? Number(lat) : 20.932;
  const biasLng = lng && !Number.isNaN(Number(lng)) ? Number(lng) : 77.7523;

  const [hubRes, photonRes, nominatimPlaces] = await Promise.all([
    proxy
      .dispatch<any>(merchantServiceUrl, `/api/v1/merchants/localities/public${qs}`)
      .catch(() => ({ data: [] })),
    trimmed.length >= 2
      ? fetch(
          `https://photon.komoot.io/api/?q=${encodeURIComponent(trimmed)}&limit=6&lat=${biasLat}&lon=${biasLng}`,
          { signal: AbortSignal.timeout(4000) }
        )
          .then((r) => (r.ok ? r.json() : null))
          .catch(() => null)
      : Promise.resolve(null),
    trimmed.length >= 3
      ? fetch(
          `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&countrycodes=in&limit=5&q=${encodeURIComponent(
            trimmed
          )}`,
          {
            headers: { "User-Agent": "NukkadNow-Platform/1.0 (location-picker)" },
            signal: AbortSignal.timeout(4500),
          }
        )
          .then((r) => (r.ok ? r.json() : []))
          .catch(() => [])
      : Promise.resolve([]),
  ]);

  const hubs: any[] = Array.isArray(hubRes?.data) ? hubRes.data : [];
  const seenNames = new Set(hubs.map((h) => String(h.name || "").toLowerCase()));
  const extraPlaces: any[] = [];

  const normalizeCity = (val: string) => String(val || "").replace(/^Amaravati$/i, "Amravati").trim();
  const deriveCityCode = (cityPart: string) => {
    const low = cityPart.toLowerCase();
    if (low.includes("amravati")) return "IN-MH-AMR";
    if (low.includes("nagpur")) return "IN-MH-NGP";
    if (low.includes("akola")) return "IN-MH-AKL";
    return "";
  };

  const photonFeatures = Array.isArray(photonRes?.features) ? photonRes.features : [];
  for (let idx = 0; idx < photonFeatures.length; idx++) {
    const f = photonFeatures[idx];
    const props = f?.properties || {};
    const coords = Array.isArray(f?.geometry?.coordinates) ? f.geometry.coordinates : [];
    const fLng = Number(coords[0]);
    const fLat = Number(coords[1]);
    if (Number.isNaN(fLat) || Number.isNaN(fLng)) continue;
    if (props.countrycode && String(props.countrycode).toUpperCase() !== "IN") continue;

    const localPart = props.name || props.district || props.street || props.locality || "";
    const cityPart = normalizeCity(props.city || props.county || props.state || "");
    const statePart = String(props.state || "");
    const formatted = [localPart, cityPart].filter(Boolean).join(", ");
    const pincode = String(props.postcode || "");
    if (!formatted || seenNames.has(formatted.toLowerCase())) continue;
    seenNames.add(formatted.toLowerCase());

    extraPlaces.push({
      id: `photon-${props.osm_id || idx}`,
      name: formatted,
      locality: localPart || cityPart,
      city: cityPart,
      state: statePart,
      district: String(props.county || cityPart),
      cityCode: deriveCityCode(cityPart),
      pincode,
      latitude: fLat,
      longitude: fLng,
      outletsCount: 0,
      isServiceable: true,
      distance: [props.street, props.district, cityPart, statePart, pincode].filter(Boolean).join(", "),
      source: "PLACE_SEARCH",
    });
  }

  for (let idx = 0; idx < (Array.isArray(nominatimPlaces) ? nominatimPlaces.length : 0); idx++) {
    const p = nominatimPlaces[idx];
    const addr = p.address || {};
    const localPart =
      addr.neighbourhood || addr.suburb || addr.road || addr.village || addr.town || p.name || "";
    const cityPart = normalizeCity(
      addr.city || addr.town || addr.city_district || addr.state_district || addr.county || addr.state || ""
    );
    const statePart = String(addr.state || "");
    const formatted =
      [localPart, cityPart].filter(Boolean).join(", ") || p.display_name?.split(",").slice(0, 2).join(", ");
    const pincode = String(addr.postcode || "");
    const pLat = Number(p.lat);
    const pLng = Number(p.lon);
    if (!formatted || Number.isNaN(pLat) || Number.isNaN(pLng) || seenNames.has(formatted.toLowerCase())) continue;
    seenNames.add(formatted.toLowerCase());

    extraPlaces.push({
      id: `geo-${p.place_id || idx}`,
      name: formatted,
      locality: localPart || cityPart,
      city: cityPart,
      state: statePart,
      district: String(addr.state_district || addr.county || cityPart),
      cityCode: deriveCityCode(cityPart),
      pincode,
      latitude: pLat,
      longitude: pLng,
      outletsCount: 0,
      isServiceable: true,
      distance: `${p.display_name?.split(",").slice(0, 3).join(",") || cityPart}${pincode ? ` • ${pincode}` : ""}`,
      source: "PLACE_SEARCH",
    });
  }

  return { success: true, data: [...hubs, ...extraPlaces] };
}

export async function reverseGeocodeWithOsm(opts: {
  proxy: ProxyDispatcherService;
  merchantServiceUrl: string;
  lat: string;
  lng: string;
}) {
  const { proxy, merchantServiceUrl, lat, lng } = opts;
  const parsedLat = Number(lat);
  const parsedLng = Number(lng);
  if (Number.isNaN(parsedLat) || Number.isNaN(parsedLng)) {
    return { success: false, message: "Valid latitude and longitude are required" };
  }

  const [hubRes, geoJson, bdcJson] = await Promise.all([
    proxy
      .dispatch<any>(
        merchantServiceUrl,
        `/api/v1/merchants/localities/public?lat=${encodeURIComponent(String(parsedLat))}&lng=${encodeURIComponent(
          String(parsedLng)
        )}`
      )
      .catch(() => ({ data: [] })),
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&addressdetails=1&zoom=18&lat=${encodeURIComponent(
        String(parsedLat)
      )}&lon=${encodeURIComponent(String(parsedLng))}`,
      {
        headers: { "User-Agent": "NukkadNow-Platform/1.0 (location-picker)" },
        signal: AbortSignal.timeout(5500),
      }
    )
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null),
    fetch(
      `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${encodeURIComponent(
        String(parsedLat)
      )}&longitude=${encodeURIComponent(String(parsedLng))}&localityLanguage=en`,
      { signal: AbortSignal.timeout(4000) }
    )
      .then((r) => (r.ok ? r.json() : null))
      .catch(() => null),
  ]);

  const hubs: any[] = Array.isArray(hubRes?.data) ? hubRes.data : [];
  const nearestHub = hubs[0] || null;
  const addr = geoJson?.address || {};

  const rawCity =
    addr.city ||
    addr.town ||
    addr.city_district ||
    bdcJson?.city ||
    addr.state_district ||
    addr.county ||
    (nearestHub && nearestHub.distanceKm <= 12 ? nearestHub.city : "");
  const cityPart = String(rawCity || "Selected City").replace(/^Amaravati$/i, "Amravati").trim();

  const rawLocal =
    addr.neighbourhood ||
    addr.suburb ||
    addr.residential ||
    addr.hamlet ||
    addr.road ||
    addr.village ||
    (bdcJson?.locality && bdcJson.locality !== cityPart ? bdcJson.locality : "") ||
    (nearestHub && nearestHub.distanceKm <= 8 ? nearestHub.locality : "") ||
    cityPart;
  const localPart = String(rawLocal || "Pinned Area").trim();

  const statePart = addr.state || bdcJson?.principalSubdivision || "";
  const districtPart = String(addr.state_district || addr.county || cityPart).replace(/^Amaravati$/i, "Amravati").trim();
  const pincode = String(
    addr.postcode || bdcJson?.postcode || (nearestHub && nearestHub.distanceKm <= 12 ? nearestHub.pincode : "") || ""
  );

  const name =
    localPart.toLowerCase() === cityPart.toLowerCase() ? cityPart : `${localPart}, ${cityPart}`;
  const fullAddress =
    geoJson?.display_name ||
    [localPart, cityPart, statePart, pincode].filter(Boolean).join(", ");

  const matchingHub =
    hubs.find((h) => String(h.city || "").toLowerCase() === cityPart.toLowerCase()) || nearestHub;
  const nearestDistKm = matchingHub?.distanceKm ?? 0;
  const nearbyOutletsCount = matchingHub && nearestDistKm <= 25 ? matchingHub.outletsCount ?? 0 : 0;
  const isServiceable = nearbyOutletsCount > 0 || nearestDistKm <= 20;

  return {
    success: true,
    data: {
      name,
      locality: localPart,
      city: cityPart,
      district: districtPart,
      state: statePart,
      cityCode: cityPart.toLowerCase().includes("amravati")
        ? "IN-MH-AMR"
        : cityPart.toLowerCase().includes("nagpur")
          ? "IN-MH-NGP"
          : cityPart.toLowerCase().includes("akola")
            ? "IN-MH-AKL"
            : matchingHub?.cityCode || "",
      pincode,
      fullAddress,
      latitude: parsedLat,
      longitude: parsedLng,
      isServiceable,
      nearbyOutletsCount,
      distanceKm: nearestDistKm,
      nearestHub: matchingHub,
    },
  };
}
