const { PrismaClient } = require('../generated/prisma');
const prisma = new PrismaClient();

async function main() {
  await prisma.post.createMany({
    data: [
      { title: 'First Post', content: 'Hello world!', published: true },
      { title: 'Second Post', content: 'Prisma is awesome.', published: true },
      { title: 'Draft Post', content: 'Still writing...', published: false },
    ],
  });

  console.log('Seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
