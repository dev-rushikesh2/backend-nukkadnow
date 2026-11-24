const path = require('path');
const { PrismaClient } = require(path.join(__dirname, 'node_modules', '.pnpm', '@prisma+client@5.22.0_prisma@5.22.0', 'node_modules', '@prisma', 'client'));

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: 'postgresql://root:root@localhost:5432/merchant_db?schema=public'
    }
  }
});

async function main() {
  const merchants = await prisma.merchant.findMany();
  const outlets = await prisma.outlet.findMany({ include: { hours: true } });
  const registrations = await prisma.partnerRegistration.findMany({
    include: { documents: true, statusHistory: true }
  });

  console.log('\n================== 1. MERCHANTS IN DB ==================');
  console.dir(merchants, { depth: null });

  console.log('\n================== 2. OUTLETS IN DB ====================');
  console.dir(outlets, { depth: null });

  console.log('\n================== 3. PARTNER REGISTRATIONS =============');
  console.dir(registrations, { depth: null });

  await prisma.$disconnect();
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
