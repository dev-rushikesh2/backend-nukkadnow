import {
  Controller,
  Get,
  Post,
  Put,
  Patch,
  Body,
  Param,
  Query,
  NotFoundException,
  ConflictException,
} from "@nestjs/common";
import { ApiTags, ApiOperation } from "@nestjs/swagger";
import { PrismaService } from "../../../infrastructure/persistence/prisma/prisma.service";
import { UniqueIdentifier } from "@nukkadnow/platform-kernel";

@ApiTags("identity")
@Controller("api/v1/identity")
export class identityController {
  constructor(private readonly prisma: PrismaService) {}

  @Get("ping")
  @ApiOperation({ summary: "Domain probe" })
  ping() {
    return { message: "Hello from identity domain" };
  }

  // =========================================================================
  // ADMIN: CUSTOMERS (/api/v1/identity/admin/users)
  // =========================================================================

  @Get("admin/users")
  @ApiOperation({ summary: "Admin: List customer accounts" })
  async listUsers(
    @Query("q") q?: string,
    @Query("search") search?: string,
    @Query("status") status?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const term = (q || search || "").trim();
    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 20));
    const skip = (pageNum - 1) * take;

    const where: any = {};
    if (status && status !== "ALL") where.status = status.toUpperCase();
    if (term) {
      where.OR = [
        { fullName: { contains: term, mode: "insensitive" } },
        { email: { contains: term, mode: "insensitive" } },
        { phoneNumber: { contains: term, mode: "insensitive" } },
      ];
    }

    const [records, total, activeCount, suspendedCount] = await Promise.all([
      this.prisma.user.findMany({
        where,
        include: { memberships: true },
        orderBy: { createdAt: "desc" },
        skip,
        take,
      }),
      this.prisma.user.count({ where }),
      this.prisma.user.count({ where: { status: "ACTIVE" } }),
      this.prisma.user.count({ where: { status: "SUSPENDED" } }),
    ]);

    const items = records.map((u: any) => ({
      id: u.id,
      fullName: u.fullName || "NukkadNow Customer",
      email: u.email,
      phoneNumber: u.phoneNumber,
      status: u.status,
      roles: u.memberships?.map((m: any) => m.role) || ["CUSTOMER"],
      createdAt: u.createdAt,
      updatedAt: u.updatedAt,
    }));

    return {
      success: true,
      data: {
        items,
        total,
        page: pageNum,
        limit: take,
        metrics: {
          totalCustomers: total,
          activeCustomers: activeCount,
          suspendedCustomers: suspendedCount,
        },
        counts: {
          ALL: total,
          ACTIVE: activeCount,
          SUSPENDED: suspendedCount,
        },
      },
    };
  }

  @Get("admin/users/:id")
  @ApiOperation({ summary: "Admin: Get customer profile" })
  async getUser(@Param("id") id: string) {
    const u = await this.prisma.user.findUnique({
      where: { id },
      include: { memberships: true },
    });
    if (!u) throw new NotFoundException(`User ${id} not found`);

    return {
      success: true,
      data: {
        id: u.id,
        fullName: u.fullName || "NukkadNow Customer",
        email: u.email,
        phoneNumber: u.phoneNumber,
        status: u.status,
        roles: u.memberships?.map((m: any) => m.role) || ["CUSTOMER"],
        createdAt: u.createdAt,
        updatedAt: u.updatedAt,
      },
    };
  }

  @Post("admin/users/:id/suspend")
  @Patch("admin/users/:id/suspend")
  @ApiOperation({ summary: "Admin: Suspend or activate customer account" })
  async suspendUser(@Param("id") id: string, @Body() body: { status?: string; reason?: string; justification?: string }) {
    const existing = await this.prisma.user.findUnique({ where: { id } });
    if (!existing) throw new NotFoundException(`User ${id} not found`);
    const nextStatus = body?.status ? body.status.toUpperCase() : "SUSPENDED";
    const updated = await this.prisma.user.update({
      where: { id },
      data: { status: nextStatus },
    });
    return { success: true, data: updated };
  }

  // =========================================================================
  // ADMIN: PLATFORM OPERATORS, ROLES & AUDIT LOGS
  // =========================================================================

  @Get("admin/operators")
  @ApiOperation({ summary: "Admin: List platform operator accounts, roles & permissions" })
  async listOperators(@Query("search") search?: string, @Query("role") role?: string) {
    const where: any = {};
    if (search) {
      where.OR = [
        { name: { contains: search, mode: "insensitive" } },
        { email: { contains: search, mode: "insensitive" } },
      ];
    }

    const [operators, roles, permissions, platformMemberships] = await Promise.all([
      this.prisma.adminUser.findMany({
        where,
        include: {
          roleAssignments: { include: { role: { include: { rolePermissions: { include: { permission: true } } } } } },
          geoAssignments: true,
        },
        orderBy: { createdAt: "desc" },
      }),
      this.prisma.adminRole.findMany({
        include: { rolePermissions: { include: { permission: true } } },
        orderBy: { hierarchyLevel: "asc" },
      }),
      this.prisma.adminPermission.findMany({ orderBy: { module: "asc" } }),
      this.prisma.user.findMany({
        where: { memberships: { some: { tenantId: "PLATFORM" } } },
        include: { memberships: true },
      }),
    ]);

    const mapped = operators.map((op: any) => ({
      id: op.id,
      name: op.name,
      email: op.email,
      phone: op.phone,
      status: op.status,
      mfaEnabled: op.mfaEnabled,
      isRootProtected: op.isRootProtected,
      role: op.roleAssignments?.[0]?.role?.code || "ADMIN_STAFF",
      roleTitle: op.roleAssignments?.[0]?.role?.title || "Admin Operator",
      geoAssignment: op.geoAssignments?.[0] || null,
      lastLoginAt: op.lastLoginAt,
      createdAt: op.createdAt,
    }));

    const existingEmails = new Set(mapped.map((m: any) => m.email.toLowerCase()));
    for (const u of platformMemberships) {
      if (u.email && !existingEmails.has(u.email.toLowerCase())) {
        const userRole = u.memberships?.find((m: any) => m.tenantId === "PLATFORM")?.role || "ROOT_ADMIN";
        mapped.push({
          id: u.id,
          name: u.fullName || u.email,
          email: u.email,
          phone: u.phoneNumber,
          status: u.status,
          mfaEnabled: false,
          isRootProtected: userRole === "ROOT_ADMIN",
          role: userRole,
          roleTitle: userRole,
          geoAssignment: null,
          lastLoginAt: u.updatedAt,
          createdAt: u.createdAt,
        });
      }
    }

    const filtered = role && role !== "ALL" ? mapped.filter((m: any) => m.role === role) : mapped;

    return {
      success: true,
      data: {
        items: filtered,
        total: filtered.length,
        roles: roles.map((r: any) => ({
          id: r.id,
          code: r.code,
          title: r.title,
          subtitle: r.subtitle,
          hierarchyLevel: r.hierarchyLevel,
          description: r.description,
          requiresMfa: r.requiresMfa,
          isSystem: r.isSystem,
          permissions: r.rolePermissions?.map((rp: any) => rp.permission?.code).filter(Boolean) || [],
        })),
        permissions,
      },
    };
  }

  @Post("admin/operators")
  @ApiOperation({ summary: "Admin: Create a new admin operator account" })
  async createOperator(@Body() body: any) {
    const email = String(body.email || "").toLowerCase().trim();
    const existing = await this.prisma.adminUser.findUnique({ where: { email } });
    if (existing) throw new ConflictException(`Operator ${email} already exists`);

    const created = await this.prisma.adminUser.create({
      data: {
        id: UniqueIdentifier.generateV7(),
        name: body.name || email.split("@")[0],
        email,
        phone: body.phone || "+919800000000",
        status: "ACTIVE",
        mfaEnabled: Boolean(body.mfaEnabled),
        isRootProtected: false,
      },
    });

    if (body.roleCode || body.role) {
      const roleRec = await this.prisma.adminRole.findUnique({ where: { code: body.roleCode || body.role } });
      if (roleRec) {
        await this.prisma.adminRoleAssignment.create({
          data: { userId: created.id, roleId: roleRec.id },
        });
      }
    }

    return { success: true, data: created };
  }

  @Put("admin/operators/:id/roles")
  @Patch("admin/operators/:id/roles")
  @ApiOperation({ summary: "Admin: Update operator roles" })
  async updateOperatorRoles(@Param("id") id: string, @Body() body: { roleCode?: string; role?: string }) {
    const code = body.roleCode || body.role;
    if (code) {
      const roleRec = await this.prisma.adminRole.findUnique({ where: { code } });
      if (roleRec) {
        await this.prisma.adminRoleAssignment.deleteMany({ where: { userId: id } });
        await this.prisma.adminRoleAssignment.create({ data: { userId: id, roleId: roleRec.id } });
      }
    }
    return { success: true, data: { id, role: code } };
  }

  @Post("admin/operators/:id/suspend")
  @ApiOperation({ summary: "Admin: Suspend admin operator" })
  async suspendOperator(@Param("id") id: string, @Body() body: { status?: string }) {
    const nextStatus = body?.status ? body.status.toUpperCase() : "SUSPENDED";
    const updated = await this.prisma.adminUser.update({
      where: { id },
      data: { status: nextStatus },
    });
    return { success: true, data: updated };
  }

  @Get("admin/audit-logs")
  @ApiOperation({ summary: "Admin: Query immutable admin audit logs" })
  async getAuditLogs(
    @Query("operatorId") operatorId?: string,
    @Query("action") action?: string,
    @Query("from") from?: string,
    @Query("to") to?: string,
    @Query("search") search?: string,
    @Query("page") page?: string,
    @Query("limit") limit?: string
  ) {
    const pageNum = Math.max(1, Number(page) || 1);
    const take = Math.min(100, Math.max(1, Number(limit) || 25));
    const skip = (pageNum - 1) * take;

    const where: any = {};
    if (operatorId) where.operatorId = operatorId;
    if (action) where.action = { contains: action, mode: "insensitive" };
    if (from || to) {
      where.timestamp = {};
      if (from) where.timestamp.gte = new Date(from);
      if (to) where.timestamp.lte = new Date(to);
    }
    if (search) {
      where.OR = [
        { operatorName: { contains: search, mode: "insensitive" } },
        { action: { contains: search, mode: "insensitive" } },
        { targetEntity: { contains: search, mode: "insensitive" } },
        { justification: { contains: search, mode: "insensitive" } },
      ];
    }

    const [logs, total, events] = await Promise.all([
      this.prisma.adminAuditLog.findMany({ where, orderBy: { timestamp: "desc" }, skip, take }),
      this.prisma.adminAuditLog.count({ where }),
      this.prisma.auditEvent.findMany({ orderBy: { occurredAt: "desc" }, take: 20 }),
    ]);

    const items = logs.length > 0
      ? logs
      : events.map((e: any) => ({
          id: e.id,
          operatorId: e.actorId,
          operatorName: e.actorId,
          action: e.action,
          targetEntity: e.targetType,
          targetId: e.targetId,
          reasonCode: "SYSTEM_EVENT",
          justification: JSON.stringify(e.metadata || {}),
          timestamp: e.occurredAt,
        }));

    return {
      success: true,
      data: {
        items,
        total: logs.length > 0 ? total : items.length,
        page: pageNum,
        limit: take,
      },
    };
  }
}
