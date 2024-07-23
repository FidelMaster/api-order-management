import Customer from "../models/Customer.model";
import CustomerAddress from "../models/CustomerAddress.model";
import { CustomerAttributes, CustomerAddressAttributes } from "src/models/types/DbType";

class CustomerRepository {
    async getAll() {
        return Customer.findAll();
    }

    async findById(id: number) {
        return Customer.findByPk(id);
    }

    async findByIdentification(identification: string) {
        return Customer.findOne({ where: { identification } });
    }

    async findAddressByCustomerId(customer_id: number) {
        return CustomerAddress.findAll({ where: { customer_id } });
    }

    async createCustomer(customer: CustomerAttributes) { 
        return Customer.create(customer);
    }

    async addAddress(address: CustomerAddressAttributes) { 
        return CustomerAddress.create(address);
    }
}

export default new CustomerRepository();