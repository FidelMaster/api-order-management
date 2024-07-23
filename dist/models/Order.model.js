"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const Customer_model_1 = __importDefault(require("./Customer.model"));
const CustomerAddress_model_1 = __importDefault(require("./CustomerAddress.model"));
const User_model_1 = __importDefault(require("./User.model"));
const Seller_model_1 = __importDefault(require("./Seller.model"));
let Order = class Order extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Customer_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "customer_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => CustomerAddress_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "customer_address_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Seller_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "seller_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => User_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "user_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "customer_name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: true,
    }),
    __metadata("design:type", String)
], Order.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Order.prototype, "exchange_rate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "seller_commision_amount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total_item", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total_tax", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total_discount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "sub_total", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], Order.prototype, "total_order", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Order.prototype, "state", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE,
        allowNull: true,
    }),
    __metadata("design:type", Date)
], Order.prototype, "estimated_delivery_date", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Customer_model_1.default, 'customer_id'),
    __metadata("design:type", Customer_model_1.default)
], Order.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => CustomerAddress_model_1.default, 'customer_address_id'),
    __metadata("design:type", CustomerAddress_model_1.default)
], Order.prototype, "customer_address", void 0);
Order = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'orders',
        timestamps: true,
        indexes: [
            {
                name: 'PRIMARY',
                unique: true,
                using: 'BTREE',
                fields: ['id'],
            },
            {
                name: 'customer_id',
                using: 'BTREE',
                fields: ['customer_id'],
            },
            {
                name: 'customer_address_id',
                using: 'BTREE',
                fields: ['customer_address_id'],
            },
            {
                name: 'seller_id',
                using: 'BTREE',
                fields: ['seller_id'],
            },
            {
                name: 'user_id',
                using: 'BTREE',
                fields: ['user_id'],
            },
        ],
    })
], Order);
exports.default = Order;
