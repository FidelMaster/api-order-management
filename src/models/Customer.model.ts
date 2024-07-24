import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { CustomerAttributes } from './types/DbType';
import CustomerCategory from './CustomerCategory.model';
import DistributionRoute from './DistributionRoute.model';
import Order from './Order.model';

@Table({
  tableName: 'customers',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
    {
      name: 'identification',
      unique: true,
      using: 'BTREE',
      fields: ['identification'],
    },
    {
      name: 'customer_category_id',
      using: 'BTREE',
      fields: ['customer_category_id'],
    },
  ],
})
export default class Customer extends Model<Customer, CustomerAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => CustomerCategory)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  customer_category_id!: number;

  @ForeignKey(() => DistributionRoute)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  distribution_route_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: 'identification',
  })
  identification!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  credit_limit!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  credit_available!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  current_balance!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_dni!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_phone!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_email!: string;

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
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  is_tax_exemption!: boolean;

  @BelongsTo(() => DistributionRoute, 'distribution_route_id')
  distribution_route!: DistributionRoute

  @HasMany(() => Order)
  orders!: Order[];


}
