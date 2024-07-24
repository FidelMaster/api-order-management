import DistributionRoute from "../models/DistributionRoute.model";
 import { DistributionRouteAttributes } from "src/models/types/DbType";

class DistributionRouteRepository {
    
    async getAll() {
        return DistributionRoute.findAll();
    }

    async createDistributionRoute(distribution_route: DistributionRouteAttributes) { 
        return DistributionRoute.create(distribution_route);
    }
     
}

export default new DistributionRouteRepository();