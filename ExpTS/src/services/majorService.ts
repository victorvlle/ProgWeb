import { PrismaClient, Major } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllMajors = async (): Promise<Major[]> => {
  return prisma.major.findMany();
};

export const createMajor = async (data: { name: string; code: string; description: string }): Promise<Major> => {
  return prisma.major.create({ data });
};

export const getMajor = async (id: string): Promise<Major | null> => {
  return prisma.major.findUnique({ where: { id } });
};

export const updateMajor = async (id: string, data: { name: string; code: string; description: string }): Promise<Major> => {
  return prisma.major.update({ where: { id }, data });
};

export const removeMajor = async (id: string): Promise<void> => {
  await prisma.major.delete({ where: { id } });
};
