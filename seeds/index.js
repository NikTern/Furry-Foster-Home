const seedCategories = require('./category-seeds');
const seedBreeds = require('./breed-seeds');
const seedPets = require('./pet-seeds');
const seedUserProfile = require('./userProfile-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedBreeds();
  console.log('\n----- BREEDS SEEDED -----\n');

  await seedPets();
  console.log('\n----- PETS SEEDED -----\n');

  await seedUserProfile();
  console.log('\n----- USER PROFILES SEEDED -----\n');

  process.exit(0);
};

seedAll();
