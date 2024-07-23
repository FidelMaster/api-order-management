import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'vehicles',
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

export default class Vehicle extends Model<Vehicle> {
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
  identification!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  brand!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  model!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: true,
  })
  description?: string;
}
