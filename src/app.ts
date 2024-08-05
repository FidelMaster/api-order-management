import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import authRouter from './modules/authentication/v1/routes/auth.route';
import adminRouter from './modules/administration/v1/routes/administration.route';
import inventoryRouter from './modules/inventory/v1/routes/inventory.route';
import billingRouter from './modules/billing/v1/routes/billing.route';
//import orderRoutes from './routes/orderRoutes';
import { checkAPIKeyInRequestHeader } from './shared/middlewares/auth-middleware';
import sequelize from './config/database';
import cors from 'cors';

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(express.json());
app.use(checkAPIKeyInRequestHeader);

app.use('/api/auth', authRouter);
app.use('/api/administration', adminRouter);
app.use('/api/inventory', inventoryRouter);
app.use('/api/billing', billingRouter);

// Synchronize all models with the database
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});
