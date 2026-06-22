import { Router } from 'express';
import { enviarMensagem } from '../controllers/contatoController.js';

const router = Router();

router.post('/', enviarMensagem);

export default router;