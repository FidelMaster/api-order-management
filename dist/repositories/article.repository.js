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
const WarehouseArticle_model_1 = __importDefault(require("../models/WarehouseArticle.model"));
const PriceListDetail_model_1 = __importDefault(require("../models/PriceListDetail.model"));
class ArticleRepository {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return Article_model_1.default.findAll();
        });
    }
    getArticlesWithDetails(warehouse_id, price_list_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const articles = yield Article_model_1.default.findAll({
                attributes: [
                    ['id', 'id'],
                    ['code', 'code'],
                    ['description', 'description'],
                ],
                include: [
                    {
                        model: WarehouseArticle_model_1.default,
                        where: { warehouse_id: warehouse_id },
                        attributes: [['quantity', 'quantity']],
                    },
                    {
                        model: PriceListDetail_model_1.default,
                        where: { price_list_id: price_list_id },
                        attributes: [['price', 'price']],
                        // required: true,
                    },
                ],
            });
            const transformedArticles = articles.map(article => {
                // Extracting the first entry from the warehouseArticles and priceListDetails arrays
                const warehouseArticle = article.warehouseArticles[0];
                const priceListDetail = article.priceListDetails[0];
                return {
                    article_id: article.id,
                    article_code: article.code,
                    article_description: article.description,
                    available: warehouseArticle ? warehouseArticle.quantity : null,
                    price: priceListDetail ? priceListDetail.price : null,
                };
            });
            return transformedArticles;
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return Article_model_1.default.findByPk(id);
        });
    }
    findByCode(code) {
        return __awaiter(this, void 0, void 0, function* () {
            return Article_model_1.default.findOne({ where: { code } });
        });
    }
    createArticle(article) {
        return __awaiter(this, void 0, void 0, function* () {
            return Article_model_1.default.create(article);
        });
    }
}
exports.default = new ArticleRepository();
