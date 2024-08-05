import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, HasMany } from 'sequelize-typescript';
import Article from './Article.model';

@Table({
  tableName: 'taxes',
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

export default class Tax extends Model<Tax> {
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

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  percentage!: number;

  @HasMany(() => Article)
  Articles!: Article[];
}
