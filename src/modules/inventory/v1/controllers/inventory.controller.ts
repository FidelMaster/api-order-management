import { Request, Response } from 'express';
// Services
import ArticleService from '../services/article.service';
import WareHouseService from '../services/warehouse.service';

export const getAllArticle = async (req: Request, res: Response) => {
    try {
        const articles = await ArticleService.getAllArticle();
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getArticleById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const articles = await ArticleService.getArticleById(Number(id));
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getWarehouseByArticleId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const warehouses = await WareHouseService.getWarehouseByArticleId(Number(id));
        res.status(200).json({ data: warehouses });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getPriceListByArticleId = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const data = await ArticleService.getPriceListByArticleId(Number(id));
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ error: error });
    }
};

export const getArticlesByWarehouseAndListPrice = async (req: Request, res: Response) => {
    const { warehouse_id, list_price_id } = req.params;
    try {

        const articles = await ArticleService.getArticlesByWarehouseAndListPrice(Number(warehouse_id), Number(list_price_id));
        console.log(articles)
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}

export const createArticle = async (req: Request, res: Response) => {
    const {
        supplier_id,
        tax_id,
        code,
        description,
        reorder_point
    } = req.params;

    try {
        const inserted = await ArticleService.addArticle({
            supplier_id: Number(supplier_id),
            tax_id: Number(tax_id),
            reorder_point: Number(reorder_point),
            code,
            description
        });

        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }

    } catch (error) {
        res.status(400).json({ error: error });
    }
}
