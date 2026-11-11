import { MerchantService } from "../../src/modules/merchant/application/services/merchant.service";
import { InMemoryMerchantRepository, InMemoryOutletRepository } from "../../src/modules/merchant/infrastructure/persistence/repositories/in-memory-merchant.repository";
import { SellerMode } from "../../src/modules/merchant/domain/value-objects/seller-mode.vo";
import { ForbiddenException } from "@nestjs/common";

describe("Merchant Service - MerchantService (Sprint 3)", () => {
  let service: MerchantService;
  let merchantRepo: InMemoryMerchantRepository;
  let outletRepo: InMemoryOutletRepository;

  beforeEach(() => {
    merchantRepo = new InMemoryMerchantRepository();
    outletRepo = new InMemoryOutletRepository();
    service = new MerchantService(merchantRepo, outletRepo);
  });

  it("should register a merchant organization successfully", async () => {
    const merchant = await service.registerMerchant({
      organizationName: "Nagpur Sweets & Bakery",
      contactName: "Sunil Agrawal",
      contactPhone: "+919876543210",
    });

    expect(merchant.id).toBeDefined();
    expect(merchant.organizationName).toBe("Nagpur Sweets & Bakery");
    expect(merchant.verificationStatus).toBe("PENDING");
  });

  it("should create a standard permanent outlet with full address visible", async () => {
    const merchant = await service.registerMerchant({
      organizationName: "Apna Kirana",
      contactName: "Ramesh",
      contactPhone: "+919876543211",
    });

    const outlet = await service.createOutlet({
      merchantId: merchant.id,
      name: "Sitabuldi Main Store",
      sellerMode: SellerMode.PERMANENT,
      addressLine: "Shop 10, Main Market, Sitabuldi",
      locality: "Sitabuldi",
      city: "Nagpur",
      latitude: 21.1458,
      longitude: 79.0882,
      isAddressPublic: true,
    });

    const publicProfile = await service.getPublicOutlet(outlet.id);
    expect(publicProfile.location.addressLine).toBe("Shop 10, Main Market, Sitabuldi");
    expect(publicProfile.location.isApproximateLocation).toBe(false);
  });

  it("ADR 0011: should mask private address for home chef outlets", async () => {
    const merchant = await service.registerMerchant({
      organizationName: "Priya Homemade Bakes",
      contactName: "Priya Joshi",
      contactPhone: "+919876543212",
    });

    const outlet = await service.createOutlet({
      merchantId: merchant.id,
      name: "Priya Home Bakery",
      sellerMode: SellerMode.HOME_CHEF,
      addressLine: "Flat 402, Gokul Enclave, Dhantoli", // Private residential address
      locality: "Dhantoli",
      city: "Nagpur",
      latitude: 21.1325,
      longitude: 79.0815,
      isAddressPublic: false,
    });

    const publicProfile = await service.getPublicOutlet(outlet.id);
    // Verified: Private residential address is masked
    expect(publicProfile.location.addressLine).toContain("Private Kitchen");
    expect(publicProfile.location.addressLine).not.toContain("Flat 402");
    expect(publicProfile.location.locality).toBe("Dhantoli");
    expect(publicProfile.location.isApproximateLocation).toBe(true);
  });

  it("should block cross-tenant outlet creation attempts", async () => {
    const merchant = await service.registerMerchant({
      organizationName: "Valid Merchant",
      contactName: "Anand",
      contactPhone: "+919876543213",
    });

    await expect(
      service.createOutlet(
        {
          merchantId: merchant.id,
          name: "Attacked Store",
          sellerMode: SellerMode.PERMANENT,
          addressLine: "Somewhere",
          locality: "Dharampeth",
          city: "Nagpur",
          latitude: 21.14,
          longitude: 79.07,
          isAddressPublic: true,
        },
        "attacker_different_tenant_id"
      )
    ).rejects.toThrow(ForbiddenException);
  });
});
