const express = require("express");

const app = express();
app.use(express.json());

// todo app that lets users store todos on the server
let todos = [];

let idCounter = 1;

app.post("/create",(req,res)=>{
    const {title,description} = req.body;

    if(!title || !description) {
        return res.status(400).json({error: "Title and description are required"});
    }

    const newTodo = {
        id: idCounter++,
        title,
        description
    }
    todos.push(newTodo)
    res.json({
        message: "Todo created successfully"
    })
})



app.get("/",(req,res)=>{
    res.json({todos});
})

// get single todo

app.get("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const todo = todos.find(t=>t.id ===id);

    if(!todo){
        return res.json({
            error: "Todo not found"
        })
    }
})

app.put("/update/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const {title,description} = req.body;
    const todoIndex = todos.findIndex(t=> t.id === id);
    if(todoIndex === -1){
        return res.status(401).json({
            error: "Todo not found"
        })
    }

    if(title) todos[todoIndex].title = title;
    if(description) todos[todoIndex].description = description;

    res.json({
        message: "Todo updated successfully",
        todo : todos[todoIndex]
    })
})


app.delete("/:id",(req,res)=>{
    const id = parseInt(req.params.id);
    const todoIndex = todos.findIndex(t => t.id === id);
    if(todoIndex===-1){
        return res.status(401).json({
            error: "Todo not found"
        })
    }

    todos = todos.filter(t=> t.id !==id);
    res.json({
        message: "Todo deleted successfully"
    })
})

/
app.listen(8000, () => {
    console.log("Server is running on Port 8000");
});