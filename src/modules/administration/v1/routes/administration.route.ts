import express from 'express';
import { getAllCustomers, getCustomerById, addCustomer } from '../controllers/customer.controller';
import { getAllOrders, getOrderById, addOrders } from '../controllers/order.controller';
import { getAllUser } from '../controllers/user.controller';

const adminRouter = express.Router();


adminRouter.get('/v1/users', getAllUser);

adminRouter.get('/v1/customers', getAllCustomers);
adminRouter.get('/v1/customers/:id', getCustomerById);
adminRouter.post('/v1/customers', addCustomer);

adminRouter.get('/v1/orders', getAllOrders);
adminRouter.get('/v1/orders/:id', getOrderById);
adminRouter.post('/v1/orders', addOrders);


export default adminRouter;
