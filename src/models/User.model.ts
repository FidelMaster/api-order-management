import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { UserAttributes } from './types/DbType';
import Rol from './Rol.model';

@Table({
  tableName: 'users',
  timestamps: false,
  indexes: [
    {
      name: 'PRIMARY',
      unique: true,
      using: 'BTREE',
      fields: ['id'],
    },
    {
      name: 'email',
      unique: true,
      using: 'BTREE',
      fields: ['email'],
    },
    {
      name: 'role_id',
      using: 'BTREE',
      fields: ['role_id'],
    },
  ],
})
export default class User extends Model<User, UserAttributes> {
  @AutoIncrement
  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  id!: number;

  @ForeignKey(() => Rol)
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  role_id!: number;

  @BelongsTo(() => Rol)
  role!: Rol;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  name!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
    unique: true,
  })
  email!: string;

  @Column({
    type: DataType.STRING(255),
    allowNull: false,
  })
  password_digest!: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  })
  is_active!: boolean;
}

 
