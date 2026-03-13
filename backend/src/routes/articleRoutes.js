import express from 'express';
import { getArticles, getArticleBySlug, createArticle } from '../controllers/articleController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getArticles)
  .post(protect, admin, createArticle);
  
router.route('/:slug')
  .get(getArticleBySlug);

export default router;
