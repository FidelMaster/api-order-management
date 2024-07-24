import distributionRouteRepository from '../../../../repositories/distribution-route.repository';
import {  DistributionRouteAttributes } from "../../../../models/types/DbType";

class DistributionRouteService {
    async getAllDistributionRoute() {
        return distributionRouteRepository.getAll();
    }

    async createDistributionRoute(distribution_route: DistributionRouteAttributes) { 
        return distributionRouteRepository.createDistributionRoute(distribution_route);
    }

}

export default new DistributionRouteService();