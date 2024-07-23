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
exports.signIn = exports.register = void 0;
const auth_service_1 = __importDefault(require("../services/auth.service"));
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { role_id, name, email, password } = req.body;
    try {
        const newUser = yield auth_service_1.default.register(role_id, name, email, password);
        res.status(201).json(newUser);
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.register = register;
const signIn = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    try {
        const token = yield auth_service_1.default.authenticate(email, password);
        res.status(200).json({ token: token });
    }
    catch (error) {
        res.status(400).json({ error: error });
    }
});
exports.signIn = signIn;
