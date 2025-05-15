import { PrismaClient } from '../../generated/prisma';
const prisma = new PrismaClient();

export const findGerenteDeProducao = async (Email: string) => {
    return prisma.usuario.findUnique({ where: { Email } });
};