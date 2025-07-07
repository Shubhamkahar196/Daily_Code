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
const express_1 = __importDefault(require("express"));
const zod_1 = require("zod");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const db_1 = require("./db");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/api/v1/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Input validation using Zod
    const requiredBody = zod_1.z.object({
        username: zod_1.z.string().min(2, "Username is required"),
        password: zod_1.z.string().min(3).max(13, "Password should be between 3 and 13 characters"),
    });
    // Safe parse (doesn't throw error if validation fails)
    const parseDataSuccess = requiredBody.safeParse(req.body);
    // If data is not correct
    if (!parseDataSuccess.success) {
        return res.status(411).json({
            message: "Wrong credentials",
            error: parseDataSuccess.error,
        });
    }
    // Extract validated username and password
    const { username, password } = req.body;
    try {
        // Hash the password before storing it in the database
        const hashedPassword = yield bcryptjs_1.default.hash(password, 10);
        // Create a new user in the database
        yield db_1.UserModel.create({
            username,
            password: hashedPassword,
        });
        return res.status(201).json({
            message: "User created successfully",
        });
    }
    catch (e) {
        console.error(e);
        return res.status(500).json({
            message: "Internal Server Error",
        });
    }
}));
app.post("api/v1/signin");
app.post("api/v1/content", (req, res) => {
});
app.get("api/v1/content", (req, res) => {
});
app.delete("api/v1/content", (req, res) => {
});
app.post("api/v1/brain/share", (req, res) => {
});
app.get("api/v1/brain/:shareLink", (req, res) => {
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
