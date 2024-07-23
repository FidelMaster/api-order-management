import ArticleRepository from '../../../../repositories/article.repository';
import { ArticleAttributes } from "../../../../models/types/DbType";

class ArticleService {
  async getAllArticle(){
    return ArticleRepository.getAll();
  }

  async getArticlesByWarehouseAndListPrice(warehouse_id: number, list_price_id: number) {
    return ArticleRepository.getArticlesWithDetails(warehouse_id, list_price_id);
  }

  async addArticle(article: ArticleAttributes) {
    return ArticleRepository.createArticle(article);
  }


}

export default new ArticleService();