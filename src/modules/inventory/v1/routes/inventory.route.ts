import express from 'express';
import { getAllArticle, getArticlesByWarehouseAndListPrice } from '../controllers/inventory.controller';
import { getAllWarehouse, getWarehouseById, getArticleByWarehouse, createWarehouse, addArticleToWarehouse } from '../controllers/warehouse.controller';

const inventoryRouter = express.Router();

inventoryRouter.get('/v1/articles', getAllArticle);
inventoryRouter.get('/v1/warehouses/:warehouse_id/list-prices/:list_price_id/articles', getArticlesByWarehouseAndListPrice);

inventoryRouter.get('/v1/warehouses', getAllWarehouse);
inventoryRouter.get('/v1/warehouses/:warehouse_id', getWarehouseById);
inventoryRouter.get('/v1/warehouses/:warehouse_id/articles', getArticleByWarehouse);
inventoryRouter.post('/v1/warehouses', createWarehouse);
inventoryRouter.post('/v1/warehouses/articles', addArticleToWarehouse);

export default inventoryRouter;
