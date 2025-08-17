import {Router} from 'express'
import { PrismaClient } from '@prisma/client';
import { authenticateToken } from '../middleware/auth'
import { createTodoSchema, updateTodoSchema } from '../validation/todoValidation'

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

// updating todo

router.put("/:id",async(req,res)=>{
    try{
        const {title, content, completed} = updateTodoSchema.parse(req.body);
        const todoId = parseInt(req.params.id);
        const userId = req.user.userId;

        // ensure the todo belongs to the user
        const existingTodo = await Client.todo.findUnique({
            where: {id: todoId}
        })

        if(!existingTodo || existingTodo.userId !==userId){
            return res.status(400).json({
                error: "Todo not found or you don't have permission"
            })
        }

        // validation the incoming data
        const updateData = { title, content, completed};
        const parsedUpdataData = updateTodoSchema.parse(updateData);

        const updatedTodo = await Client.todo.update({
            where: { id: todoId},
            data: parsedUpdataData
        })

        res.json(updateData)
    }catch(error){
       console.error(error);
            res.status(500).json({ error: "Failed to update todo" });
    }

})
// deleting todo
router.delete("/:id", async (req, res) => {
    try {
        const todoId = parseInt(req.params.id);
        const userId = req.user.userId;

        // Ensure the todo belongs to the user
        const existingTodo = await Client.todo.findUnique({
            where: { id: todoId }
        });

        if (!existingTodo || existingTodo.userId !== userId) {
            return res.status(404).json({ error: "Todo not found or you don't have permission" });
        }

        await Client.todo.delete({
            where: { id: todoId }
        });

          res.status(200).json({ message: "Todo deleted successfully." });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Failed to delete todo" });
    }
});


export default router;