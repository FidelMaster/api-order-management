import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'system_parameters',
  timestamps: false, // No necesitas timestamps para este modelo
  indexes: [
    { name: 'PRIMARY', unique: true, fields: ['id'] },
  ],
})

export  default class SystemParameter extends Model<SystemParameter> {
  @Column({
    type: 'INTEGER',
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true, // Si el campo code debe ser único
  })
  code!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  description!: string;

  @Column({
    type:  DataType.STRING(255),
    allowNull: false,
  })
  value!: string;
}

