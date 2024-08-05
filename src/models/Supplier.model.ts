import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import { SupplierAttributes } from './types/DbType';
import Article from './Article.model';

@Table({
  tableName: 'suppliers',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
  ],
})
export default class Supplier extends Model<Supplier, SupplierAttributes> {
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
  identification!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

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

  @HasMany(() => Article)
  articles!: Article[];
}
