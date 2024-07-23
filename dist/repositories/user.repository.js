"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_model_1 = __importDefault(require("../models/User.model"));
class UserRepository {
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_model_1.default.findByPk(id);
        });
    }
    findByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_model_1.default.findOne({ where: { email } });
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            return User_model_1.default.create({
                role_id: user.role_id,
                name: user.name,
                email: user.email,
                password_digest: user.password_digest,
                is_active: user.is_active
            });
        });
    }
}
exports.default = new UserRepository();
