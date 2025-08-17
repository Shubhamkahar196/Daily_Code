import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string().min(1, {message: "Title cannot be empty"}),
});

export const updateSchema = z.object({
    completed: z.boolean().optional(),
})