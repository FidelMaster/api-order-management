import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import Customer from './Customer.model';
import CustomerAddress from './CustomerAddress.model';
import DistributionRoute from './DistributionRoute.model';
import User from './User.model';
import Seller from './Seller.model';

import { OrderAttributes } from './types/DbType';
import OrderDetail from './OrderDetail.model';

@Table({
  tableName: 'orders',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
    {
      name: 'customer_id',
      using: 'BTREE',
      fields: ['customer_id'],
    },
    {
      name: 'distribution_route_id',
      using: 'BTREE',
      fields: ['distribution_route_id'],
    },
    {
      name: 'customer_address_id',
      using: 'BTREE',
      fields: ['customer_address_id'],
    },
    {
      name: 'seller_id',
      using: 'BTREE',
      fields: ['seller_id'],
    },
    {
      name: 'user_id',
      using: 'BTREE',
      fields: ['user_id'],
    },
  ],
})
export default class Order extends Model<Order, OrderAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Customer)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_id!: number;

  @ForeignKey(() => CustomerAddress)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_address_id!: number;

  @ForeignKey(() => DistributionRoute)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  distribution_route_id!: number;

  @ForeignKey(() => Seller)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seller_id!: number;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  user_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  customer_name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  description!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  exchange_rate!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  seller_commision_amount!: number;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  total_item!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  total_tax!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  total_discount!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  sub_total!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  total_order!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  state!: string;

  @Column({
    type: DataType.DATE,
    allowNull: true,
  })
  estimated_delivery_date!: Date;

  @BelongsTo(() => User, 'user_id')
  user!: User;

  @BelongsTo(() => Seller, 'seller_id')
  seller!: Seller;

  @BelongsTo(() => Customer, 'customer_id')
  customer!: Customer;

  @BelongsTo(() => CustomerAddress, 'customer_address_id')
  customer_address!: CustomerAddress;

  @BelongsTo(() => DistributionRoute, 'distribution_route_id')
  distribution_route!: DistributionRoute

  @HasMany(() => OrderDetail)
  order_details!: OrderDetail[];

}
