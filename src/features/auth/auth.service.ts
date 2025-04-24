import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library.js";
import prisma from "src/db/prisma";
import { compare, hash } from "bcrypt";

type RegisterUser = {
  email: string;
  password: string;
  username: string;
  fullName: string;
  date_of_birth: Date;
  phone_number: string;
  position: string;
  profile_image: string;
};

export const registerUser = async (user: RegisterUser) => {
  try {
    const hashedPassword = await hash(user.password, 10);
    const newUser = await prisma.user.create({
      data: {
        email: user.email,
        password: hashedPassword,
        username: user.username,
        fullName: user.fullName,
        date_of_birth: user.date_of_birth,
        phone_number: user.phone_number,
        position: user.position,
        profile_image: user.profile_image || "",
      },
    });

    return {
      id: newUser.id,
      email: newUser.email,
      username: newUser.username,
      fullName: newUser.fullName,
    };
  } catch (error) {
    if (
      error instanceof PrismaClientKnownRequestError &&
      error.code === "P2002"
    ) {
      throw new Error("Email already exists");
    }
    throw error;
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const user = await prisma.user.findFirstOrThrow({
      where: { email },
      select: {
        id: true,
        fullName: true,
        email: true,
        password: true,
      },
    });

    if (!user) {
      throw new Error("Invalid credentials");
    }

    const valid = await compare(password, user.password);
    if (!valid) throw new Error("Invalid credentials");

    return {
      id: user.id,
      fullName: user.fullName,
      email: user.email,
    };
  } catch (e) {
    if (e instanceof PrismaClientKnownRequestError && e.code === "P2025") {
      throw new Error("Invalid credentials");
    }
    throw e;
  }
};
