import { Request, Response } from 'express';
// Services
import TaxService from '../services/tax.service';
 
export const getAllTaxes = async (req: Request, res: Response) => {
    try {
        const data = await TaxService.getAll();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};