// src/routes/mainRoutes.ts
import { Router } from 'express';
import { home, hb1, hb2, hb3, hb4 } from '../controllers/mainController.js';

const router = Router();

router.get('/', home);
router.get('/hb1', hb1);
router.get('/hb2', hb2);
router.get('/hb3', hb3);
router.get('/hb4', hb4);

export default router;
