import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import Order from './Order.model';
import Customer from './Customer.model';
import { DistributionRouteAttributes } from './types/DbType';

@Table({
  tableName: 'distribution_routes',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
  ],
})

export default class DistributionRoute extends Model<Customer, DistributionRouteAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;
    
  @HasMany(() => Order)
  orders!: Order[];
  
  @HasMany(() => Customer)
  customers!: Customer[];

}


 