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
const article_repository_1 = __importDefault(require("../../../../repositories/article.repository"));
class ArticleService {
    getAllArticle() {
        return __awaiter(this, void 0, void 0, function* () {
            return article_repository_1.default.getAll();
        });
    }
    getArticlesByWarehouseAndListPrice(warehouse_id, list_price_id) {
        return __awaiter(this, void 0, void 0, function* () {
            return article_repository_1.default.getArticlesWithDetails(warehouse_id, list_price_id);
        });
    }
}
exports.default = new ArticleService();
