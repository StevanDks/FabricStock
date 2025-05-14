import express from 'express';
import {
    getAllGerentesDeProducaoController,
    getGerenteDeProducaoByIdController,
    createGerenteDeProducaoController,
    updateGerenteDeProducaoController,
    deleteGerenteDeProducaoController,
} from '../controllers/GerenteDeProducao.controller';

const router = express.Router();

router.get('/', getAllGerentesDeProducaoController);
router.get('/:id', getGerenteDeProducaoByIdController);
router.post('/', createGerenteDeProducaoController);
router.put('/:id', updateGerenteDeProducaoController);
router.delete('/:id', deleteGerenteDeProducaoController);

export default router;
