import DistributionRoute from "../models/DistributionRoute.model";
 
class DistributionRouteRepository {
    
    async getAll() {
        return DistributionRoute.findAll();
    }

     
}

export default new DistributionRouteRepository();