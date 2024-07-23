import express from 'express';
import { getAllArticle, getArticlesByWarehouseAndListPrice } from '../controllers/inventory.controller';

const inventoryRouter = express.Router();

inventoryRouter.get('/v1/articles', getAllArticle);
inventoryRouter.get('/v1/warehouses/:warehouse_id/list-prices/:list_price_id/articles', getArticlesByWarehouseAndListPrice);

export default inventoryRouter;
