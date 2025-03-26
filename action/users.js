"use server";

import { prisma } from "../lib/prisma";

export const createUser = async ({ name, email, image, emailVerified }) => {
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        image,
        emailVerified: emailVerified ? new Date(emailVerified) : null,
      },
    });
    console.log("User created successfully", user);
    return user;
  } catch (error) {
    console.error("User cannot be created", error);
    throw new Error("Failed to create user");
  } finally {
    await prisma.$disconnect();
  }
};

export const getUsers = async () => {
  try {
    const users = await prisma.user.findMany();
    console.log(users);
    return users;
  } catch (error) {
    console.error(error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
};
