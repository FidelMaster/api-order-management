import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Supplier from './Supplier.model';
import Article from './Article.model';
import { BatchAttributes } from './types/DbType';

@Table({
    tableName: 'batches',
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
            name: 'article_id',
            using: 'BTREE',
            fields: ['article_id'],
        },
    ],
})

export default class Batch extends Model<Batch, BatchAttributes> {
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

    @ForeignKey(() => Article)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    article_id!: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false,
    })
    entered_quantity!: number;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    admission_date!: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    expire_date!: Date;

    @BelongsTo(() => Article, 'article_id')
    article!: Article;

    @BelongsTo(() => Supplier, 'supplier_id')
    supplier!: Supplier;
}
