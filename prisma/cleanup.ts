import { PrismaClient } from '@prisma/client';
import { hash } from 'bcrypt';
const prisma = new PrismaClient();
async function main() {
  await prisma.participant.deleteMany();
  await prisma.submission.deleteMany();
  await prisma.register.deleteMany();
  await prisma.hackathon.deleteMany();
  await prisma.team.deleteMany();
  await prisma.user.deleteMany();
  await prisma.admin.deleteMany();
}

async function deleteAdmin() {
  await prisma.admin.deleteMany();
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
