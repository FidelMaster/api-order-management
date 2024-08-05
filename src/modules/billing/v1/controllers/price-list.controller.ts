import { Request, Response } from 'express';
// Services
import PriceListService from '../services/price-list.service';

import { PriceListAttributes, PriceListDetailAttributes } from "../../../../models/types/DbType";

export const getAllPriceList = async (req: Request, res: Response) => {
    try {
        const data = await PriceListService.getAll();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getPriceListById = async (req: Request, res: Response) => {
    const { price_list_id } = req.params;
    try {
        const data = await PriceListService.getById(Number(price_list_id));
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const getArticleByPriceList = async (req: Request, res: Response) => {
    const { price_list_id } = req.params;
    try {
        const articles = await PriceListService.getArticleByPriceListId(Number(price_list_id));
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const createPriceList = async (req: Request, res: Response) => {
    const newWarehouse: PriceListAttributes = req.body;

    try {
        const inserted = await PriceListService.createPriceList(newWarehouse);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const addArticleToPriceList = async (req: Request, res: Response) => {
    const article: PriceListDetailAttributes = req.body;

    try {
        const inserted = await PriceListService.addArticleToPriceList(article);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    } catch (error) {
        res.status(400).json({ error: error });
    }
}