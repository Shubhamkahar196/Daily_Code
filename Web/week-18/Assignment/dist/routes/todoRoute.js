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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const client_1 = require("@prisma/client");
const auth_1 = require("../middleware/auth");
const todoValidation_1 = require("../validation/todoValidation");
const router = (0, express_1.Router)();
const Client = new client_1.PrismaClient();
// all routes in this router will use authentication middleware
router.use(auth_1.authenticateToken);
// create todo
router.post("/createTodo", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { title, content } = todoValidation_1.createTodoSchema.parse(req.body);
        const userId = req.user.userId;
        const todo = yield Client.todo.create({
            data: {
                title,
                content,
                userId,
            }
        });
        res.status(201).json({
            todo
        });
    }
    catch (error) {
        res.status(400).json({
            error: 'Invalid input data'
        });
    }
}));
// fetch todos for the authenticated user
router.get("/getAll", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.user.userId;
        const todos = yield Client.todo.findMany({
            where: { userId },
            orderBy: { createdAt: 'desc' }
        });
        res.json(todos);
    }
    catch (error) {
        res.status(500).json({
            error: "Failed to fetch todos"
        });
    }
}));
exports.default = router;
