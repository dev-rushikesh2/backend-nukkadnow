import { Injectable } from "@nestjs/common";
import { MerchantRepositoryPort, OutletRepositoryPort } from "../../../domain/repositories/merchant.repository.port";
import { Merchant } from "../../../domain/entities/merchant.entity";
import { Outlet } from "../../../domain/entities/outlet.entity";
import { Address } from "../../../domain/value-objects/address.vo";
import { OperatingHours } from "../../../domain/value-objects/operating-hours.vo";
import { SellerMode } from "../../../domain/value-objects/seller-mode.vo";

@Injectable()
export class InMemoryMerchantRepository implements MerchantRepositoryPort {
  private merchants = new Map<string, Merchant>();

  constructor() {
    this.seedMerchants();
  }

  private seedMerchants() {
    // 1. Sabji Wala: Patil Fresh Sabji Mandi
    const sabjiMerchant = new Merchant({
      id: "merchant-sabji-001",
      organizationName: "Patil Fresh Sabji Mandi",
      legalBusinessName: "Patil Agro & Fresh Vegetables Private Limited",
      contactName: "Vinod Patil",
      contactPhone: "+91 98230 11223",
      email: "vinod.patil@patilsabji.com",
      businessType: "retail",
      category: "Vegetables & Fruits",
      description: "Direct farm-sourced daily fresh vegetables, green leafy veggies, herbs, ginger, garlic and seasonal fruits from local Vidarbha farmers.",
      verificationStatus: "VERIFIED",
      createdAt: new Date("2026-11-14T06:00:00Z"),
      updatedAt: new Date("2026-11-14T06:00:00Z"),
    });

    // 2. Kirana: Sharma Kirana & General Store
    const kiranaMerchant = new Merchant({
      id: "merchant-kirana-002",
      organizationName: "Sharma Kirana & General Store",
      legalBusinessName: "Sharma Kirana & Provisions Proprietary",
      contactName: "Rajesh Sharma",
      contactPhone: "+91 98765 43210",
      email: "rajesh@sharmakirana.com",
      businessType: "retail",
      category: "Grocery & Daily Needs",
      description: "A neighbourhood grocery store offering daily essentials, spices, pulses, rice, edible oils, dairy, household items and personal care products.",
      verificationStatus: "VERIFIED",
      createdAt: new Date("2026-11-15T09:00:00Z"),
      updatedAt: new Date("2026-11-15T09:00:00Z"),
    });

    // 3. Garguti Chivda: Sunita Kulkarni (Home Business / Artisan Kitchen)
    const gargutiMerchant = new Merchant({
      id: "merchant-garguti-003",
      organizationName: "Garguti Homemade Chivda & Snacks",
      legalBusinessName: "Kulkarni Traditional Food Products",
      contactName: "Sunita Kulkarni",
      contactPhone: "+91 98221 44556",
      email: "sunita.kulkarni@gargutichivda.in",
      businessType: "home",
      category: "Home Bakery & Traditional Snacks",
      description: "Authentic homemade Vidarbha special spicy poha chivda, bakarwadi, cornflakes chivda, chakli, besan laddoo and traditional festive faral made with pure groundnut oil and family secret spices.",
      verificationStatus: "VERIFIED",
      createdAt: new Date("2026-11-16T10:00:00Z"),
      updatedAt: new Date("2026-11-16T10:00:00Z"),
    });

    // 4. Sweets & Bakery: Mahalaxmi Sweets, Dairy & Bakery
    const sweetsMerchant = new Merchant({
      id: "merchant-sweets-004",
      organizationName: "Mahalaxmi Sweets, Dairy & Bakery",
      legalBusinessName: "Mahalaxmi Food & Confectioneries LLP",
      contactName: "Anand Joshi",
      contactPhone: "+91 98900 77889",
      email: "anand.joshi@mahalaxmisweets.com",
      businessType: "retail",
      category: "Dairy, Sweets & Bakery",
      description: "Renowned authentic Nagpur orange barfi, motichoor laddoo, fresh buffalo paneer, pure cow ghee, daily milk, hot jalebi and artisan sourdough breads.",
      verificationStatus: "VERIFIED",
      createdAt: new Date("2026-11-17T07:30:00Z"),
      updatedAt: new Date("2026-11-17T07:30:00Z"),
    });

    [sabjiMerchant, kiranaMerchant, gargutiMerchant, sweetsMerchant].forEach(m => {
      this.merchants.set(m.id, m);
    });
  }

  async findById(id: string): Promise<Merchant | null> {
    return this.merchants.get(id) || null;
  }

  async findByContactPhone(phone: string): Promise<Merchant | null> {
    const cleaned = phone.replace(/\s+/g, "");
    for (const m of this.merchants.values()) {
      if (m.contactPhone.replace(/\s+/g, "") === cleaned) return m;
    }
    return null;
  }

  async listAll(): Promise<Merchant[]> {
    return Array.from(this.merchants.values());
  }

  async save(merchant: Merchant): Promise<void> {
    this.merchants.set(merchant.id, merchant);
  }
}

@Injectable()
export class InMemoryOutletRepository implements OutletRepositoryPort {
  private outlets = new Map<string, Outlet>();

