"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const customer_controller_1 = require("../controllers/customer.controller");
const order_controller_1 = require("../controllers/order.controller");
const adminRouter = express_1.default.Router();
adminRouter.get('/v1/customers', customer_controller_1.getAllCustomers);
adminRouter.get('/v1/customers/:id', customer_controller_1.getCustomerById);
adminRouter.post('/v1/customers', customer_controller_1.addCustomer);
adminRouter.get('/v1/orders', order_controller_1.getAllOrders);
adminRouter.get('/v1/orders/:id', order_controller_1.getOrderById);
adminRouter.post('/v1/orders', order_controller_1.addOrders);
exports.default = adminRouter;
