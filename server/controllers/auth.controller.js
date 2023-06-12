import User from '../models/user.model.js';
import createError from '../utils/createError.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res, next) => {
    try {
        const hash = bcryptjs.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send('User has been created.');
    } catch (error) {
        next(error);
    }
};

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return next(createError(404, 'User not found!'));

        const isCorrect = bcryptjs.compareSync(req.body.password, user.password);
        if (!isCorrect) return next(createError(400, 'Wrong password'));

        const token = jwt.sign(
            {
                id: user._id,
                isSeller: user.isSeller,
            },
            process.env.JWT_KEY,
        );

        const { password, ...info } = user._doc;

        res.cookie('accessToken', token, { httpOnly: true }).status(200).send(info);
    } catch (error) {
        next(error);
    }
};

export const logout = async (req, res, next) => {
    res.clearCookie('accessCookie', { sameSite: 'none', secure: true }).status(200).send('User has been logged out');
};