  constructor() {
    this.seedOutlets();
  }

  private seedOutlets() {
    // 1. Sabji Mandi Outlet
    const sabjiSlots = [0, 1, 2, 3, 4, 5, 6].map(day => ({
      dayOfWeek: day,
      openTime: "06:00 AM",
      closeTime: "08:30 PM",
      breakTime: "01:00 - 02:00 PM",
      isClosed: false,
    }));

    const sabjiOutlet = new Outlet({
      id: "outlet-sabji-001",
      merchantId: "merchant-sabji-001",
      name: "Patil Fresh Mandi - Sitabuldi Wholesale Market",
      sellerMode: SellerMode.PERMANENT,
      address: new Address({
        addressLine: "Shop No. 4, Wholesale Sabji Mandi",
        locality: "Sitabuldi",
        city: "Nagpur",
        latitude: 21.1466,
        longitude: 79.0833,
        isAddressPublic: true,
      }),
      hours: new OperatingHours(sabjiSlots),
      isActive: true,
      createdAt: new Date("2026-11-14T06:00:00Z"),
      updatedAt: new Date("2026-11-14T06:00:00Z"),
    });

    // 2. Kirana Outlet
    const kiranaSlots = [0, 1, 2, 3, 4, 5, 6].map(day => ({
      dayOfWeek: day,
      openTime: "09:00 AM",
      closeTime: "09:00 PM",
      breakTime: "01:00 - 02:00 PM",
      isClosed: day === 0, // Sunday closed
    }));

    const kiranaOutlet = new Outlet({
      id: "outlet-kirana-002",
      merchantId: "merchant-kirana-002",
      name: "Sharma Kirana - Civil Lines Main Store",
      sellerMode: SellerMode.PERMANENT,
      address: new Address({
        addressLine: "Shop No. 12, Main Market Road",
        locality: "Civil Lines",
        city: "Akola",
        latitude: 20.7002,
        longitude: 77.0082,
        isAddressPublic: true,
      }),
      hours: new OperatingHours(kiranaSlots),
      isActive: true,
      createdAt: new Date("2026-11-15T09:00:00Z"),
      updatedAt: new Date("2026-11-15T09:00:00Z"),
    });

    // 3. Garguti Chivda Home Kitchen Outlet (Masked Address)
    const gargutiSlots = [0, 1, 2, 3, 4, 5, 6].map(day => ({
      dayOfWeek: day,
      openTime: day === 0 ? "11:00 AM" : "10:00 AM",
      closeTime: day === 0 ? "04:00 PM" : "07:00 PM",
      isClosed: false,
    }));

    const gargutiOutlet = new Outlet({
      id: "outlet-garguti-003",
      merchantId: "merchant-garguti-003",
      name: "Garguti Artisan Kitchen - Ramdaspeth",
      sellerMode: SellerMode.HOME_CHEF,
      address: new Address({
        addressLine: "Flat 302, Radha Krishna Heights, Ramdaspeth",
        locality: "Ramdaspeth",
        city: "Akola",
        latitude: 20.6975,
        longitude: 77.0012,
        isAddressPublic: false, // Masked for Home Privacy
      }),
      hours: new OperatingHours(gargutiSlots),
      isActive: true,
      createdAt: new Date("2026-11-16T10:00:00Z"),
      updatedAt: new Date("2026-11-16T10:00:00Z"),
    });

    // 4. Sweets & Bakery Outlet
    const sweetsSlots = [0, 1, 2, 3, 4, 5, 6].map(day => ({
      dayOfWeek: day,
      openTime: "07:30 AM",
      closeTime: "10:30 PM",
      isClosed: false,
    }));

    const sweetsOutlet = new Outlet({
      id: "outlet-sweets-004",
      merchantId: "merchant-sweets-004",
      name: "Mahalaxmi Sweets - Dharampeth Flagship",
      sellerMode: SellerMode.PERMANENT,
      address: new Address({
        addressLine: "Plot 18, West High Court Road",
        locality: "Dharampeth",
        city: "Nagpur",
        latitude: 21.1408,
        longitude: 79.0620,
        isAddressPublic: true,
      }),
      hours: new OperatingHours(sweetsSlots),
      isActive: true,
      createdAt: new Date("2026-11-17T07:30:00Z"),
      updatedAt: new Date("2026-11-17T07:30:00Z"),
    });

    [sabjiOutlet, kiranaOutlet, gargutiOutlet, sweetsOutlet].forEach(o => {
      this.outlets.set(o.id, o);
    });
  }

  async findById(id: string): Promise<Outlet | null> {
    return this.outlets.get(id) || null;
  }

  async findByMerchantId(merchantId: string): Promise<Outlet[]> {
    return Array.from(this.outlets.values()).filter(o => o.merchantId === merchantId);
  }

  async findByLocality(locality: string): Promise<Outlet[]> {
    return Array.from(this.outlets.values()).filter(
      o => o.address.locality.toLowerCase() === locality.toLowerCase()
    );
  }

  async listAll(): Promise<Outlet[]> {
    return Array.from(this.outlets.values());
  }

  async save(outlet: Outlet): Promise<void> {
    this.outlets.set(outlet.id, outlet);
  }
}
