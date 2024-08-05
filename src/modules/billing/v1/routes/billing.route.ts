import express from 'express';
import { getAllPriceList, getPriceListById, getArticleByPriceList, createPriceList, addArticleToPriceList} from '../controllers/price-list.controller';
import { getAllTaxes } from '../controllers/tax.controller';

const billingRouter = express.Router();

billingRouter.get('/v1/taxes', getAllTaxes);

billingRouter.get('/v1/price-lists', getAllPriceList);
billingRouter.get('/v1/price-lists/:price_list_id', getPriceListById);
billingRouter.get('/v1/price-lists/:price_list_id/articles', getArticleByPriceList);
billingRouter.post('/v1/price-lists', createPriceList);
billingRouter.post('/v1/price-lists/articles', addArticleToPriceList);

export default billingRouter;
