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
exports.getArticlesByWarehouseAndListPrice = exports.getAllArticle = void 0;
// Services
const article_service_1 = __importDefault(require("../services/article.service"));
const getAllArticle = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const articles = yield article_service_1.default.getAllArticle();
        res.status(200).json({ data: articles });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.getAllArticle = getAllArticle;
const getArticlesByWarehouseAndListPrice = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { warehouse_id, list_price_id } = req.params;
    try {
        const articles = yield article_service_1.default.getArticlesByWarehouseAndListPrice(Number(warehouse_id), Number(list_price_id));
        console.log(articles);
        res.status(200).json({ data: articles });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.getArticlesByWarehouseAndListPrice = getArticlesByWarehouseAndListPrice;
