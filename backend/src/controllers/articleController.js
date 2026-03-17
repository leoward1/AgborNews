import Article from '../models/articleModel.js';
import Category from '../models/categoryModel.js';
import mongoose from 'mongoose';

// @desc    Get all articles
// @route   GET /api/articles
// @access  Public
const getArticles = async (req, res) => {
  try {
    const { category, section } = req.query;

    // Check if DB is connected
    if (mongoose.connection.readyState !== 1) {
      console.warn('DB not connected. Returning mock data.');
      const mockArticles = [
        {
          _id: 'mock1',
          title: 'Citizen of the Month: Sarah Okon',
          slug: 'citizen-sarah-okon',
          content: '<p>Sarah Okon has been honored for her outstanding community service in Agbor. She has spearheaded multiple youth programs and sanitation drives that have transformed the local environment.</p>',
          section: 'Citizen of the Month',
          coverImage: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1000',
          createdAt: new Date().toISOString(),
          isLive: true,
          liveLink: 'https://www.youtube.com/watch?v=jfKfPfyJRdk',
          author: { name: 'Editorial Desk' }
        },
        {
          _id: 'mock2',
          title: 'Hope for Today: Finding Strength in Community',
          slug: 'hope-finding-strength',
          content: '<p>In these challenging times, we look to the strength of our neighbors. Community solidarity is the light that guides us through the darkness. Let us continue to support one another.</p>',
          section: 'Hope for Today',
          coverImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000',
          createdAt: new Date().toISOString(),
          author: { name: 'News Desk' }
        },
        {
          _id: 'mock3',
          title: 'Local Infrastructure Projects Announced',
          slug: 'infrastructure-projects',
          content: '<p>The local government has announced a series of new infrastructure projects aimed at improving road connectivity and drainage in the metropolis.</p>',
          section: 'General',
          coverImage: 'https://images.unsplash.com/photo-1590066877791-47906554e281?q=80&w=1000',
          createdAt: new Date().toISOString(),
          author: { name: 'Gov Desk' }
        }
      ];

      let filtered = mockArticles;
      if (section && section !== 'All') {
        filtered = filtered.filter(a => a.section === section);
      }
      return res.json(filtered);
    }

    const query = { isPublished: true };

    if (section && section !== 'All') {
      query.section = section;
    }

    if (category) {
      const categoryDoc = await Category.findOne({ slug: category });
      if (categoryDoc) {
        query.category = categoryDoc._id;
      }
    }

    const articles = await Article.find(query)
      .populate('category', 'name slug')
      .populate('author', 'name')
      .sort({ createdAt: -1 });
      
    res.json(articles);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
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
  const { title, slug, content, category, coverImage, isPublished, isLive, liveLink, section, tags } = req.body;

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
    isLive,
    liveLink,
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
