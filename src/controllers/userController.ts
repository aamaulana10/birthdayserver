// src/controllers/userController.ts
import { Request, Response } from 'express';
import User from '../models/User';
import { scheduleBirthdayMessage } from '../services/schedulerService';
import { sendBirthdayMessage } from '../services/emailService';
import moment from 'moment';

export const createUser = async (req: Request, res: Response) => {
    try {
        const { firstName, lastName, email, birthday } = req.body;
        const user = await User.create({ firstName: firstName, lastName: lastName, email: email, birthday: moment(birthday).toDate() });
        scheduleBirthdayMessage(user);
        res.status(201).json(user);
    } catch (error) {
        console.log("error ", error);
        res.status(500).json({ error: error.message });
    }
};

export const deleteUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await User.destroy({ where: { id: id } });
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateUser = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, birthday } = req.body;
        await User.update({ firstName: firstName, lastName: lastName, email: email, birthday: moment(birthday).toDate() }, { where: { id } });
        const user = await User.findByPk(id);
        scheduleBirthdayMessage(user!);
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// just for internal testing only
export const getAllUser = async (req: Request, res: Response) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (error) {
        console.log("error ", error.message);
        res.status(500).json({ error: error.message });
    }
};
