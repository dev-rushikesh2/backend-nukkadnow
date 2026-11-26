import { Injectable } from "@nestjs/common";
import { ProductRepositoryPort } from "../../../domain/repositories/catalog.repository.port";
import { Product, ProductVariant } from "../../../domain/entities/product.entity";
import { PrismaService } from "../prisma/prisma.service";

@Injectable()
export class PrismaProductRepository implements ProductRepositoryPort {
  constructor(private readonly prisma: PrismaService) {}

  async findById(id: string): Promise<Product | null> {
    const record = await this.prisma.product.findUnique({
      where: { id },
      include: { variants: true },
    });
    return record ? this.toDomain(record) : null;
  }

  async findByOutletId(outletId: string): Promise<Product[]> {
    const records = await this.prisma.product.findMany({
      where: { outletId },
      include: { variants: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async findByTenantId(tenantId: string): Promise<Product[]> {
    const records = await this.prisma.product.findMany({
      where: { tenantId },
      include: { variants: true },
    });
    return records.map((r: any) => this.toDomain(r));
  }

  async save(product: Product): Promise<void> {
    await this.prisma.$transaction(async (tx: any) => {
      await tx.product.upsert({
        where: { id: product.id },
        create: {
          id: product.id,
          tenantId: product.tenantId,
          outletId: product.outletId,
          name: product.name,
          description: product.description ?? null,
          category: product.category,
          subCategory: product.subCategory ?? null,
          isAvailable: product.isAvailable,
        },
        update: {
          tenantId: product.tenantId,
          outletId: product.outletId,
          name: product.name,
          description: product.description ?? null,
          category: product.category,
          subCategory: product.subCategory ?? null,
          isAvailable: product.isAvailable,
          updatedAt: new Date(),
        },
      });

      for (const v of product.variants) {
        await tx.productVariant.upsert({
          where: { id: v.id },
          create: {
            id: v.id,
            productId: product.id,
            tenantId: product.tenantId,
            outletId: product.outletId,
            name: v.name,
            sku: v.sku ?? null,
            barcode: v.barcode ?? null,
            pricePaise: v.pricePaise,
            compareAtPricePaise: v.compareAtPricePaise ?? null,
            isPreorder: v.isPreorder,
            leadTimeMinutes: v.leadTimeMinutes,
          },
          update: {
            tenantId: product.tenantId,
            outletId: product.outletId,
            name: v.name,
            sku: v.sku ?? null,
            barcode: v.barcode ?? null,
            pricePaise: v.pricePaise,
            compareAtPricePaise: v.compareAtPricePaise ?? null,
            isPreorder: v.isPreorder,
            leadTimeMinutes: v.leadTimeMinutes,
            updatedAt: new Date(),
          },
        });
      }
    });
  }

  async delete(id: string): Promise<void> {
    await this.prisma.product.delete({ where: { id } });
  }

  private toDomain(record: any): Product {
    const variants = (record.variants || []).map(
      (v: any) =>
        new ProductVariant({
          id: v.id,
          productId: v.productId,
          name: v.name,
          sku: v.sku ?? undefined,
          barcode: v.barcode ?? undefined,
          pricePaise: v.pricePaise,
          compareAtPricePaise: v.compareAtPricePaise ?? undefined,
          isPreorder: v.isPreorder,
          leadTimeMinutes: v.leadTimeMinutes,
        })
    );

    return new Product({
      id: record.id,
      tenantId: record.tenantId,
      outletId: record.outletId,
      name: record.name,
      description: record.description ?? undefined,
      category: record.category,
      subCategory: record.subCategory ?? undefined,
      isAvailable: record.isAvailable,
      variants,
      createdAt: record.createdAt,
      updatedAt: record.updatedAt,
    });
  }
}
