const Breed = require('./Breed');
const Category = require('./Category');
const UserProfile = require('./UserProfile');
const Pets = require('./Pets');

// Category.hasMany(Breed, {
//     foreignKey: 'category_id',
//     onDelete: 'CASCADE',
//   });
 
//   Category.hasMany(Pets, {
//     foreignKey: 'category_id',
//     onDelete: 'CASCADE',
//   });

//   Breed.hasMany(Pets, {
//     foreignKey: 'breed_id',
//     onDelete: 'CASCADE',
//   });

//   Breed.belongsTo(Category, {
//     foreignKey: 'breed_id',
//     onDelete: 'CASCADE',
//   });


  Category.hasMany(Pets, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  });

  Pets.belongsTo(Category, {
    foreignKey: "category_id",
  });

  Breed.hasMany(Pets, {
    foreignKey: "breed_id",
    onDelete: "CASCADE",
  });

  Pets.belongsTo(Breed, {
    foreignKey: "breed_id",
  });

  Category.hasMany(Breed, {
    foreignKey: "category_id",
    onDelete: "CASCADE",
  });

  Breed.belongsTo(Category, {
    foreignKey: "category_id",
  });

  UserProfile.hasMany(Pets, {
    foreignKey: "Adopted_by",
    onDelete: "CASCADE",
  });

  Pets.belongsTo(UserProfile, {
    foreignKey: "Adopted_by",
  });





module.exports = { Category, Breed, Pets, UserProfile };
