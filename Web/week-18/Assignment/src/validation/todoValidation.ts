import { z } from "zod"

export const createTodoSchema = z.object({
    title: z.string().min(1, {message: "Title cannot be empty"}),
    content: z.string().optional(),
});



export const updateTodoSchema = z.object({
  title: z.string().optional(),
  content: z.string().optional(),
  completed: z.boolean().optional(),
});