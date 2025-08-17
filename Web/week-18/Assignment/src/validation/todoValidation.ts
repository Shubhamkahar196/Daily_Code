import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string().min(1, {message: "Title cannot be empty"}),
    content: z.string().optional(),
});

export const updateSchema = z.object({
    completed: z.boolean().optional(),
})