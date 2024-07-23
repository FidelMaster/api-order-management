import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import PriceList from './PriceList.model'; // Importa el modelo PriceList
import Article from './Article.model'; // Importa el modelo Article

@Table({
  tableName: 'price_list_detail',
  timestamps: true,
  indexes: [
    { name: 'PRIMARY', unique: true, using: 'BTREE', fields: ['id'] },
    { name: 'price_list_id', using: 'BTREE', fields: ['price_list_id'] },
    { name: 'article_id', using: 'BTREE', fields: ['article_id'] },
  ],
})
export default class PriceListDetail extends Model<PriceListDetail> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => PriceList)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price_list_id!: number;

  @ForeignKey(() => Article)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  article_id!: number;

  @BelongsTo(() => Article, 'article_id')
  article!: Article;

  @BelongsTo(() => PriceList, 'price_list_id')
  priceList!: PriceList;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  price!: number;
}
