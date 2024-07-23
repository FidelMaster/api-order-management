import { Table, BelongsTo, Column, DataType, Model, ForeignKey } from 'sequelize-typescript';
import Warehouse from './Warehouse.model'; // Importa el modelo Warehouse si es necesario
import Article from './Article.model'; // Importa el modelo Article si es necesario
import { WarehouseArticleAttributes } from './types/DbType';

@Table({
  tableName: 'warehouse_article',
  timestamps: true, // Puedes ajustar según necesidades
  indexes: [
    { name: 'PRIMARY', unique: true, fields: ['id'] },
    { name: 'warehouse_id', using: 'BTREE', fields: ['warehouse_id'] },
    { name: 'article_id', using: 'BTREE', fields: ['article_id'] },
  ],
})
export default class WarehouseArticle extends Model<WarehouseArticle, WarehouseArticleAttributes> {
  @Column({
    type: 'INTEGER',
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Warehouse)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  warehouse_id!: number;


  @ForeignKey(() => Article)
  // @BelongsTo(() => Article)
  @Column({
    type: 'INTEGER',
    allowNull: false,
  })
  article_id!: number;

  @BelongsTo(() => Article, 'article_id')
  article!: Article;

  @BelongsTo(() => Warehouse, 'warehouse_id')
  warehouse!: Warehouse;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  quantity!: number;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
    defaultValue: 0,
  })
  reserved_quantity!: number;
}