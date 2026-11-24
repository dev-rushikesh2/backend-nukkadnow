import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV === "production") {
    console.log("Skipping subscription seed in production environment.");
    return;
  }

  const plans = [
    {
      id: "plan_starter",
      name: "Starter Merchant",
      code: "STARTER",
      pricePaise: 0,
      billingCycle: "MONTHLY",
      features: {
        maxProducts: 25,
        qrOrderingEnabled: false,
      },
    },
    {
      id: "plan_growth",
      name: "Growth Merchant",
      code: "GROWTH",
      pricePaise: 99900,
      billingCycle: "MONTHLY",
      features: {
        maxProducts: 250,
        qrOrderingEnabled: true,
      },
    },
    {
      id: "plan_enterprise",
      name: "Enterprise Multi-Outlet",
      code: "ENTERPRISE",
      pricePaise: 299900,
      billingCycle: "MONTHLY",
      features: {
        maxProducts: 5000,
        qrOrderingEnabled: true,
      },
    },
  ];

  for (const p of plans) {
    await prisma.subscriptionPlan.upsert({
      where: { code: p.code },
      create: p,
      update: {
        name: p.name,
        pricePaise: p.pricePaise,
        features: p.features,
      },
    });
  }

  console.log("Subscription plans seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
