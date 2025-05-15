import { Request, Response } from 'express';
import * as produtoRepository from '../repositories/Produto.repository';

export const getAllProdutosController = async (req: Request, res: Response): Promise<any> => {
    try {
        const produtos = await produtoRepository.getAllProdutos();
        res.json(produtos);
    } catch (error) {
        console.error('Erro ao buscar produtos:', error);
        res.status(500).json({ error: 'Erro ao buscar produtos.' });
    }
};

export const getProdutoByIdController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    try {
        const produto = await produtoRepository.getProdutoById(id);
        if (produto) {
            res.json(produto);
        } else {
            res.status(404).json({ message: 'Produto não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao buscar produto:', error);
        res.status(500).json({ error: 'Erro ao buscar produto.' });
    }
};

export const createProdutoController = async (req: Request, res: Response): Promise<any> => {
    const { Nome, Quantidade, Tipo, PedidoId } = req.body;
    try {
        const novoProduto = await produtoRepository.createProduto({
            Nome,
            Quantidade,
            Tipo,
            PedidoId,
        });
        res.status(201).json(novoProduto);
    } catch (error: any) {
        console.error('Erro ao criar produto:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(400).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao criar produto.' });
    }
};

export const updateProdutoController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    const { Nome, Quantidade, Tipo, PedidoId } = req.body;
    try {
        const updatedProduto = await produtoRepository.updateProduto(id, {
            Nome,
            Quantidade,
            Tipo,
            PedidoId,
        });
        res.json(updatedProduto);
    } catch (error: any) {
        console.error('Erro ao atualizar produto:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao atualizar produto.' });
    }
};

export const deleteProdutoController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    try {
        const deletedProduto = await produtoRepository.deleteProduto(id);
        res.json({ message: 'Produto deletado com sucesso.', deletedProduto });
    } catch (error: any) {
        console.error('Erro ao deletar produto:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao deletar produto.' });
    }
};