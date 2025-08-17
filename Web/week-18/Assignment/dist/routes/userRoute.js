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
const express_1 = require("express");
const prisma_1 = require("../generated/prisma");
const userValidation_1 = require("../validation/userValidation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const router = (0, express_1.Router)();
const Client = new prisma_1.PrismaClient();
const JWT_SECRET_Key = process.env.JWT_SECRET;
if (!JWT_SECRET_Key) {
    throw new Error("JWT_SECRET is not defined");
}
router.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = userValidation_1.signupSchema.parse(req.body);
        const existingUser = yield Client.user.findUnique({ where: { email } });
        if (!existingUser) {
            return res.status(409).json({
                error: "User with this email already exists"
            });
        }
        // hashing password
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        const user = yield Client.user.create({
            data: { email, password: hashedPassword },
        });
        res.status(201).json({
            message: "User created Successfully",
            user: { id: user.id, email: user.email }
        });
    }
    catch (error) {
        res.status(400).json({
            error: "Invalid input data"
        });
    }
}));
// login route
router.post("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { email, password } = userValidation_1.loginSchema.parse(req.body);
        // finding user through email
        const user = yield Client.user.findUnique({ where: { email } });
        // checking user exist or not
        if (!user) {
            return res.status(404).json({
                error: "User not found"
            });
        }
        // if user find then match the password of user
        const isPassword = yield bcryptjs_1.default.compare(password, user.password);
        // if password not matched
        if (!isPassword) {
            return res.status(401).json({
                error: "Invalid credentials"
            });
        }
        // checking token
        const token = jsonwebtoken_1.default.sign({ userId: user.id }, JWT_SECRET_Key, { expiresIn: '1h' });
    }
    catch (error) {
        res.status(400).json({ error: 'Invalid input data.' });
    }
}));
exports.default = router;
