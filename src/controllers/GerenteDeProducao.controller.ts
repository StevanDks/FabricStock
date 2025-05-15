import { Request, Response } from 'express';
import * as gerenteDeProducaoRepository from '../repositories/GerenteDeProducao.repository';

export const getAllGerentesDeProducaoController = async (req: Request, res: Response): Promise<any> => {
    try {
        const gerentes = await gerenteDeProducaoRepository.getAllGerentesDeProducao();
        res.json(gerentes);
    } catch (error) {
        console.error('Erro ao buscar gerentes de produção:', error);
        res.status(500).json({ error: 'Erro ao buscar gerentes de produção.' });
    }
};

export const getGerenteDeProducaoByIdController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    try {
        const gerente = await gerenteDeProducaoRepository.getGerenteDeProducaoById(id);
        if (gerente) {
            res.json(gerente);
        } else {
            res.status(404).json({ message: 'Gerente de Produção não encontrado.' });
        }
    } catch (error) {
        console.error('Erro ao buscar gerente de produção:', error);
        res.status(500).json({ error: 'Erro ao buscar gerente de produção.' });
    }
};

export const createGerenteDeProducaoController = async (req: Request, res: Response): Promise<any> => {
    const { Nome, Email, Senha, NiveldePermissao, TipoDeUsuario, Pedidos } = req.body;
    try {
        const newGerente = await gerenteDeProducaoRepository.createGerenteDeProducao({
            Nome,
            Email,
            Senha,
            NiveldePermissao: 2,
            TipoDeUsuario: 'GerenteDeProducao',
        });
        res.status(201).json(newGerente);
    } catch (error: any) {
        console.error('Erro ao criar gerente de produção:', error);
        if (error.message.includes('já está em uso')) {
            return res.status(400).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao criar gerente de produção.' });
    }
};

export const updateGerenteDeProducaoController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    const { Nome, Email, Senha, Pedidos } = req.body;
    try {
        const updatedGerente = await gerenteDeProducaoRepository.updateGerenteDeProducao(id, {
            Usuario: {
                update: {
                    ...(Nome && { Nome }),
                    ...(Email && { Email }),
                    ...(Senha && { Senha }),
                },
            },
            Pedidos: {
                ...(Pedidos?.connect && { connect: Pedidos.connect }),
                ...(Pedidos?.create && { create: Pedidos.create }),
            },
        });
        res.json(updatedGerente);
    } catch (error: any) {
        console.error('Erro ao atualizar gerente de produção:', error);
        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao atualizar gerente de produção.' });
    }
};

export const deleteGerenteDeProducaoController = async (req: Request, res: Response): Promise<any> => {
    const id = parseInt(req.params.id);
    try {
        const deletedGerente = await gerenteDeProducaoRepository.deleteGerenteDeProducao(id);
        res.json({ message: 'Gerente de Produção deletado com sucesso.', deletedGerente });
    } catch (error: any) {
        console.error('Erro ao deletar gerente de produção:', error);
        if (error.message.includes('não encontrado')) {
            return res.status(404).json({ error: error.message });
        }
        res.status(500).json({ error: 'Erro ao deletar gerente de produção.' });
    }
};