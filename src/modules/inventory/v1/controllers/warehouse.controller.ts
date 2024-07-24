import { Request, Response } from 'express';
// Services
import WareHouseService from '../services/warehouse.service';

import { WarehouseAttributes, WarehouseArticleAttributes } from "../../../../models/types/DbType";

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
        const data = await WareHouseService.getById(Number(warehouse_id));
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const getArticleByWarehouse = async (req: Request, res: Response) => {
    const { warehouse_id } = req.params;
    try {
        const articles = await WareHouseService.getArticleByWarehouseId(Number(warehouse_id));
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const createWarehouse = async (req: Request, res: Response) => {
    const newWarehouse: WarehouseAttributes = req.body;

    try {
        const inserted = await WareHouseService.createWarehouse(newWarehouse);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const addArticleToWarehouse = async (req: Request, res: Response) => {
    const article: WarehouseArticleAttributes = req.body;

    try {
        const inserted = await WareHouseService.addArticleToWarehouse(article);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}