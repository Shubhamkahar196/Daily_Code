
import { Router } from 'express';
import { signup, login } from '../controllers/authController';
import { newContent, content, deleteContent, shareContent } from '../controllers/crudController';
import { userMiddleware  } from '../middleware/authMiddleware';

const router = Router();

router.post("/signup", signup);
router.post("/login", login);
router.post("/addcontent", userMiddleware , newContent);
router.get("/content", userMiddleware , content);
router.delete("/delete/:contentId", userMiddleware , deleteContent);
router.get("/share/:userId", userMiddleware , shareContent);

export default router;
