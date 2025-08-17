
import  express  from "express";
import userRoute from './routes/userRoute'
import TodoRoute from './routes/todoRoute'
import dotenv from 'dotenv'

dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//Routes
app.use('/api/v1/user',userRoute);
app.use('/api/v1/todos',TodoRoute);

app.listen(PORT,()=>{
  console.log(`Server is running on http://localhost:${PORT}`);
})



