import express from 'express';

import { createGig, deleteGig, getGig, getGigs } from '../controllers/gig.controller.js';

const router = express.Router();

router.post('/', verifyToken, createGig);
router.delete('/:id', verifyToken, deleteGig);
router.get('/single/:id', verifyToken, getGig);
router.get('/', verifyToken, getsGigs);

export default router;
