import { Table, Column, Model, ForeignKey } from 'sequelize-typescript';
import Seller from './Seller.model'; // Importa el modelo Seller si es necesario
import Customer from './Customer.model'; // Importa el modelo Customer si es necesario

@Table({
  tableName: 'customer_seller',
  timestamps: false, // Si no necesitas campos de timestamp
  indexes: [
    { name: 'PRIMARY', unique: true, fields: ['id'] },
    { name: 'seller_id', fields: ['seller_id'] },
    { name: 'customer_id', fields: ['customer_id'] },
  ],
})
export class CustomerSeller extends Model<CustomerSeller> {
  @Column({
    type: 'INTEGER',
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Seller)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  seller_id!: number;

  @ForeignKey(() => Customer)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  customer_id!: number;
}

export default CustomerSeller;
