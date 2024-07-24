import { Request, Response } from 'express';
// Services
import distributionRouteService from '../services/distribution-route.service';

export const getAllDistributionRoute = async (req: Request, res: Response) => {
    try {
        const data = await distributionRouteService.getAllDistributionRoute();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(500).json({ error: error });
    }
};

 
export const createDistributionRoute = async (req: Request, res: Response) => {
    const {
        description
    } = req.body;

    try {

        const inserted = await distributionRouteService.createDistributionRoute({
           description
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