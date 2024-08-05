import TaxRepository from '../../../../repositories/tax.repository';
 
class TaxService {
  async getAll() {
    return TaxRepository.getAll();
  }
}

export default new TaxService();