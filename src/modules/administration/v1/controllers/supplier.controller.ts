import { Request, Response } from 'express';
// Services
import SupplierService from '../services/supplier.service';

import { SupplierAttributes } from "../../../../models/types/DbType";

export const getAll= async (req: Request, res: Response) => {
    try {
        const data = await SupplierService.getAll();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getSupplierById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const data = await SupplierService.getSupplierById(Number(id));
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

 
export const createSupplier = async (req: Request, res: Response) => {
    const newSupplier: SupplierAttributes = req.body;

    try {
        const inserted = await SupplierService.addSupplier(newSupplier);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
 