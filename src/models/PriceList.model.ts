import { Table, Column, Model, DataType, PrimaryKey, HasMany, AutoIncrement, ForeignKey } from 'sequelize-typescript';
import PriceListDetail from './PriceListDetail.model';
import { PriceListAttributes } from './types/DbType';

@Table({
  tableName: 'price_lists',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
  ],
})

export default class PriceList extends Model<PriceList, PriceListAttributes> {
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
  description!: string;

  @HasMany(() => PriceListDetail )
  priceListDetails!: PriceListDetail[];
}
