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
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_repository_1 = __importDefault(require("../../../../repositories/user.repository"));
class AuthService {
    register(role_id, name, email, clear_password) {
        return __awaiter(this, void 0, void 0, function* () {
            const hashedPassword = yield bcrypt_1.default.hash(clear_password, 10); // Hash de la contraseña
            let newUser = {
                role_id: role_id,
                name: name,
                email: email,
                password_digest: hashedPassword,
                is_active: true
            };
            return user_repository_1.default.createUser(newUser);
        });
    }
    authenticate(email, clear_password) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield user_repository_1.default.findByEmail(email);
            if (!user) {
                throw new Error('User not found');
            }
            const isValidPassword = yield bcrypt_1.default.compare(clear_password, user.password_digest);
            if (!isValidPassword) {
                throw new Error('Invalid password');
            }
            const token = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' }); // Generar token JWT
            return token;
        });
    }
}
exports.default = new AuthService();
