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
const Warehouse_model_1 = __importDefault(require("../models/Warehouse.model"));
const WarehouseArticle_model_1 = __importDefault(require("../models/WarehouseArticle.model"));
class WarehouseRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Warehouse_model_1.default.findAll();
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Warehouse_model_1.default.findByPk(id);
        });
    }
    findAllArticleByWarehouseId(warehouse_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return WarehouseArticle_model_1.default.findAll({
                where: {
                    warehouse_id: warehouse_id
                },
                include: [
                    {
                        model: Article_model_1.default,
                        attributes: ['name', 'code'], // Especifica las propiedades que deseas obtener
                    }
                ]
            });
        });
    }
    findArticleByWarehouseIdAndArticleId(warehouse_id, article_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return WarehouseArticle_model_1.default.findOne({
                where: {
                    warehouse_id: warehouse_id,
                    article_id: article_id
                }
            });
        });
    }
    createWarehouse(warehouse) {
        return __awaiter(this, void 0, void 0, function* () {
            return Warehouse_model_1.default.create(warehouse);
        });
    }
    addArticle(article) {
        return __awaiter(this, void 0, void 0, function* () {
            return WarehouseArticle_model_1.default.create(article);
        });
    }
}
exports.default = new WarehouseRepository();
