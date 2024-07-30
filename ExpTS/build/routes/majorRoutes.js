import { Router } from 'express';
import { getAllMajors, getMajorById, createMajor, updateMajor, deleteMajor } from '../controllers/majorController.js';
const router = Router();
router.get('/majors', getAllMajors);
router.get('/majors/:id', getMajorById);
router.post('/majors', createMajor);
router.put('/majors/:id', updateMajor);
router.delete('/majors/:id', deleteMajor);
export default router;
