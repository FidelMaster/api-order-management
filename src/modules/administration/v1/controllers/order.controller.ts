import { Request, Response } from 'express';
// Services
import OrderService from '../services/order.service';
import { NewOrderDTO } from "src/shared/DTOs/request/new-orderDTO";

export const getAllOrders = async (req: Request, res: Response) => {
    try {
        const data = await OrderService.getAllOrders();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getOrderById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const orderInformation = await OrderService.getOrderById(Number(id));
        if (orderInformation == null) {
            res.status(404).json({ message: 'Informacion no encontrada.', data: [] });
        }

        const orderDetail = await OrderService.getOrderDetailById(Number(id));

        res.status(200).json({ data: { ...orderInformation, items: orderDetail } });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


export const getArticleSummaryByRouteAndState = async (req: Request, res: Response) => {
    const { distribution_route_id } = req.params;
    try {
        const data = await OrderService.getArticleSummaryByRouteAndState(Number(distribution_route_id),"A");
        if (data == null) {
            res.status(404).json({ message: 'Informacion no encontrada.', data: [] });
        }
       
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}

export const addOrders = async (req: Request, res: Response) => {
    const newOrder: NewOrderDTO = req.body;

    try {
        const inserted = await OrderService.generateOrder(newOrder);

        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }

    } catch (error) {
        res.status(500).json({ error: error });
    }
}