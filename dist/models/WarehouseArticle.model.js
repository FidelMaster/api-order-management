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
const Warehouse_model_1 = __importDefault(require("./Warehouse.model")); // Importa el modelo Warehouse si es necesario
const Article_model_1 = __importDefault(require("./Article.model")); // Importa el modelo Article si es necesario
let WarehouseArticle = class WarehouseArticle extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
    }),
    __metadata("design:type", Number)
], WarehouseArticle.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Warehouse_model_1.default),
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        allowNull: false,
    }),
    __metadata("design:type", Number)
], WarehouseArticle.prototype, "warehouse_id", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Article_model_1.default)
    // @BelongsTo(() => Article)
    ,
    (0, sequelize_typescript_1.Column)({
        type: 'INTEGER',
        allowNull: false,
    }),
    __metadata("design:type", Number)
], WarehouseArticle.prototype, "article_id", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Article_model_1.default, 'article_id'),
    __metadata("design:type", Article_model_1.default)
], WarehouseArticle.prototype, "article", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Warehouse_model_1.default, 'warehouse_id'),
    __metadata("design:type", Warehouse_model_1.default)
], WarehouseArticle.prototype, "warehouse", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], WarehouseArticle.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.FLOAT,
        allowNull: false,
        defaultValue: 0,
    }),
    __metadata("design:type", Number)
], WarehouseArticle.prototype, "reserved_quantity", void 0);
WarehouseArticle = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'warehouse_article',
        timestamps: true, // Puedes ajustar según necesidades
        indexes: [
            { name: 'PRIMARY', unique: true, fields: ['id'] },
            { name: 'warehouse_id', using: 'BTREE', fields: ['warehouse_id'] },
            { name: 'article_id', using: 'BTREE', fields: ['article_id'] },
        ],
    })
], WarehouseArticle);
exports.default = WarehouseArticle;
