import { Router } from 'express';
import { helloController }
    from '../controllers/hello.controler';
const router = Router();
router.get('/', helloController);
export default router;