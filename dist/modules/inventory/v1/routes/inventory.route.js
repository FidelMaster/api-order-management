"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const inventory_controller_1 = require("../controllers/inventory.controller");
const inventoryRouter = express_1.default.Router();
inventoryRouter.get('/v1/articles', inventory_controller_1.getAllArticle);
inventoryRouter.get('/v1/warehouses/:warehouse_id/list-prices/:list_price_id/articles', inventory_controller_1.getArticlesByWarehouseAndListPrice);
exports.default = inventoryRouter;
