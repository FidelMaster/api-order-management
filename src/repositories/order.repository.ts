import Article from "../models/Article.model";
import Order from "../models/Order.model";
import OrderDetail from "../models/OrderDetail.model";
import sequelize from "../config/database";
import { NewOrderDTO } from "../shared/DTOs/request/new-orderDTO";
import { OrderAttributes, OrderDetailAttributes } from "../models/types/DbType";

class OrderRepository {
    async getAll() {
        return Order.findAll();
    }

    async findById(id: number) {
        return Order.findByPk(id);
    }

    async findByUser(user_id: number) {
        return Order.findOne({ where: { user_id } });
    }

    async findDetailById(order_id: number) {
        return OrderDetail.findAll({
            where: {
                order_id: order_id
            },
            include: [
                {
                    model: Article,
                    attributes: [ 'description', 'code'], // Especifica las propiedades que deseas obtener
                }
            ]
        });
    }
  
    async createOrder(newOrder: NewOrderDTO) {
        const transaction = await sequelize.transaction(); // Start a transaction
        try {
            let order_header = {
                customer_id: newOrder.customer_id,
                customer_address_id: 1,
                seller_id: 1,
                customer_name: newOrder.customer_name,
                description: newOrder.description,
                exchange_rate: newOrder.exchange_rate,
                total_item: newOrder.total_item,
                total_tax: newOrder.total_tax,
                total_discount: newOrder.total_discount,
                sub_total: newOrder.sub_total,
                total_order: newOrder.total_order,
                estimated_delivery_date: newOrder.estimated_delivery_date,
                state: 'A',
                user_id: 1
            } as OrderAttributes;

            const order = await Order.create(
                order_header,
                { transaction } // Include transaction for atomicity
            );

            const orderItems = newOrder.items.map((item) => ({
                order_id: order.id,
                ...item, // Destructure remaining item properties
            }));

            await OrderDetail.bulkCreate(orderItems, { transaction }); // Efficient bulk creation

            await transaction.commit(); // Commit the transaction if successful

            return { ...order.dataValues, items: orderItems }; // Return order with included items
        } catch (error) {
            await transaction.rollback(); // Rollback on errors
            throw error; // Rethrow the error for handling
        }
    }
}

export default new OrderRepository();