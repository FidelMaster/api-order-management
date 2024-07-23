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
const PriceList_model_1 = __importDefault(require("./PriceList.model")); // Importa el modelo PriceList
const Article_model_1 = __importDefault(require("./Article.model")); // Importa el modelo Article
let PriceListDetail = class PriceListDetail extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PriceListDetail.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => PriceList_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PriceListDetail.prototype, "price_list_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Article_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PriceListDetail.prototype, "article_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Article_model_1.default, 'article_id'),
    __metadata("design:type", Article_model_1.default)
], PriceListDetail.prototype, "article", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => PriceList_model_1.default, 'price_list_id'),
    __metadata("design:type", PriceList_model_1.default)
], PriceListDetail.prototype, "priceList", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], PriceListDetail.prototype, "price", void 0);
PriceListDetail = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'price_list_detail',
        timestamps: true,
        indexes: [
            { name: 'PRIMARY', unique: true, using: 'BTREE', fields: ['id'] },
            { name: 'price_list_id', using: 'BTREE', fields: ['price_list_id'] },
            { name: 'article_id', using: 'BTREE', fields: ['article_id'] },
        ],
    })
], PriceListDetail);
exports.default = PriceListDetail;
