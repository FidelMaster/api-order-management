import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import User from './User.model'; // Importa el modelo User si es necesario

@Table({
  tableName: 'drivers',
  timestamps: false, // Si no necesitas campos de timestamp
  indexes: [
    { name: 'PRIMARY', unique: true, fields: ['id'] },
    { name: 'dni', unique: true, fields: ['dni'] },
    { name: 'created_by', fields: ['created_by'] },
  ],
})
export default class Driver extends Model<Driver> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  })
  id!: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: 'dni', // Define el índice único para el campo dni
  })
  dni!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  phone!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  email!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_active!: boolean;

  @ForeignKey(() => User)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  created_by!: number;

  @BelongsTo(() => User)
  createdBy!: User;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
  })
  created_date!: Date;
}
