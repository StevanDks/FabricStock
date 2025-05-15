import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import argon2 from 'argon2';
import * as authRepository from '../repositories/auth.repository';

export const loginController = async (req: Request, res: Response): Promise<void> => {
    const { email, senha } = req.body;
    if (!email || !senha) {
        res.status(400).json({ message: 'Email e senha são obrigatórios.' });
        return;
    }
    const user = await authRepository.findGerenteDeProducao(email);
    if (!user) {
        res.status(401).json({ message: 'Usuário não encontrado.' });
        return;
    }
    const senhaValida = await argon2.verify(user.Senha, senha);
    if (!senhaValida) {
        res.status(401).json({ message: 'Senha inválida.' });
        return;
    }
    const token = jwt.sign(
        { nome: user.Email, tipo: user.TipoDeUsuario },
        process.env.JWT_SECRET || 'secret',
        { expiresIn: '1h' }
    );
    res.json({ message: 'Login realizado com sucesso!', token });
};