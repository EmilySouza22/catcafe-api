import { Router } from 'express';
import { getCardapio, getCategoria } from '../controllers/cardapioController.js';

const router = Router();

router.get('/', getCardapio);
router.get('/:categoria', getCategoria);

export default router;