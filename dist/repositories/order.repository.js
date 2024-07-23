"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Article_model_1 = __importDefault(require("../models/Article.model"));
const Order_model_1 = __importDefault(require("../models/Order.model"));
const OrderDetail_model_1 = __importDefault(require("../models/OrderDetail.model"));
const database_1 = __importDefault(require("../config/database"));
class OrderRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Order_model_1.default.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Order_model_1.default.findByPk(id);
        });
    }
    findByUser(user_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Order_model_1.default.findOne({ where: { user_id } });
        });
    }
    findDetailById(order_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return OrderDetail_model_1.default.findAll({
                where: {
                    order_id: order_id
                },
                include: [
                    {
                        model: Article_model_1.default,
                        attributes: ['description', 'code'], // Especifica las propiedades que deseas obtener
                    }
                ]
            });
        });
    }
    createOrder(newOrder) {
        return __awaiter(this, void 0, void 0, function* () {
            const transaction = yield database_1.default.transaction(); // Start a transaction
            try {
                let order_header = {
                    customer_id: newOrder.customer_id,
                    customer_address_id: 1,
                    seller_id: 1,
                    customer_name: newOrder.customer_name,
                    description: newOrder.description,
                    exchange_rate: newOrder.exchange_rate,
                    total_item: newOrder.total_item,
                    total_tax: newOrder.total_tax,
                    total_discount: newOrder.total_discount,
                    sub_total: newOrder.sub_total,
                    total_order: newOrder.total_order,
                    estimated_delivery_date: newOrder.estimated_delivery_date,
                    state: 'A',
                    user_id: 1
                };
                const order = yield Order_model_1.default.create(order_header, { transaction } // Include transaction for atomicity
                );
                const orderItems = newOrder.items.map((item) => (Object.assign({ order_id: order.id }, item)));
                yield OrderDetail_model_1.default.bulkCreate(orderItems, { transaction }); // Efficient bulk creation
                yield transaction.commit(); // Commit the transaction if successful
                return Object.assign(Object.assign({}, order.dataValues), { items: orderItems }); // Return order with included items
            }
            catch (error) {
                yield transaction.rollback(); // Rollback on errors
                throw error; // Rethrow the error for handling
            }
        });
    }
}
exports.default = new OrderRepository();
