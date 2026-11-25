import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
  NotFoundException,
} from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { IsBoolean, IsInt, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

export class CreateMarketingBannerDto {
  @IsString()
  @IsNotEmpty()
  title!: string;

  @IsString()
  @IsOptional()
  highlightText?: string;

  @IsString()
  @IsNotEmpty()
  subtitle!: string;

  @IsString()
  @IsOptional()
  badgeText?: string;

  @IsString()
  @IsOptional()
  ctaLabel?: string;

  @IsString()
  @IsOptional()
  actionType?: string;

  @IsString()
  @IsOptional()
  actionTarget?: string;

  @IsString()
  @IsOptional()
  visualIcons?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  bgGradient?: string;

  @IsString()
  @IsOptional()
  textColor?: string;

  @IsString()
  @IsOptional()
  highlightColor?: string;

  @IsString()
  @IsOptional()
  cityCode?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  displayOrder?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  startsAt?: string;

  @IsString()
  @IsOptional()
  endsAt?: string;
}

export class UpdateMarketingBannerDto {
  @IsString()
  @IsOptional()
  title?: string;

  @IsString()
  @IsOptional()
  highlightText?: string;

  @IsString()
  @IsOptional()
  subtitle?: string;

  @IsString()
  @IsOptional()
  badgeText?: string;

  @IsString()
  @IsOptional()
  ctaLabel?: string;

  @IsString()
  @IsOptional()
  actionType?: string;

  @IsString()
  @IsOptional()
  actionTarget?: string;

  @IsString()
  @IsOptional()
  visualIcons?: string;

  @IsString()
  @IsOptional()
  imageUrl?: string;

  @IsString()
  @IsOptional()
  bgGradient?: string;

  @IsString()
  @IsOptional()
  textColor?: string;

  @IsString()
  @IsOptional()
  highlightColor?: string;

  @IsString()
  @IsOptional()
  cityCode?: string;

  @Type(() => Number)
  @IsInt()
  @IsOptional()
  displayOrder?: number;

  @IsBoolean()
  @IsOptional()
  isActive?: boolean;

  @IsString()
  @IsOptional()
  startsAt?: string | null;

  @IsString()
  @IsOptional()
  endsAt?: string | null;
}

export class TrackBannerDto {
  @IsString()
  @IsOptional()
  type?: string;
}

@ApiTags("Marketing Banners & Campaigns")
@Controller("api/v1/marketing/banners")
export class MarketingBannerController {
  constructor(private readonly prisma: PrismaService) {}

  private async ensureStarterBanners(): Promise<void> {
    const count = await this.prisma.marketingBanner.count();
    if (count > 0) return;

    const starters = [
      {
        id: UniqueIdentifier.generateV7(),
        title: "Shop Local Support",
        highlightText: "Nukkad",
        subtitle: "Your favourite neighbourhood shops, now at your fingertips!",
        badgeText: "LOCAL HERO",
        ctaLabel: "Explore Shops",
        actionType: "DISCOVERY",
        actionTarget: "/discovery",
        visualIcons: "🧺 🍅 🥬 🥖 🥛",
        bgGradient: "linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)",
        textColor: "#ffffff",
        highlightColor: "#fbbf24",
        cityCode: "ALL",
        displayOrder: 1,
        isActive: true,
      },
      {
        id: UniqueIdentifier.generateV7(),
        title: "Fresh Morning",
        highlightText: "Harvest",
        subtitle: "Handpicked fruits, veggies & dairy delivered within 30 mins!",
        badgeText: "FRESH DAILY",
        ctaLabel: "Browse Categories",
        actionType: "CATEGORY",
        actionTarget: "/categories",
        visualIcons: "🥬 🥕 🫑 🥭 🍎",
        bgGradient: "linear-gradient(135deg, #065f46 0%, #047857 100%)",
        textColor: "#ffffff",
        highlightColor: "#fde047",
        cityCode: "ALL",
        displayOrder: 2,
        isActive: true,
      },
      {
        id: UniqueIdentifier.generateV7(),
        title: "Express Store",
        highlightText: "Pickup & Deals",
        subtitle: "Order online & skip the queue at trusted neighbourhood kiranas.",
        badgeText: "ZERO WAIT",
        ctaLabel: "Find Nearby",
        actionType: "DISCOVERY",
        actionTarget: "/discovery/map",
        visualIcons: "🏪 ⚡ 🛍️ 🏷️ ✨",
        bgGradient: "linear-gradient(135deg, #c2410c 0%, #7c2d12 100%)",
        textColor: "#ffffff",
        highlightColor: "#fef08a",
        cityCode: "ALL",
        displayOrder: 3,
        isActive: true,
      },
    ];

    await this.prisma.marketingBanner.createMany({ data: starters });
  }

  @Get("public")
  @ApiOperation({ summary: "Public: List active marketing carousel banners for customer app" })
  async listPublic(@Query("cityCode") cityCode?: string) {
    await this.ensureStarterBanners();
    const now = new Date();
    const allActive = await this.prisma.marketingBanner.findMany({
      where: {
        isActive: true,
        ...(cityCode && cityCode !== "ALL" ? { cityCode: { in: ["ALL", cityCode] } } : {}),
      },
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    });

    const items = allActive.filter((b) => {
      if (b.startsAt && new Date(b.startsAt) > now) return false;
      if (b.endsAt && new Date(b.endsAt) < now) return false;
      return true;
    });

    return { success: true, data: items };
  }

  @Post(":id/track")
  @ApiOperation({ summary: "Track banner impression or click from customer app" })
  async trackBanner(@Param("id") id: string, @Body() body: TrackBannerDto) {
    const type = String(body?.type || "click").toLowerCase();
    const exists = await this.prisma.marketingBanner.findUnique({ where: { id } });
    if (!exists) return { success: true, tracked: false };

    const updated = await this.prisma.marketingBanner.update({
      where: { id },
      data:
        type === "impression"
          ? { impressionCount: { increment: 1 } }
          : { clickCount: { increment: 1 } },
    });
    return {
      success: true,
      tracked: true,
      clickCount: updated.clickCount,
      impressionCount: updated.impressionCount,
    };
  }

  @Get()
  @ApiOperation({ summary: "Admin: List all marketing banners and performance counts" })
  async listAdmin(@Query("cityCode") cityCode?: string) {
    await this.ensureStarterBanners();
    const where: any = {};
    if (cityCode && cityCode !== "ALL") where.cityCode = cityCode;

    const items = await this.prisma.marketingBanner.findMany({
      where,
      orderBy: [{ displayOrder: "asc" }, { createdAt: "asc" }],
    });

    return {
      success: true,
      data: {
        items,
        summary: {
          total: items.length,
          active: items.filter((i) => i.isActive).length,
          paused: items.filter((i) => !i.isActive).length,
          totalClicks: items.reduce((s, i) => s + (i.clickCount || 0), 0),
          totalImpressions: items.reduce((s, i) => s + (i.impressionCount || 0), 0),
        },
      },
    };
  }

  @Post()
  @ApiOperation({ summary: "Admin: Create a marketing banner campaign" })
  async create(@Body() dto: CreateMarketingBannerDto) {
    const maxOrder = await this.prisma.marketingBanner.aggregate({ _max: { displayOrder: true } });
    const created = await this.prisma.marketingBanner.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        title: dto.title.trim(),
        highlightText: dto.highlightText?.trim() || null,
        subtitle: dto.subtitle.trim(),
        badgeText: dto.badgeText?.trim() || null,
        ctaLabel: dto.ctaLabel?.trim() || "Explore Shops",
        actionType: String(dto.actionType || "DISCOVERY").toUpperCase(),
        actionTarget: dto.actionTarget?.trim() || "/discovery",
        visualIcons: dto.visualIcons?.trim() || "🧺 🍅 🥬 🥖 🥛",
        imageUrl: dto.imageUrl?.trim() || null,
        bgGradient: dto.bgGradient?.trim() || "linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)",
        textColor: dto.textColor?.trim() || "#ffffff",
        highlightColor: dto.highlightColor?.trim() || "#fbbf24",
        cityCode: dto.cityCode?.trim() || "ALL",
        displayOrder: dto.displayOrder ?? (maxOrder._max.displayOrder ?? 0) + 1,
        isActive: dto.isActive ?? true,
        startsAt: dto.startsAt ? new Date(dto.startsAt) : null,
        endsAt: dto.endsAt ? new Date(dto.endsAt) : null,
      },
    });
    return { success: true, data: created };
  }

  @Put(":id")
  @ApiOperation({ summary: "Admin: Update a marketing banner campaign" })
  async update(@Param("id") id: string, @Body() dto: UpdateMarketingBannerDto) {
    const existing = await this.prisma.marketingBanner.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Banner '${id}' not found`);

    const updated = await this.prisma.marketingBanner.update({
      where: { id },
      data: {
        ...(dto.title !== undefined && { title: dto.title.trim() }),
        ...(dto.highlightText !== undefined && { highlightText: dto.highlightText?.trim() || null }),
        ...(dto.subtitle !== undefined && { subtitle: dto.subtitle.trim() }),
        ...(dto.badgeText !== undefined && { badgeText: dto.badgeText?.trim() || null }),
        ...(dto.ctaLabel !== undefined && { ctaLabel: dto.ctaLabel.trim() || "Explore Shops" }),
        ...(dto.actionType !== undefined && { actionType: String(dto.actionType).toUpperCase() }),
        ...(dto.actionTarget !== undefined && { actionTarget: dto.actionTarget?.trim() || "/discovery" }),
        ...(dto.visualIcons !== undefined && { visualIcons: dto.visualIcons?.trim() || "🧺 🍅 🥬 🥖 🥛" }),
        ...(dto.imageUrl !== undefined && { imageUrl: dto.imageUrl?.trim() || null }),
        ...(dto.bgGradient !== undefined && { bgGradient: dto.bgGradient.trim() }),
        ...(dto.textColor !== undefined && { textColor: dto.textColor.trim() }),
        ...(dto.highlightColor !== undefined && { highlightColor: dto.highlightColor.trim() }),
        ...(dto.cityCode !== undefined && { cityCode: dto.cityCode.trim() }),
        ...(dto.displayOrder !== undefined && { displayOrder: dto.displayOrder }),
        ...(dto.isActive !== undefined && { isActive: dto.isActive }),
        ...(dto.startsAt !== undefined && { startsAt: dto.startsAt ? new Date(dto.startsAt) : null }),
        ...(dto.endsAt !== undefined && { endsAt: dto.endsAt ? new Date(dto.endsAt) : null }),
      },
    });
    return { success: true, data: updated };
  }

  @Delete(":id")
  @ApiOperation({ summary: "Admin: Delete a marketing banner campaign" })
  async remove(@Param("id") id: string) {
    const existing = await this.prisma.marketingBanner.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`Banner '${id}' not found`);
    await this.prisma.marketingBanner.delete({ where: { id } });
    return { success: true, data: { deleted: true, id } };
  }
}
