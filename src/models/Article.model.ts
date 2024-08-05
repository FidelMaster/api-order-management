import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import PriceListDetail from './PriceListDetail.model';
import WarehouseArticle from './WarehouseArticle.model';
import OrderDetail from './OrderDetail.model';
import Supplier from './Supplier.model';
import Tax from './Tax.model';
import Batch from './Batch.model';
import BatchArticle from './BatchArticle.model';
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

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  type_article!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  use_batch!: boolean;
  
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  use_inventory!: boolean;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  last_output_date!: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  reorder_point!: number;

  @HasMany(() => WarehouseArticle)
  warehouseArticles!: WarehouseArticle[];

  @HasMany(() => Batch)
  batches!: Batch[];

  @HasMany(() => BatchArticle)
  batchArticles!: BatchArticle[];

  @HasMany(() => PriceListDetail)
  priceListDetails!: PriceListDetail[];
  
  @HasMany(() => OrderDetail)
  orderDetails!: OrderDetail[];

  @BelongsTo(() => Supplier, 'supplier_id')
  supplier!: Article;

  @BelongsTo(() => Supplier, 'tax_id')
  tax!: Tax;
}
