import { Request, Response } from 'express';
import AuthService from '../services/auth.service';

export const register = async (req: Request, res: Response) => {
  const { role_id, name, email, password } = req.body;
  try {
    const newUser = await AuthService.register(role_id, name, email, password);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

export const signIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const token = await AuthService.authenticate(email, password);

    res.status(200).json({ token: token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
