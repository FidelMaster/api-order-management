import Tax from "../models/Tax.model"; 

class TaxRepository {
    async getAll() {
        return Tax.findAll();
    }
}

export default new TaxRepository();