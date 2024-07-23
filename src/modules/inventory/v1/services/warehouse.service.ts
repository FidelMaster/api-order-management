import WarehouseRepository from '../../../../repositories/warehouse.repository';

class  WareHouseService {
  async getAll(){
    return WarehouseRepository.getAll();
  }

  async getById(warehouse_id: number) {
    return WarehouseRepository.findById(warehouse_id);
  }


}

export default new WareHouseService();