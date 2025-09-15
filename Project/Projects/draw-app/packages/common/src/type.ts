import {z} from 'zod';


export const CreateUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  name: z.string()
});

export const signinSchema = z.object({
  email: z.string().email(),
  password: z.string().min(3)
});

export const CreateRoomSchema = z.object({
  name: z.string().min(3).max(15)
});
