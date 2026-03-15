import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Article from './src/models/articleModel.js';
import Category from './src/models/categoryModel.js';
import User from './src/models/userModel.js';

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/AgborNews');
    console.log('Connected to MongoDB for seeding...');

    // Clear existing data
    await Article.deleteMany();
    await Category.deleteMany();
    // Keep users if any, or create one
    let adminUser = await User.findOne({ isAdmin: true });
    if (!adminUser) {
      adminUser = await User.create({
        name: 'Admin User',
        email: 'admin@agbornews.com',
        password: 'password123',
        isAdmin: true,
      });
    }

    const categories = [
      { name: 'General', slug: 'general' },
      { name: 'Citizen of the Month', slug: 'citizen-of-the-month' },
      { name: 'Hope for Today', slug: 'hope-for-today' },
      { name: 'Career Corner', slug: 'career-corner' },
      { name: 'Agbor in Pictures', slug: 'agbor-in-pictures' },
    ];

    const createdCategories = await Category.insertMany(categories);

    const articles = [
      {
        title: 'Community Center Project Breaks Ground',
        slug: 'community-center-project-breaks-ground',
        content: 'City council members gathered today to overview the upcoming expansions to the local transit grid which is expected to reduce commute times by up to 30%.',
        author: adminUser._id,
        category: createdCategories[0]._id,
        section: 'General',
        coverImage: '/images/general.png',
        isPublished: true,
      },
      {
        title: 'Citizen of the Month: John Doe',
        slug: 'citizen-of-the-month-john-doe',
        content: 'Honoring John Doe for his incredible contributions to the community library and youth mentorship programs.',
        author: adminUser._id,
        category: createdCategories[1]._id,
        section: 'Citizen of the Month',
        coverImage: '/images/citizen.png',
        isPublished: true,
      },
      {
        title: 'A Message of Hope for the Community',
        slug: 'a-message-of-hope-for-the-community',
        content: 'Finding strength in unity during challenging times. Our city remains strong and hopeful.',
        author: adminUser._id,
        category: createdCategories[2]._id,
        section: 'Hope for Today',
        coverImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?q=80&w=1000&auto=format&fit=crop',
        isPublished: true,
      },
      {
        title: 'New Job Openings at the Tech Hub',
        slug: 'new-job-openings-at-the-tech-hub',
        content: 'Several positions are now open for software developers and project managers at the new downtown tech center.',
        author: adminUser._id,
        category: createdCategories[3]._id,
        section: 'Career Corner',
        coverImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop',
        isPublished: true,
      },
      {
        title: 'Spring Festival Captured in High Resolution',
        slug: 'spring-festival-captured-in-high-resolution',
        content: 'Take a look at the most beautiful moments from this year\'s Agbor Spring Festival.',
        author: adminUser._id,
        category: createdCategories[4]._id,
        section: 'Agbor in Pictures',
        coverImage: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1000&auto=format&fit=crop',
        isPublished: true,
      },
    ];

    await Article.insertMany(articles);
    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedData();
