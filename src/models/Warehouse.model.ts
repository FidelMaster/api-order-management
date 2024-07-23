import { Table, Column, Model, DataType, PrimaryKey, HasMany, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import WarehouseArticle from './WarehouseArticle.model';
import { WarehouseAttributes } from './types/DbType';
@Table({
  tableName: 'warehouses',
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
export default class Warehouse extends Model<Warehouse, WarehouseAttributes> {
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
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  phone?: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_active!: boolean;

  @HasMany(() => WarehouseArticle)
  warehouseArticles!: WarehouseArticle[];
}
