import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const prisma = new PrismaClient();
const saltRounds = process.env.SALT_ROUND ? +process.env.SALT_ROUND : 10;
async function main() {
  await generateAdmin();
}

async function generateAdmin() {
  const password = await hash('devleaguepassword', saltRounds);
  const admin = await prisma.admin.create({
    data: {
      full_name: 'P2',
      email: 'admin@devleague.org',
      password: password,
    },
  });
  console.log('Admin is successfully seeded.');
  console.log(admin);
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
