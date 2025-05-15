import { PrismaClient, TipoDeUsuario, StatusPedido, TipoDeProduto } from '../generated/prisma';
import argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
    console.log('Limpar o Banco de Dados pra teste');

    await prisma.produtoLote.deleteMany();
    await prisma.lote.deleteMany();
    await prisma.produto.deleteMany();
    await prisma.pedido.deleteMany();
    await prisma.estoque.deleteMany();
    await prisma.transportadora.deleteMany();
    await prisma.administrador.deleteMany();
    await prisma.gerenteDeEstoque.deleteMany();
    await prisma.gerenteDeProducao.deleteMany();
    await prisma.fornecedor.deleteMany();
    await prisma.usuario.deleteMany();

    console.log('Banco de Dados Limpo, Iniciando inserção de dados para teste');

    const adminUsuario = await prisma.usuario.upsert({
        where: { Email: 'admin@example.com' },
        update: {},
        create: {
            Nome: 'Admin Stevan',
            Email: 'admin@example.com',
            Senha: await argon2.hash('senhaSuperSegura123'),
            NiveldePermissao: 3,
            TipoDeUsuario: TipoDeUsuario.Administrador,
            Administrador: { create: {} },
        },
    });

    const gerenteEstoqueUsuario = await prisma.usuario.upsert({
        where: { Email: 'estoque@example.com' },
        update: {},
        create: {
            Nome: 'Carlos Estoque',
            Email: 'estoque@example.com',
            Senha: await argon2.hash('senhaCarlos123'),
            NiveldePermissao: 2,
            TipoDeUsuario: TipoDeUsuario.GerenteDeEstoque,
            GerenteDeEstoque: { create: {} },
        },
    });

    const gerenteProducaoUsuario = await prisma.usuario.upsert({
        where: { Email: 'producao@example.com' },
        update: {},
        create: {
            Nome: 'Fernanda Producao',
            Email: 'producao@example.com',
            Senha: await argon2.hash('senhaFernanda123'),
            NiveldePermissao: 2,
            TipoDeUsuario: TipoDeUsuario.GerenteDeProducao,
            GerenteDeProducao: { create: {} },
        },
        include: {
            GerenteDeProducao: true,
        },
    });

    const fornecedorUsuario = await prisma.usuario.upsert({
        where: { Email: 'fornecedor@example.com' },
        update: {},
        create: {
            Nome: 'Fornecedor XYZ',
            Email: 'fornecedor@example.com',
            Senha: await argon2.hash('senhaFornecedor123'),
            NiveldePermissao: 1,
            TipoDeUsuario: TipoDeUsuario.Fornecedor,
            Fornecedor: {
                create: {
                    CNPJ: 12345678901234,
                },
            },
        },
        include: {
            Fornecedor: true,
        },
    });

    const transportadora = await prisma.transportadora.create({
        data: {
            Nome: 'TransLog',
            Endereco: 'Rua da Logística, 500',
        },
    });

    const estoque = await prisma.estoque.create({
        data: {
            Reposicao: false,
            Endereco: 'Av. Central, 1000',
        },
    });

    const pedido = await prisma.pedido.create({
        data: {
            Data: new Date(),
            Status: StatusPedido.Pendente,
            EnderecoDeEntrega: 'Rua do Cliente, 123',
            FornecedorId: fornecedorUsuario.Fornecedor!.IdFornecedor,
            TransportadoraId: transportadora.IdTransportadora,
            GerenteDeProducaoId: gerenteProducaoUsuario.GerenteDeProducao!.IdGerenteDeProducao,
        },
    });

    const produtoA = await prisma.produto.create({
        data: {
            Nome: 'Produto A',
            Quantidade: 100,
            Tipo: TipoDeProduto.ProdutoFinal,
            PedidoId: pedido.IdPedido,
        },
    });

    const produtoB = await prisma.produto.create({
        data: {
            Nome: 'Produto B',
            Quantidade: 50,
            Tipo: TipoDeProduto.ProdutoFinal,
            PedidoId: pedido.IdPedido,
        },
    });

    const lote1 = await prisma.lote.create({
        data: {
            Data: new Date(),
            Quantidade: 75,
            Estoque: {
                connect: { IdEstoque: estoque.IdEstoque },
            },
        },
    });

    const lote2 = await prisma.lote.create({
        data: {
            Data: new Date(),
            Quantidade: 50,
            Estoque: {
                connect: { IdEstoque: estoque.IdEstoque },
            },
        },
    });

    await prisma.produtoLote.createMany({
        data: [
            { produtoId: produtoA.IdProduto, loteId: lote1.IdLote },
            { produtoId: produtoA.IdProduto, loteId: lote2.IdLote },
            { produtoId: produtoB.IdProduto, loteId: lote2.IdLote },
        ],
    });
    console.log('Seed executado com sucesso');
}

main()
    .catch((e) => {
        console.error('Erro no seed:', e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
