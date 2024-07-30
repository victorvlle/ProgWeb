import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export const getAllMajors = async (req, res) => {
    const majors = await prisma.major.findMany();
    res.json(majors);
};
export const getMajorById = async (req, res) => {
    const { id } = req.params;
    const major = await prisma.major.findUnique({
        where: { id }
    });
    if (major) {
        res.json(major);
    }
    else {
        res.status(404).json({ message: 'Major not found' });
    }
};
export const createMajor = async (req, res) => {
    const { name, code, description } = req.body;
    const major = await prisma.major.create({
        data: { name, code, description }
    });
    res.status(201).json(major);
};
export const updateMajor = async (req, res) => {
    const { id } = req.params;
    const { name, code, description } = req.body;
    const major = await prisma.major.update({
        where: { id },
        data: { name, code, description }
    });
    res.json(major);
};
export const deleteMajor = async (req, res) => {
    const { id } = req.params;
    await prisma.major.delete({
        where: { id }
    });
    res.status(204).send();
};
