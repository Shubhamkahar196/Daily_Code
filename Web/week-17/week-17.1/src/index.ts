// importing postgres
import { Client } from "pg";
import express from "express";
import bcrypt from "bcryptjs";

const app = express();
app.use(express.json());

const connectionString = "your connection string";

const pgClient = new Client({
  connectionString,
});

pgClient.connect((err) => {
  if (err) {
    console.error("Connection error", err.stack);
  } else {
    console.log("connected");
  }
});

app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const response = await pgClient.query(
      "INSERT INTO users (username, email,password) VALUES ($1,$2,$3) RETURNING *",
      [username, email, hashedPassword]
    );

    // res.json(response.rows[0]);
    res.status(200).json({
      message: "Singup successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Error during signup",
    });
  }
});

app.post("signin", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(403).json({
        message: "Email and password is required",
      });
    } else {
      const response = await pgClient.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
      );
      if (response.rows.length === 0) {
        res.status(403).json({
          message: "Invalid email or password",
        });
      } else {
        const user = response.rows[0];
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          res.status(403).json({
            message: "Invalid email or password",
          });
        } else {
          res.status(200).json({
            message: "You are welcome",
          });
        }
      }
    }
  } catch (error) {
    res.status(500).json({
      message: "Error during signin",
    });
  }
});

app.post("/todos", async(req,res)=>{
    try {
    const { title, description } = req.body;
    const userId = req.user.userId;
    const result = await pgClient.query(
      'INSERT INTO todos (title, description, user_id) VALUES ($1, $2, $3) RETURNING *',
      [title, description, userId]
    );
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating todo' });
  }
});


// Get todos
app.get('/todos', async (req, res) => {
  try {
    const userId = req.user.userId;
    const result = await pgClient.query('SELECT * FROM todos WHERE user_id = $1', [
      userId,
    ]);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error getting todos' });
  }
});


// Update user information
app.put("/todos/:id", async (req, res) => {
  const userId = req.params.id; // Get user ID from the URL
  const { username, email } = req.body; // Get new data from the request body

  try {
    const updateQuery = {
      text: "UPDATE users SET username = $1, email = $2 WHERE id = $3 RETURNING *",
      values: [username, email, userId],
    };

    const result = await pgClient.query(updateQuery);
    
    if (result.rows.length > 0) {
      res.status(200).json({
        message: "User updated successfully",
        user: result.rows[0],
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating user" });
  }
});


// Delete user
app.delete("/todos/:id", async (req, res) => {
  const userId = req.params.id; // Get user ID from the URL

  try {
    const deleteQuery = {
      text: "DELETE FROM users WHERE id = $1 RETURNING *",
      values: [userId],
    };

    const result = await pgClient.query(deleteQuery);
    
    if (result.rows.length > 0) {
      res.status(200).json({
        message: "User deleted successfully",
        deletedUser: result.rows[0],
      });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting user" });
  }
});



const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

// async function main(){
//     await pgClient.connect();

//     // fetch all users
//     const response = await pgClient.query("SELECT * from users");
//     console.log(response.rows);

//     // update users

//     const updateQuery = {
//         text: "UPDATE users SET username =$1 WHERE id=$2 RETURNING *",
//         values:["shubham", 2],
//     };

//     const updateResponse = await pgClient.query(updateQuery);
//     console.log(updateResponse.rows);
// }

// main()
