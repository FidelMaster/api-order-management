import Article from "../models/Article.model";
import PriceList from "../models/PriceList.model";
import PriceListDetail from "../models/PriceListDetail.model";
import { PriceListAttributes, PriceListDetailAttributes } from "../models/types/DbType";

class PriceListRepository {
    async getAll() {
        return PriceList.findAll();
    }

    async findById(id: number) {
        return PriceList.findByPk(id);
    }

    async findAllArticleByPriceListId(price_list_id: number) {
        return PriceListDetail.findAll({
            where: {
                price_list_id: price_list_id
            },
            include: [
                {
                    model: Article,
                    attributes: ['description', 'code'], // Especifica las propiedades que deseas obtener
                }
            ]
        });
    }

    async findArticleByPriceListIdAndArticleId(price_list_id: number, article_id: number) {
        return PriceListDetail.findOne({
            where: {
                price_list_id: price_list_id,
                article_id: article_id
            }
        });
    }

    async createPriceList(price_list: PriceListAttributes) {
        return PriceList.create(price_list);
    }

    async addArticle(article: PriceListDetailAttributes) {
  
        let existingArticle = await this.findArticleByPriceListIdAndArticleId(article.price_list_id, article.article_id);
        if (existingArticle) {
            existingArticle.price = article.price;
            await existingArticle.save();
            return existingArticle;
        } else {
            return PriceListDetail.create(article);
        }
    }

}

export default new PriceListRepository();