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
exports.addOrders = exports.getOrderById = exports.getAllOrders = void 0;
// Services
const order_service_1 = __importDefault(require("../services/order.service"));
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield order_service_1.default.getAllOrders();
        res.status(200).json({ data: data });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getAllOrders = getAllOrders;
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const orderInformation = yield order_service_1.default.getOrderById(Number(id));
        if (orderInformation == null) {
            res.status(404).json({ message: 'Informacion no encontrada.', data: [] });
        }
        const orderDetail = yield order_service_1.default.getOrderDetailById(Number(id));
        res.status(200).json({ data: Object.assign(Object.assign({}, orderInformation), { items: orderDetail }) });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getOrderById = getOrderById;
const addOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newOrder = req.body;
    try {
        const inserted = yield order_service_1.default.generateOrder(newOrder);
        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        }
        else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.addOrders = addOrders;
