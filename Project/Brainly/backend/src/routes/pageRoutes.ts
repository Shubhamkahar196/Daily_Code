
import { Router } from 'express';
import { signup, login } from '../controllers/authController';
import { newContent, content, deleteContent, shareContent } from '../controllers/crudController';
import { authMiddleware } from '../middleware/authMiddleware';

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addcontent", authMiddleware, newContent);
router.get("/content", authMiddleware, content);
router.delete("/delete/:contentId", authMiddleware, deleteContent);
router.get("/share/:userId", authMiddleware, shareContent);

export default router;
