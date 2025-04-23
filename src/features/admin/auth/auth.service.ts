import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';
import prisma from 'src/db/prisma';
import { compare } from 'bcrypt';
const loginAdmin = async function (email: string, password: string) {
  try {
    const adminUser = await prisma.admin.findFirstOrThrow({
      select: {
        id: true,
        full_name: true,
        email: true,
        password: true,
      },
      where: {
        email,
      },
    });
    const result = adminUser
      ? await compare(password, adminUser.password)
      : false;
    if (!result) {
      throw new Error('Invalid Password');
    }
    return {
      id: adminUser.id,
      full_name: adminUser.full_name,
      email: adminUser.email,
    };
  } catch (e) {
    // handle error
    if (e instanceof PrismaClientKnownRequestError && e.code === 'P2025') {
      throw new Error('Invalid Email or Password');
    }
  }
};

export default { loginAdmin };
