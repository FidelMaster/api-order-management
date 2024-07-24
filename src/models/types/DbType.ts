import { Sequelize, Model, ModelCtor } from 'sequelize';

export interface UserAttributes {
  id?: number;
  role_id: number;
  name: string;
  email: string;
  password_digest: string;
  is_active: boolean;
}

export interface ArticleAttributes {
  id?: number;
  supplier_id: number;
  tax_id: number;
  code: string;
  description: string;
}

export interface CustomerAttributes {
  id?: number;
  distribution_route_id: number;
  customer_category_id: number;
  identification: string;
  name: string;
  credit_limit: number;
  credit_available: number;
  current_balance: number;
  contact_dni: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  address: string;
  phone: string;
  is_tax_exemption: boolean;
}

export interface DistributionRouteAttributes {
  id?: number;
  description: string;
}


export interface CustomerAddressAttributes {
  id?: number;
  customer_id: number;
  address: string;
  phone: string;
  latitude?: number | null;
  longitude?: number | null;
}


interface RolesAttributes {
  id: number;
  description: string;
}

interface SellerAttributes {
  id: number;
  user_id: number;
  dni: string;
  name: string;
  phone: string;
  email: string;
  percentage_commission: number;
  is_active: boolean;
}

interface SupplierAttributes {
  id: number;
  identification: string;
  name: string;
  contact_dni: string;
  contact_name: string;
  contact_phone: string;
  contact_email: string;
  address: string;
  phone: string;
}

interface TaxAttributes {
  id: number;
  description: string;
  percentage: number;
}

export interface OrderAttributes {
  id?: number;
  distribution_route_id: number;
  customer_id: number;
  customer_address_id: number;
  user_id: number;
  seller_id: number;
  customer_name: string;
  description?: string | null;
  exchange_rate: number;
  seller_commision_amount: number;
  total_item: number;
  total_tax: number;
  total_discount: number;
  sub_total: number;
  total_order: number;
  state: string;
  estimated_delivery_date?: Date | null;
}

interface DriverAttributes {
  id: number;
  dni: string;
  name: string;
  phone: string;
  email: string;
  is_active: boolean;
  created_by: number;
  created_date: Date;
}

export interface OrderDetailAttributes {
  id?: number;
  order_id: number;
  article_id: number;
  article_description: string;
  quantity: number;
  presentation?: string | null;
  unit_price: number;
  tax_percentage: number;
  total_tax: number;
  sub_total: number;
  discount_percentage: number;
  discount_amount: number;
  total: number;
}

interface PriceListDetailAttributes {
  id: number;
  price_list_id: number;
  article_id: number;
  price: number;
}

export interface WarehouseAttributes {
  id?: number;
  name: string;
  address: string;
  phone: string;
  is_active: boolean;
}

export interface WarehouseArticleAttributes {
  id?: number;
  warehouse_id: number;
  article_id: number;
  quantity: number;
  reserved_quantity: number;
}
// Define the structure of your database interface
export interface DbInterface {
  sequelize: Sequelize;
  Sequelize: typeof Sequelize;
  Articles: ModelCtor<Model<any, any>>;
  CustomerAddress: ModelCtor<Model<any, any>>;
  CustomerCategories: ModelCtor<Model<any, any>>;
  CustomerSeller: ModelCtor<Model<any, any>>;
  Customers: ModelCtor<Model<any, any>>;
  DistributionRoutes: ModelCtor<Model<any, any>>;
  Drivers: ModelCtor<Model<any, any>>;
  OrderDetails: ModelCtor<Model<any, any>>;
  Orders: ModelCtor<Model<any, any>>;
  PaymentTypes: ModelCtor<Model<any, any>>;
  PriceListDetail: ModelCtor<Model<any, any>>;
  PriceLists: ModelCtor<Model<any, any>>;
  Roles: ModelCtor<Model<any, any>>;
  Sellers: ModelCtor<Model<any, any>>;
  SequelizeMeta: ModelCtor<Model<any, any>>;
  Suppliers: ModelCtor<Model<any, any>>;
  SystemParameters: ModelCtor<Model<any, any>>;
  Taxes: ModelCtor<Model<any, any>>;
  UnitMeasurements: ModelCtor<Model<any, any>>;
  Users: ModelCtor<Model<any, any>>;
  Vehicles: ModelCtor<Model<any, any>>;
  WarehouseArticle: ModelCtor<Model<any, any>>;
  Warehouses: ModelCtor<Model<any, any>>;
  [key: string]: ModelCtor<Model<any, any>> | Sequelize | typeof Sequelize; // for any other models that are added dynamically
}
