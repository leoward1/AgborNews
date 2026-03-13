import Article from '../models/articleModel.js';
import Category from '../models/categoryModel.js';

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = async (req, res) => {
  const articles = await Article.find({ isPublished: true }).populate('category', 'name slug').populate('author', 'name');
  res.json(articles);
};

// @desc    Get single article by slug
// @route   GET /api/articles/:slug
// @access  Public
const getArticleBySlug = async (req, res) => {
  const article = await Article.findOne({ slug: req.params.slug }).populate('category', 'name slug').populate('author', 'name');

  if (article) {
    res.json(article);
  } else {
    res.status(404).json({ message: 'Article not found' });
  }
};

// @desc    Create an article
// @route   POST /api/articles
// @access  Private/Admin
const createArticle = async (req, res) => {
  const { title, slug, content, category, coverImage, isPublished, section, tags } = req.body;

  const articleExists = await Article.findOne({ slug });

  if (articleExists) {
    return res.status(400).json({ message: 'Article with this slug already exists' });
  }

  const categoryExists = await Category.findById(category);

  if (!categoryExists) {
    return res.status(400).json({ message: 'Invalid category' });
  }

  const article = await Article.create({
    title,
    slug,
    content,
    author: req.user._id,
    category,
    coverImage,
    isPublished,
    section,
    tags,
  });

  if (article) {
    res.status(201).json(article);
  } else {
    res.status(400).json({ message: 'Invalid article data' });
  }
};

export { getArticles, getArticleBySlug, createArticle };
