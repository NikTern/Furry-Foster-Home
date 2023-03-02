const Breed = require('./Breed');
const Category = require('./Category');
const UserProfile = require('./UserProfile');
const Pets = require('./Pets');

Category.hasMany(Breed, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });
 
  // Category.hasMany(Pets, {
  //   foreignKey: 'category_id',
  //   onDelete: 'CASCADE',
  // });

  // Breed.hasMany(Pets, {
  //   foreignKey: 'breed_id',
  //   onDelete: 'CASCADE',
  // });

  // Breed.belongsTo(Category, {
  //   foreignKey: 'breed_id',
  //   onDelete: 'CASCADE',
  // });



module.exports = { Category, Breed, Pets, UserProfile };
