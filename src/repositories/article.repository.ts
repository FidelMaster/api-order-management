import Article from "../models/Article.model";
import WarehouseArticle from "../models/WarehouseArticle.model";
import PriceListDetail from "../models/PriceListDetail.model";
import { ArticleAttributes } from "../models/types/DbType";

class ArticleRepository {
    async getAll() {
        return Article.findAll();
    }

    async getArticlesWithDetails(warehouse_id: number, price_list_id: number) {

        const articles = await Article.findAll({
            attributes: [
                ['id', 'id'],
                ['code', 'code'],
                ['description', 'description'],
            ],
            include: [
                {
                    model: WarehouseArticle,
                    where: { warehouse_id: warehouse_id },
                    attributes: [['quantity', 'quantity']],

                },
                {
                    model: PriceListDetail,
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
    }

    async findById(id: number) {
        return Article.findByPk(id);
    }

    async findByCode(code: string) {
        return Article.findOne({ where: { code } });
    }

    async createArticle(article: ArticleAttributes) {
        return Article.create(article);
    }
}

export default new ArticleRepository();