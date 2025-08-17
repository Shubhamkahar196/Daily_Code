"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSchema = exports.createTodoSchema = void 0;
const zod_1 = require("zod");
exports.createTodoSchema = zod_1.z.object({
    title: zod_1.z.string().min(1, { message: "Title cannot be empty" }),
    content: zod_1.z.string().optional(),
});
exports.updateSchema = zod_1.z.object({
    completed: zod_1.z.boolean().optional(),
});
