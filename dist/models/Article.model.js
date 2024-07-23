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
const PriceListDetail_model_1 = __importDefault(require("./PriceListDetail.model"));
const WarehouseArticle_model_1 = __importDefault(require("./WarehouseArticle.model"));
const OrderDetail_model_1 = __importDefault(require("./OrderDetail.model"));
const Supplier_model_1 = __importDefault(require("./Supplier.model"));
const Tax_model_1 = __importDefault(require("./Tax.model"));
let Article = class Article extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.AutoIncrement,
    sequelize_typescript_1.PrimaryKey,
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Article.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Supplier_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Article.prototype, "supplier_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Tax_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], Article.prototype, "tax_id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Article.prototype, "code", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING(255),
        allowNull: false,
    }),
    __metadata("design:type", String)
], Article.prototype, "description", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => WarehouseArticle_model_1.default),
    __metadata("design:type", Array)
], Article.prototype, "warehouseArticles", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => PriceListDetail_model_1.default),
    __metadata("design:type", Array)
], Article.prototype, "priceListDetails", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => OrderDetail_model_1.default),
    __metadata("design:type", Array)
], Article.prototype, "orderDetails", void 0);
Article = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'articles',
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
                name: 'tax_id',
                using: 'BTREE',
                fields: ['tax_id'],
            },
        ],
    })
], Article);
exports.default = Article;
