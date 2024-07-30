import { Router } from 'express';
import { getLorem } from '../controllers/loremController.js';
const router = Router();
router.get('/lorem/:num', getLorem);
export default router;
