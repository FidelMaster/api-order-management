import Article from "../models/Article.model";
import Warehouse from "../models/Warehouse.model";
import WarehouseArticle from "../models/WarehouseArticle.model";
import { WarehouseAttributes, WarehouseArticleAttributes } from "../models/types/DbType";

class WarehouseRepository {
    async getAll() {
        return Warehouse.findAll();
    }

    async findById(id: number) {
        return Warehouse.findByPk(id);
    }

    async findAllArticleByWarehouseId(warehouse_id: number) {
        return WarehouseArticle.findAll({
            where: {
                warehouse_id: warehouse_id
            },
            include: [
                {
                    model: Article,
                    attributes: ['description', 'code'], // Especifica las propiedades que deseas obtener
                }
            ]
        });
    }

    async findAllWarehouseByArticleId(article_id: number) {
        return WarehouseArticle.findAll({
            where: {
                article_id: article_id
            },
            include: [
                {
                    model: Warehouse,
                    attributes: ['name'], // Especifica las propiedades que deseas obtener
                }
            ]
        });
    }

    async findArticleByWarehouseIdAndArticleId(warehouse_id: number, article_id: number) {
        return WarehouseArticle.findOne({
            where: {
                warehouse_id: warehouse_id,
                article_id: article_id
            }
        });
    }

    async createWarehouse(warehouse: WarehouseAttributes) {
        return Warehouse.create(warehouse);
    }

    async addArticle(article: WarehouseArticleAttributes) {
        let existingArticle = await this.findArticleByWarehouseIdAndArticleId(article.warehouse_id, article.article_id);
        if (existingArticle) {
            existingArticle.quantity = article.quantity;
            await existingArticle.save();
            return existingArticle;
        } else {
            return WarehouseArticle.create(article);
        }
    }

}

export default new WarehouseRepository();