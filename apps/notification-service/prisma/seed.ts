import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  if (process.env.NODE_ENV === "production") {
    console.log("Skipping notification seed in production environment.");
    return;
  }

  const templates = [
    {
      code: "ORDER_CONFIRMED",
      channel: "WHATSAPP",
      templateBody: "Namaste! Your order {orderNumber} has been confirmed. Preparing now at {storeName}.",
    },
    {
      code: "ORDER_READY_PICKUP",
      channel: "WHATSAPP",
      templateBody: "Your order {orderNumber} is READY for pickup! Show Token: {tokenNumber} at counter.",
    },
    {
      code: "EMAIL_OTP",
      channel: "EMAIL",
      templateBody: "Your NukkadNow Merchant verification code is {otp}. Valid for 10 minutes. Do not share this code with anyone.",
    },
    {
      code: "MERCHANT_NEW_ORDER_PUSH",
      channel: "PUSH",
      templateBody: "New order {orderNumber} received for ₹{amount}! Customer: {customerName}",
    },
    {
      code: "CUSTOMER_ORDER_READY_PUSH",
      channel: "PUSH",
      templateBody: "Order {orderNumber} is ready for pickup! Token: {tokenNumber}",
    },
  ];

  for (const tpl of templates) {
    await prisma.notificationTemplate.upsert({
      where: { code: tpl.code },
      create: tpl,
      update: { templateBody: tpl.templateBody, channel: tpl.channel },
    });
  }

  console.log("Notification templates seeded successfully.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
