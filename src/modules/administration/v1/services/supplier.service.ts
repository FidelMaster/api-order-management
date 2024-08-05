import SupplierRepository from '../../../../repositories/supplier.repository';

import { SupplierAttributes } from "src/models/types/DbType";

class SupplierService {
    async getAll() {
        return SupplierRepository.getAll();
    }

    async getSupplierById(id: number) {
        return SupplierRepository.findById(id);
    }

    async addSupplier(supplier: SupplierAttributes) { 
        return SupplierRepository.createSupplier(supplier);
    }
}

export default new SupplierService();