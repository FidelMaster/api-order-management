import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement } from 'sequelize-typescript';

@Table({
  tableName: 'suppliers',
  timestamps: true,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
  ],
})
export default class Supplier extends Model<Supplier> {
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
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_dni!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_phone!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  contact_email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  address!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  phone!: string;
}
