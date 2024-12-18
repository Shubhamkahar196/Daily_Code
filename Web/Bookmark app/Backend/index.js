import express from 'express';
import cors from 'cors';
import { addBookmark, deleteBookmark, getAllBookmarks} from './routes/bookmark.js';
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// get all bookmarks
app.get('/bookmarks',getAllBookmarks);

//post
app.post('/bookmarks',addBookmark);

//delete a bookmark
app.delete('/bookmarks/:id', deleteBookmark);




app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});