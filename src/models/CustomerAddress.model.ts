import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, HasMany } from 'sequelize-typescript';
import { CustomerAddressAttributes } from './types/DbType';
import Customer from './Customer.model';
import Order from './Order.model';

@Table({
  tableName: 'customer_address',
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
  ],
})
export default class CustomerAddress extends Model<CustomerAddress, CustomerAddressAttributes> {
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

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  latitude!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  longitude!: number;

  @HasMany(() => Order)
  orders!: Order[];
}
