import express from 'express';
import { index, create, read, update, remove } from '../controllers/majorController';

const router = express.Router();

router.get('/majors', index);
router.get('/majors/create', create);
router.post('/majors/create', create);
router.get('/majors/read/:id', read);
router.get('/majors/update/:id', update);
router.post('/majors/update/:id', update);
router.post('/majors/remove/:id', remove);

export default router;
