import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Order from './Order.model';
import Article from './Article.model';
import { OrderDetailAttributes } from './types/DbType';

@Table({
  tableName: 'order_details',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
    {
      name: 'order_id',
      using: 'BTREE',
      fields: ['order_id'],
    },
    {
      name: 'article_id',
      using: 'BTREE',
      fields: ['article_id'],
    },
  ],
})
export default class OrderDetail extends Model<OrderDetail, OrderDetailAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Order)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  order_id!: number;

  @ForeignKey(() => Article)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  article_id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  article_description!: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    defaultValue: 0,
  })
  quantity!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  presentation!: string;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  unit_price!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  tax_percentage!: number;

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
  sub_total!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  discount_percentage!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  discount_amount!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  total!: number;

  @BelongsTo(() => Article, 'article_id')
  article!: Article;
  
  @BelongsTo(() => Order, 'order_id')
  order!: Order;
}
