import { PrismaClient, GerenteDeProducao, TipoDeUsuario, StatusPedido } from '../../generated/prisma';
import argon2 from 'argon2';
const prisma = new PrismaClient();

export const getAllGerentesDeProducao = async () => {
    return await prisma.gerenteDeProducao.findMany({
        include: {
            Usuario: true,
            Pedidos: true,
        },
    });
};

export const getGerenteDeProducaoById = async (id: number): Promise<GerenteDeProducao | null> => {
    return await prisma.gerenteDeProducao.findUnique({
        where: { IdGerenteDeProducao: id },
        include: {
            Usuario: true,
            Pedidos: true,
        },
    });
};

export const createGerenteDeProducao = async (data: {
    Nome: string;
    Email: string;
    Senha: string;
    NiveldePermissao: number;
    TipoDeUsuario: TipoDeUsuario;
}) => {
    const { Nome, Email, Senha, NiveldePermissao, TipoDeUsuario } = data;
    const existingUser = await prisma.usuario.findUnique({
        where: { Email },
    });
    if (existingUser) {
        throw new Error('E-mail já está em uso.');
    }
    const hashSenha = await argon2.hash(Senha);
    return await prisma.gerenteDeProducao.create({
        data: {
            Usuario: {
                create: {
                    Nome,
                    Email,
                    Senha: hashSenha,
                    NiveldePermissao,
                    TipoDeUsuario,
                },
            },
            Pedidos: {
                create: [],
            },

        },
        include: {
            Usuario: true,
            Pedidos: true,
        },
    });
};

export const updateGerenteDeProducao = async (
    id: number,
    data: {
        Usuario?: {
            update: {
                Nome?: string;
                Email?: string;
                Senha?: string;
            };
        };
        Pedidos?: {
            connect?: { IdPedido: number }[];
            create?: Array<{
                Data: Date;
                Status: StatusPedido;
                EnderecoDeEntrega: string;
                FornecedorId: number;
                TransportadoraId: number;
            }>;
        };
    }
): Promise<GerenteDeProducao> => {
    if (data.Usuario?.update?.Senha) {
        data.Usuario.update.Senha = await argon2.hash(data.Usuario.update.Senha);
    }
    
    return prisma.gerenteDeProducao.update({
        where: { IdGerenteDeProducao: id },
        data,
        include: {
            Usuario: true,
            Pedidos: true,
        },
    });
};

export const deleteGerenteDeProducao = async (id: number): Promise<GerenteDeProducao> => {
    const gerente = await prisma.gerenteDeProducao.findUnique({
        where: { IdGerenteDeProducao: id },
        include: { Usuario: true, Pedidos: true },
    });
    if (!gerente) {
        throw new Error('Gerente de Produção não encontrado.');
    }
    await prisma.gerenteDeProducao.delete({
        where: { IdGerenteDeProducao: id },
    });
    await prisma.usuario.delete({
        where: { IdUsuario: gerente.Usuario.IdUsuario },
    });
    return gerente;
};


