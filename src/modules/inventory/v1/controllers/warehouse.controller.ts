import { Request, Response } from 'express';
// Services
import WareHouseService from '../services/warehouse.service';

export const getAllWarehouse = async (req: Request, res: Response) => {
    try {
        const warehouses = await WareHouseService.getAll();
        res.status(200).json({ data: warehouses });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getWarehouseById = async (req: Request, res: Response) => {
    const { warehouse_id } = req.params;
    try {
        const articles = await WareHouseService.getById(Number(warehouse_id));
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}