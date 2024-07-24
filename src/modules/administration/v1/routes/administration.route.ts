import express from 'express';
import { getAllCustomers, getCustomerById, addCustomer } from '../controllers/customer.controller';
import { getAllOrders, getOrderById, getArticleSummaryByRouteAndState, addOrders } from '../controllers/order.controller';
import { getAllDistributionRoute, createDistributionRoute } from '../controllers/distribution-route.controller';
import { getAllUser } from '../controllers/user.controller';

const adminRouter = express.Router();

adminRouter.get('/v1/users', getAllUser);

adminRouter.get('/v1/customers', getAllCustomers);
adminRouter.get('/v1/customers/:id', getCustomerById);
adminRouter.post('/v1/customers', addCustomer);

adminRouter.get('/v1/distribution-routes', getAllDistributionRoute);
adminRouter.post('/v1/distribution-routes', createDistributionRoute);

adminRouter.get('/v1/orders', getAllOrders);
adminRouter.get('/v1/orders/distribution-route/:distribution_route_id/articles/summary', getArticleSummaryByRouteAndState);
adminRouter.get('/v1/orders/:id', getOrderById);
adminRouter.post('/v1/orders', addOrders);


export default adminRouter;
