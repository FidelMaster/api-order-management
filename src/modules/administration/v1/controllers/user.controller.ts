import { Request, Response } from 'express';
// Services
import UserService from '../services/user.service';

export const getAllUser = async (req: Request, res: Response) => {
    try {
        const data = await UserService.getAllUsers();
        res.status(200).json({ data: data });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: error });
    }
};
 