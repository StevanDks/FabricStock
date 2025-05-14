import { PrismaClient, GerenteDeProducao, TipoDeUsuario, StatusPedido } from '../../generated/prisma';
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
    Pedidos?: Array<{
        Data: Date;
        Status: StatusPedido;
        EnderecoDeEntrega: string;
        FornecedorId: number;
        TransportadoraId: number;
    }>;
}) => {
    const { Nome, Email, Senha, NiveldePermissao, TipoDeUsuario, Pedidos } = data;
    const existingUser = await prisma.usuario.findUnique({
        where: { Email },
    });
    if (existingUser) {
        throw new Error('E-mail já está em uso.');
    }
    if (Pedidos && Pedidos.length > 0) {
        for (const pedido of Pedidos) {
            const fornecedorExists = await prisma.fornecedor.findUnique({
                where: { IdFornecedor: pedido.FornecedorId },
            });

            if (!fornecedorExists) {
                throw new Error(`Fornecedor com ID ${pedido.FornecedorId} não encontrado.`);
            }
        }
    }
    return await prisma.gerenteDeProducao.create({
        data: {
            Usuario: {
                create: {
                    Nome,
                    Email,
                    Senha,
                    NiveldePermissao,
                    TipoDeUsuario,
                },
            },
            Pedidos: {
                create: Pedidos || [],
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
    }
): Promise<GerenteDeProducao> => {
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


