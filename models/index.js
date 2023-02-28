const Breed = require('./Breed');
const Category = require('./Category');
const UserProfile = require('./UserProfile');
const Pets = require('./Pets');

Category.hasMany(Breed, {
    foreignKey: 'category_id',
    onDelete: 'CASCADE',
  });
 


Location.belongsToMany(Traveller, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveller, Location, Trip };
