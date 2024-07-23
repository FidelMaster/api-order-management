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
exports.addCustomer = exports.getCustomerById = exports.getAllCustomers = void 0;
// Services
const customer_service_1 = __importDefault(require("../services/customer.service"));
const getAllCustomers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = yield customer_service_1.default.getAllCustomers();
        res.status(200).json({ data: data });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getAllCustomers = getAllCustomers;
const getCustomerById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const customerInformation = yield customer_service_1.default.getCustomerById(Number(id));
        const customerAddress = yield customer_service_1.default.findAddressByCustomerId(Number(id));
        res.status(200).json({ data: Object.assign(Object.assign({}, customerInformation), { customer_locations: customerAddress }) });
    }
    catch (error) {
        res.status(500).json({ error: error });
    }
});
exports.getCustomerById = getCustomerById;
const addCustomer = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { customer_category_id, identification, name, credit_limit, credit_available, current_balance, contact_dni, contact_name, contact_phone, contact_email, address, phone, is_tax_exemption } = req.body;
    try {
        const inserted = yield customer_service_1.default.addCustomer({
            customer_category_id,
            identification,
            name,
            credit_limit,
            credit_available,
            current_balance,
            contact_dni,
            contact_name,
            contact_phone,
            contact_email,
            address,
            phone,
            is_tax_exemption
        });
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
exports.addCustomer = addCustomer;
