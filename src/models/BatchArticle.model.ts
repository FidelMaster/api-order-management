import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import PriceListDetail from './PriceListDetail.model';
import WarehouseArticle from './WarehouseArticle.model';
import Warehouse from './Warehouse.model';
import Batch from './Batch.model';
import Article from './Article.model';
import { BatchArticleAttributes } from './types/DbType';

@Table({
    tableName: 'batch_article',
    timestamps: true,
    indexes: [
        {
            name: 'PRIMARY',
            unique: true,
            using: 'BTREE',
            fields: ['id'],
        },
        {
            name: 'batch_id',
            using: 'BTREE',
            fields: ['batch_id'],
        },
        {
            name: 'warehouse_id',
            using: 'BTREE',
            fields: ['warehouse_id'],
        },
        {
            name: 'article_id',
            using: 'BTREE',
            fields: ['article_id'],
        },
    ],
})

export default class BatchArticle extends Model<BatchArticle, BatchArticleAttributes> {
    @AutoIncrement
    @PrimaryKey
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    id!: number;

    @ForeignKey(() => Batch)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    batch_id!: number;

    @ForeignKey(() => Article)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    article_id!: number;

    @ForeignKey(() => Warehouse)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    warehouse_id!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    available_quantity!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    reserved_quantity!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expire_quantity!: number;

    @BelongsTo(() => Batch, 'batch_id')
    batch!: Batch;

    @BelongsTo(() => Article, 'article_id')
    article!: Article;
    
    @BelongsTo(() => Article, 'warehouse_id')
    warehouse!: Warehouse;
}
