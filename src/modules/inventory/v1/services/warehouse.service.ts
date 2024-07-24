import WarehouseRepository from '../../../../repositories/warehouse.repository';
import { WarehouseAttributes, WarehouseArticleAttributes } from "../../../../models/types/DbType";

class WareHouseService {
  async getAll() {
    return WarehouseRepository.getAll();
  }

  async getById(warehouse_id: number) {
    return WarehouseRepository.findById(warehouse_id);
  }

  async getArticleByWarehouseId(warehouse_id: number) {
    return WarehouseRepository.findAllArticleByWarehouseId(warehouse_id);
  }

  async createWarehouse(warehouse: WarehouseAttributes) {
    return WarehouseRepository.createWarehouse(warehouse);
  }

  async addArticleToWarehouse(article: WarehouseArticleAttributes) {
    return WarehouseRepository.addArticle(article);
  }

}

export default new WareHouseService();