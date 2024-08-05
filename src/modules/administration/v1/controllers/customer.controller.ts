import { Request, Response } from 'express';
// Services
import CustomerService from '../services/customer.service';

export const getAllCustomers = async (req: Request, res: Response) => {
    try {
        const data = await CustomerService.getAllCustomers();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getAllCustomerCategory = async (req: Request, res: Response) => {
    try {
        const data = await CustomerService.getAllCustomerCategory();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

export const getCustomerById = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const customerInformation = await CustomerService.getCustomerById(Number(id));
        const customerAddress = await CustomerService.findAddressByCustomerId(Number(id));
        res.status(200).json({ data: { customer: customerInformation, customer_locations: customerAddress } });
    } catch (error) {
        res.status(500).json({ error: error });
    }
}


export const addCustomer = async (req: Request, res: Response) => {
    const {
        distribution_route_id,
        customer_category_id,
        identification,
        name,
        credit_limit,
        credit_available,
        current_balance,
        contact_dni,
        contact_name,
        contact_phone,
        contact_email,
        address,
        phone,
        is_tax_exemption
    } = req.body;

    try {

        const inserted = await CustomerService.addCustomer({
            distribution_route_id,
            customer_category_id,
            identification,
            name,
            credit_limit,
            credit_available,
            current_balance,
            contact_dni,
            contact_name,
            contact_phone,
            contact_email,
            address,
            phone,
            is_tax_exemption
        });

        if (inserted) {
            res.status(201).json({ success: true, data: inserted });
        } else {
            res.status(400).json({ success: false, message: 'Insercion fallida' });
        }

    } catch (error) {
        res.status(500).json({ error: error });
    }
}