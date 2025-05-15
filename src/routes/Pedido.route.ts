import express from 'express';
import {
    getAllPedidosController,
    getPedidoByIdController,
    createPedidoController,
    updatePedidoController,
    deletePedidoController,
} from '../controllers/Pedido.controller';

const router = express.Router();

router.get('/', getAllPedidosController);
router.get('/:id', getPedidoByIdController);
router.post('/', createPedidoController);
router.put('/:id', updatePedidoController);
router.delete('/:id', deletePedidoController);

export default router;