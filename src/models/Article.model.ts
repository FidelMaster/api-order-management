import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, HasMany } from 'sequelize-typescript';
import PriceListDetail from './PriceListDetail.model';
import WarehouseArticle from './WarehouseArticle.model';
import OrderDetail from './OrderDetail.model';
import Supplier from './Supplier.model';
import Tax from './Tax.model';
import { ArticleAttributes } from './types/DbType';

@Table({
  tableName: 'articles',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
    {
      name: 'supplier_id',
      using: 'BTREE',
      fields: ['supplier_id'],
    },
    {
      name: 'tax_id',
      using: 'BTREE',
      fields: ['tax_id'],
    },
  ],
})
export default class Article extends Model<Article, ArticleAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Supplier)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  supplier_id!: number;

  @ForeignKey(() => Tax)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  tax_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  code!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;

  @HasMany(() => WarehouseArticle)
  warehouseArticles!: WarehouseArticle[];

  @HasMany(() => PriceListDetail)
  priceListDetails!: PriceListDetail[];

  @HasMany(() => OrderDetail)
  orderDetails!: OrderDetail[];
}
