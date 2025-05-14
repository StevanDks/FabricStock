import { Request, Response } from 'express';
import * as gerenteDeProducaoRepository from '../repositories/GerenteDeProducao.repository';

export const getAllGerentesDeProducaoController = async (req: Request, res: Response) => {
    const gerentes = await gerenteDeProducaoRepository.getAllGerentesDeProducao();
    res.json(gerentes);
};

export const getGerenteDeProducaoByIdController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    try {
        const gerente = await gerenteDeProducaoRepository.getGerenteDeProducaoById(id);
        if (gerente) {
            res.json(gerente);
        } else {
            res.status(404).json({ message: 'Gerente de Produção não encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error fetching Gerente de Produção' });
    }
};

export const createGerenteDeProducaoController = async (req: Request, res: Response) => {
    const { Nome, Email, Senha, NiveldePermissao, TipoDeUsuario, Pedidos } = req.body;
    const newGerente = await gerenteDeProducaoRepository.createGerenteDeProducao({
        Nome,
        Email,
        Senha,
        NiveldePermissao,
        TipoDeUsuario,
        Pedidos,
    });
    res.json(newGerente);
};

export const updateGerenteDeProducaoController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { Nome, Email, Senha } = req.body;
    const updatedGerente = await gerenteDeProducaoRepository.updateGerenteDeProducao(id, {
        Usuario: {
            update: {
                ...(Nome && { Nome }),
                ...(Email && { Email }),
                ...(Senha && { Senha }),
            },
        },
    });
    res.json(updatedGerente);
};

export const deleteGerenteDeProducaoController = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const deletedGerente = await gerenteDeProducaoRepository.deleteGerenteDeProducao(id);
    res.json({ message: 'Gerente de Produção deletado com sucesso.', deletedGerente });
};