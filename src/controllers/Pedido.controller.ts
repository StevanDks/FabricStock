import { Request, Response } from 'express';
import * as pedidoRepository from '../repositories/Pedido.repository';

export const getAllPedidosController = async (req: Request, res: Response): Promise<any>  => {
    try {
        const pedidos = await pedidoRepository.getAllPedidos();
        res.json(pedidos);
    } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
        res.status(500).json({ error: 'Erro ao buscar pedidos.' });
    }
};

export const getPedidoByIdController = async (req: Request, res: Response): Promise<any>  => {
    const id = parseInt(req.params.id);
    try {
        const pedido = await pedidoRepository.getPedidoById(id);
        if (pedido) {
            res.json(pedido);
        } else {
            res.status(404).json({ message: 'Pedido não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao buscar pedido:', error);
        res.status(500).json({ error: 'Erro ao buscar pedido.' });
    }
};

export const createPedidoController = async (req: Request, res: Response): Promise<any> => {
    const { Data, Status, EnderecoDeEntrega, FornecedorId, TransportadoraId, GerenteDeProducaoId, Produtos } = req.body;
    try {
        const novoPedido = await pedidoRepository.createPedido({
            Data,
            Status,
            EnderecoDeEntrega,
            FornecedorId,
            TransportadoraId,
            GerenteDeProducaoId,
            Produtos,
        });
        res.status(201).json(novoPedido);
    } catch (error: any) {
        console.error('Erro ao criar pedido:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(400).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao criar pedido.' });
    }
};

export const updatePedidoController = async (req: Request, res: Response): Promise<any>  => {
    const id = parseInt(req.params.id);
    const { Data, Status, EnderecoDeEntrega, FornecedorId, TransportadoraId, GerenteDeProducaoId, Produtos } = req.body;
    try {
        const updatedPedido = await pedidoRepository.updatePedido(id, {
            Data,
            Status,
            EnderecoDeEntrega,
            FornecedorId,
            TransportadoraId,
            GerenteDeProducaoId,
            Produtos,
        });
        res.json(updatedPedido);
    } catch (error: any) {
        console.error('Erro ao atualizar pedido:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao atualizar pedido.' });
    }
};

export const deletePedidoController = async (req: Request, res: Response): Promise<any>  => {
    const id = parseInt(req.params.id);
    try {
        const deletedPedido = await pedidoRepository.deletePedido(id);
        res.json({ message: 'Pedido deletado com sucesso.', deletedPedido });
    } catch (error: any) {
        console.error('Erro ao deletar pedido:', error);

        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }

        res.status(500).json({ error: 'Erro ao deletar pedido.' });
    }
};