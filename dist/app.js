"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const body_parser_1 = __importDefault(require("body-parser"));
const auth_route_1 = __importDefault(require("./modules/authentication/v1/routes/auth.route"));
const administration_route_1 = __importDefault(require("./modules/administration/v1/routes/administration.route"));
const inventory_route_1 = __importDefault(require("./modules/inventory/v1/routes/inventory.route"));
//import orderRoutes from './routes/orderRoutes';
const auth_middleware_1 = require("./shared/middlewares/auth-middleware");
const database_1 = __importDefault(require("./config/database"));
const cors_1 = __importDefault(require("cors"));
dotenv_1.default.config();
const PORT = process.env.PORT || 3000;
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(express_1.default.json());
app.use(auth_middleware_1.checkAPIKeyInRequestHeader);
app.use('/api/auth', auth_route_1.default);
app.use('/api/administration', administration_route_1.default);
app.use('/api/inventory', inventory_route_1.default);
// Synchronize all models with the database
database_1.default.sync({ force: false }).then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});
