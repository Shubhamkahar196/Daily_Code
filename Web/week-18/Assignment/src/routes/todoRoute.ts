import {Router} from 'express'
import { PrismaClient } from '../generated/prisma';
import { authenticateToken } from '../middleware/auth'
import { createTodoSchema } from '../validation/todoValidation'

const router = Router();
const Client = new PrismaClient();

// all routes in this router will use authentication middleware
router.use(authenticateToken);

// create todo
router.post("/createTodo",async(req,res)=>{
    try{
        const { title, content} = createTodoSchema.parse(req.body);
        const userId = req.user.userId;

        const todo = await Client.todo.create({
            data:{
              title,
              content,
              userId,
            }
        })

        res.status(201).json({
            todo
        })
    }catch(error){
      res.status(400).json({
        error: 'Invalid input data'
      })
    }
})


// fetch todos for the authenticated user

router.get("/getAll",async(req,res)=>{
    try{
        const userId = req.user.userId;

        const todos = await Client.todo.findMany({
            where: {userId},
            orderBy: {createdAt: 'desc'}
        })

        res.json(todos);
    }catch(error){
        res.status(500).json({
            error: "Failed to fetch todos"
        })
    }
})

export default router;