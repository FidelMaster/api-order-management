import CustomerRepository from '../../../../repositories/customer.repository';

import { CustomerAttributes, CustomerAddressAttributes } from "src/models/types/DbType";

class CustomerService {
    async getAllCustomers() {
        return CustomerRepository.getAll();
    }

    async getCustomerById(id: number) {
        return CustomerRepository.findById(id);
    }

    async findAddressByCustomerId(customer_id: number) {
        return CustomerRepository.findAddressByCustomerId(customer_id);
    }

    async addCustomer(customer: CustomerAttributes) { 
        return CustomerRepository.createCustomer(customer);
    }

    async addAddress(address: CustomerAddressAttributes) { 
        return CustomerRepository.addAddress(address);
    }

}

export default new CustomerService();