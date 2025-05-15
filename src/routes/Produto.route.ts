import express from 'express';
import {
    getAllProdutosController,
    getProdutoByIdController,
    createProdutoController,
    updateProdutoController,
    deleteProdutoController,
} from '../controllers/Produto.controller';

const router = express.Router();

router.get('/', getAllProdutosController);
router.get('/:id', getProdutoByIdController);
router.post('/', createProdutoController);
router.put('/:id', updateProdutoController);
router.delete('/:id', deleteProdutoController);

export default router;