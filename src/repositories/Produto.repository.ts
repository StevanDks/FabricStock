import { PrismaClient, Produto, TipoDeProduto } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllProdutos = async (): Promise<Produto[]> => {
    return await prisma.produto.findMany({
        include: {
            Pedido: true,
            Lote: true,
        },
    });
};

export const getProdutoById = async (id: number): Promise<Produto | null> => {
    return await prisma.produto.findUnique({
        where: { IdProduto: id },
        include: {
            Pedido: true,
            Lote: true,
        },
    });
};

export const createProduto = async (data: {
    Nome: string;
    Quantidade: number;
    Tipo: TipoDeProduto;
    PedidoId?: number;
}): Promise<Produto> => {
    const { Nome, Quantidade, Tipo, PedidoId } = data;
    return await prisma.produto.create({
        data: {
            Nome,
            Quantidade,
            Tipo,
            ...(PedidoId && { PedidoId }),
        },
        include: {
            Pedido: true,
            Lote: true,
        },
    });
};

export const updateProduto = async (
    id: number,
    data: {
        Nome?: string;
        Quantidade?: number;
        Tipo?: TipoDeProduto;
        PedidoId?: number;
    }
): Promise<Produto> => {
    const produtoExists = await prisma.produto.findUnique({
        where: { IdProduto: id },
    });
    if (!produtoExists) {
        throw new Error(`Produto com ID ${id} não encontrado.`);
    }

    if (data.PedidoId) {
        const pedidoExists = await prisma.pedido.findUnique({
            where: { IdPedido: data.PedidoId },
        });
        if (!pedidoExists) {
            throw new Error(`Pedido com ID ${data.PedidoId} não encontrado.`);
        }
    }

    return await prisma.produto.update({
        where: { IdProduto: id },
        data: {
            ...(data.Nome && { Nome: data.Nome }),
            ...(data.Quantidade && { Quantidade: data.Quantidade }),
            ...(data.Tipo && { Tipo: data.Tipo }),
            ...(data.PedidoId && { PedidoId: data.PedidoId }),
        },
        include: {
            Pedido: true,
            Lote: true,
        },
    });
};

export const deleteProduto = async (id: number): Promise<Produto> => {
    const produto = await prisma.produto.findUnique({
        where: { IdProduto: id },
        include: {
            Pedido: true,
            Lote: true,
        },
    });

    if (!produto) {
        throw new Error(`Produto com ID ${id} não encontrado.`);
    }

    return await prisma.produto.delete({
        where: { IdProduto: id },
        include: {
            Pedido: true,
            Lote: true,
        },
    });
};