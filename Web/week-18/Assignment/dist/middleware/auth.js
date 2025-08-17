"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET_Key = process.env.JWT_SECRET;
if (!JWT_SECRET_Key) {
    throw new Error("JWT_SECRET is not defined");
}
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) {
        return res.status(401).json({ error: 'Authorization token not provided.' });
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET_Key, (err, user) => {
        if (err) {
            return res.status(403).json({
                error: "Invalid or expired token"
            });
        }
        req.user = user;
        next();
    });
};
exports.authenticateToken = authenticateToken;
