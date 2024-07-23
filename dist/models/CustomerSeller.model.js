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
exports.CustomerSeller = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Seller_model_1 = __importDefault(require("./Seller.model")); // Importa el modelo Seller si es necesario
const Customer_model_1 = __importDefault(require("./Customer.model")); // Importa el modelo Customer si es necesario
let CustomerSeller = class CustomerSeller extends sequelize_typescript_1.Model {
};
exports.CustomerSeller = CustomerSeller;
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CustomerSeller.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Seller_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CustomerSeller.prototype, "seller_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Customer_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        allowNull: false,
    }),
    __metadata("design:type", Number)
], CustomerSeller.prototype, "customer_id", void 0);
exports.CustomerSeller = CustomerSeller = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'customer_seller',
        timestamps: false, // Si no necesitas campos de timestamp
        indexes: [
            { name: 'PRIMARY', unique: true, fields: ['id'] },
            { name: 'seller_id', fields: ['seller_id'] },
            { name: 'customer_id', fields: ['customer_id'] },
        ],
    })
], CustomerSeller);
exports.default = CustomerSeller;
