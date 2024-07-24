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

    async getArticleSummaryByRouteAndState(distribution_route_id: number, state: string) {
        return OrderRepository.getArticleSummariesByDistributionRouteAndState(distribution_route_id, state);
    }

    async generateOrder(newOrder: NewOrderDTO) {
        return OrderRepository.createOrder(newOrder);
    }

}

export default new OrderService();