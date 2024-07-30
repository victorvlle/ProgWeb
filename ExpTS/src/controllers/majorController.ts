import { Request, Response } from 'express';
import { createMajor, getAllMajors, getMajor, updateMajor, removeMajor } from '../services/majorService.js';

export const index = async (req: Request, res: Response) => {
  const majors = await getAllMajors();
  res.render('majors/index', { majors });
};

export const create = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    res.render('majors/create');
  } else {
    await createMajor(req.body);
    res.redirect('/majors');
  }
};

export const read = async (req: Request, res: Response) => {
  const major = await getMajor(req.params.id);
  res.render('majors/read', { major });
};

export const update = async (req: Request, res: Response) => {
  if (req.method === 'GET') {
    const major = await getMajor(req.params.id);
    res.render('majors/update', { major });
  } else {
    await updateMajor(req.params.id, req.body);
    res.redirect('/majors');
  }
};

export const remove = async (req: Request, res: Response) => {
  await removeMajor(req.params.id);
  res.redirect('/majors');
};
