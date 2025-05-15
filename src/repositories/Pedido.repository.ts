import { PrismaClient, TipoDeProduto, StatusPedido, Pedido } from '../../generated/prisma';

const prisma = new PrismaClient();

export const getAllPedidos = async () => {
    return await prisma.pedido.findMany({
        include: {
            Fornecedor: true,
            Transportadora: true,
            GerenteDeProducao: true,
            Produtos: true,
        },
    });
};

export const getPedidoById = async (id: number): Promise<Pedido | null> => {
    return await prisma.pedido.findUnique({
        where: { IdPedido: id },
        include: {
            Fornecedor: true,
            Transportadora: true,
            GerenteDeProducao: true,
            Produtos: true,
        },
    });
};

export const createPedido = async (data: {
    Data: Date;
    Status: StatusPedido;
    EnderecoDeEntrega: string;
    FornecedorId: number;
    TransportadoraId: number;
    GerenteDeProducaoId: number;
    Produtos: Array<{ IdProduto: number }>;
}): Promise<Pedido> => {
    const { Data, Status, EnderecoDeEntrega, FornecedorId, TransportadoraId, GerenteDeProducaoId, Produtos } = data;

    const fornecedorExists = await prisma.fornecedor.findUnique({
        where: { IdFornecedor: FornecedorId },
    });
    if (!fornecedorExists) {
        throw new Error(`Fornecedor com ID ${FornecedorId} não encontrado.`);
    }

    const transportadoraExists = await prisma.transportadora.findUnique({
        where: { IdTransportadora: TransportadoraId },
    });
    if (!transportadoraExists) {
        throw new Error(`Transportadora com ID ${TransportadoraId} não encontrada.`);
    }

    const gerenteExists = await prisma.gerenteDeProducao.findUnique({
        where: { IdGerenteDeProducao: GerenteDeProducaoId },
    });
    if (!gerenteExists) {
        throw new Error(`Gerente de Produção com ID ${GerenteDeProducaoId} não encontrado.`);
    }

    for (const produto of Produtos) {
        const produtoExists = await prisma.produto.findUnique({
            where: { IdProduto: produto.IdProduto },
        });
        if (!produtoExists) {
            throw new Error(`Produto com ID ${produto.IdProduto} não encontrado.`);
        }
    }

    return await prisma.pedido.create({
        data: {
            Data,
            Status,
            EnderecoDeEntrega,
            FornecedorId,
            TransportadoraId,
            GerenteDeProducaoId,
            Produtos: {
                connect: Produtos,
            },
        },
        include: {
            Fornecedor: true,
            Transportadora: true,
            GerenteDeProducao: true,
            Produtos: true,
        },
    });
};

export const updatePedido = async (
    id: number,
    data: {
        Data?: Date;
        Status?: StatusPedido;
        EnderecoDeEntrega?: string;
        FornecedorId?: number;
        TransportadoraId?: number;
        GerenteDeProducaoId?: number;
        Produtos?: {
            connect?: { IdProduto: number }[];
        };
    }
): Promise<Pedido> => {
    const pedidoExists = await prisma.pedido.findUnique({
        where: { IdPedido: id },
    });
    
    if (!pedidoExists) {
        throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    if (data.Produtos?.connect) {
        for (const produto of data.Produtos.connect) {
            const produtoExists = await prisma.produto.findUnique({
                where: { IdProduto: produto.IdProduto },
            });
            if (!produtoExists) {
                throw new Error(`Produto com ID ${produto.IdProduto} não encontrado.`);
            }
        }
    }

    return prisma.pedido.update({
        where: { IdPedido: id },
        data: {
            ...(data.Data && { Data: data.Data }),
            ...(data.Status && { Status: data.Status }),
            ...(data.EnderecoDeEntrega && { EnderecoDeEntrega: data.EnderecoDeEntrega }),
            ...(data.FornecedorId && { FornecedorId: data.FornecedorId }),
            ...(data.TransportadoraId && { TransportadoraId: data.TransportadoraId }),
            ...(data.GerenteDeProducaoId && { GerenteDeProducaoId: data.GerenteDeProducaoId }),
            Produtos: {
                ...(data.Produtos?.connect && { connect: data.Produtos.connect }),
            },
        },
        include: {
            Fornecedor: true,
            Transportadora: true,
            GerenteDeProducao: true,
            Produtos: true,
        },
    });
};

export const deletePedido = async (id: number): Promise<Pedido> => {
    const pedido = await prisma.pedido.findUnique({
        where: { IdPedido: id },
        include: {
            Produtos: true,
        },
    });

    if (!pedido) {
        throw new Error(`Pedido com ID ${id} não encontrado.`);
    }

    await prisma.pedido.update({
        where: { IdPedido: id },
        data: {
            Produtos: {
                disconnect: pedido.Produtos.map((produto) => ({ IdProduto: produto.IdProduto })),
            },
        },
    });

    return await prisma.pedido.delete({
        where: { IdPedido: id },
        include: {
            Fornecedor: true,
            Transportadora: true,
            GerenteDeProducao: true,
            Produtos: true,
        },
    });
};