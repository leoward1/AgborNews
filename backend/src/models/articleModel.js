import mongoose from 'mongoose';

const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  coverImage: {
    type: String, // URL to the image
  },
  isPublished: {
    type: Boolean,
    default: false,
  },
  section: {
    type: String,
    enum: ['General', 'Citizen of the Month', 'Hope for Today', 'Career Corner', 'Agbor in Pictures'],
    default: 'General',
  },
  tags: [String],
}, {
  timestamps: true,
});

const Article = mongoose.model('Article', articleSchema);
export default Article;
