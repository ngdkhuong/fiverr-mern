import Gig from '../models/gig.model.js';
import createError from '../utils/createError.js';

export const createGig = async (req, res, next) => {
    if (!req.isSeller) return next(createError(403, 'Only seller can create a gig!'));
    const newGig = new Gig();
};

export const deleteGig = async (req, res, next) => {};

export const getGig = async (req, res, next) => {};

export const getGigs = async (req, res, next) => {};
