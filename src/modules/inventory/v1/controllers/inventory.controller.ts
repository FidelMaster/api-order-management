import { Request, Response } from 'express';
// Services
import ArticleService from '../services/article.service';

export const getAllArticle = async (req: Request, res: Response) => {
    try {
        const articles = await ArticleService.getAllArticle();
        res.status(200).json({ data: articles });
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
        description
    } = req.params;

    try {
        const articles = await ArticleService.addArticle({
            supplier_id: Number(supplier_id),
            tax_id: Number(tax_id),
            code,
            description
        });
        console.log(articles)
        res.status(200).json({ data: articles });
    } catch (error) {
        res.status(400).json({ error: error });
    }
}
