import PriceListRepository from '../../../../repositories/price-list.repository';
import { PriceListAttributes, PriceListDetailAttributes } from "../../../../models/types/DbType";

class PriceListService {
  async getAll() {
    return PriceListRepository.getAll();
  }

  async getById(price_list_id: number) {
    return PriceListRepository.findById(price_list_id);
  }

  async getArticleByPriceListId(warehouse_id: number) {
    return PriceListRepository.findAllArticleByPriceListId(warehouse_id);
  }

  async createPriceList(priceList: PriceListAttributes) {
    return PriceListRepository.createPriceList(priceList);
  }

  async addArticleToPriceList(article: PriceListDetailAttributes) {
    return PriceListRepository.addArticle(article);
  }


}

export default new PriceListService();