import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../infrastructure/persistence/prisma/prisma.service';

export interface AuditLogEntry {
  tenantId: string;
  outletId?: string;
  actorStaffId: string;
  actorName: string;
  actorRole: string;
  authMode?: string;
  module: string;
  action: string;
  targetType?: string;
  targetId?: string;
  targetLabel?: string;
  beforeState?: any;
  afterState?: any;
  notes?: string;
}

/**
 * AuditLogService — INSERT-ONLY audit trail for all shop mutations.
 *
 * Rules:
 * - No UPDATE or DELETE endpoint is ever exposed (not even for Owner).
 * - Every call to log() appends a new row to shop_audit_logs.
 * - Queries are always tenant-scoped.
 */
@Injectable()
export class AuditLogService {
  constructor(private readonly prisma: PrismaService) {}

  /**
   * Append a new audit log entry. Fire-and-forget friendly — errors are swallowed
   * so they never cause the main operation to fail.
   */
  async log(entry: AuditLogEntry): Promise<void> {
    try {
      await this.prisma.shopAuditLog.create({
        data: {
          tenantId: entry.tenantId,
          outletId: entry.outletId,
          actorStaffId: entry.actorStaffId,
          actorName: entry.actorName,
          actorRole: entry.actorRole,
          authMode: entry.authMode || 'OWNER_OTP',
          module: entry.module,
          action: entry.action,
          targetType: entry.targetType,
          targetId: entry.targetId,
          targetLabel: entry.targetLabel,
          beforeState: entry.beforeState ?? undefined,
          afterState: entry.afterState ?? undefined,
          notes: entry.notes,
        },
      });
    } catch (err) {
      // Audit failures must never break the main operation
      console.error('[AuditLogService] Failed to write audit log:', err);
    }
  }

  /**
   * Query audit logs for a tenant. Owner-only endpoint.
   */
  async getForTenant(
    tenantId: string,
    filters?: {
      module?: string;
      actorStaffId?: string;
      from?: Date;
      to?: Date;
      limit?: number;
    }
  ): Promise<any[]> {
    const where: any = { tenantId };
    if (filters?.module) where.module = filters.module;
    if (filters?.actorStaffId) where.actorStaffId = filters.actorStaffId;
    if (filters?.from || filters?.to) {
      where.createdAt = {};
      if (filters.from) where.createdAt.gte = filters.from;
      if (filters.to) where.createdAt.lte = filters.to;
    }

    return this.prisma.shopAuditLog.findMany({
      where,
      orderBy: { createdAt: 'desc' },
      take: filters?.limit ?? 200,
    });
  }
}
