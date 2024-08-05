import Supplier from "../models/Supplier.model"; 
import { SupplierAttributes } from "src/models/types/DbType";

class SupplierRepository {
    async getAll() {
        return Supplier.findAll();
    }
 
    async findById(id: number) {
        return Supplier.findByPk(id);
    }
 
    async createSupplier(supplier: SupplierAttributes) { 
        return Supplier.create(supplier);
    }
}

export default new SupplierRepository();