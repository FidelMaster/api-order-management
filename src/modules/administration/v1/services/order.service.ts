import OrderRepository from '../../../../repositories/order.repository';

import { NewOrderDTO } from "src/shared/DTOs/request/new-orderDTO";

class OrderService {
    async getAllOrders() {
        return OrderRepository.getAll();
    }

    async getOrderById(id: number) {
        return OrderRepository.findById(id);
    }

    async getOrderDetailById(order_id: number) {
        return OrderRepository.findDetailById(order_id);
    }

    async generateOrder(newOrder: NewOrderDTO) {
        return OrderRepository.createOrder(newOrder);
    }

}

export default new OrderService();