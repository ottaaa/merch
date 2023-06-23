import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.create({
    data: {
      email: 'zackey@email.com',
      name: 'ザッキー',
    },
  });

  const shop = await prisma.shop.create({
    data: {
      name: 'zackey merch',
    },
  });

  await prisma.seller.create({
    data: {
      userId: user.id,
      shopId: shop.id,
      role: 'OWNER',
    },
  });

  // await prisma.merch.create({
  //   data: {
  //     name: 'T-Shirt',
  //     description: '2023年Tシャツ',
  //     image: 'image',
  //     shopId: shop.id,
  //   },
  // });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
