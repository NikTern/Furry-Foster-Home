const { Category } = require('../models');

const categoryData = [
    {
        category_name: "Dog"
    },
    {
        category_name: "Cat"
    },
    {
        category_name: "Bird"
    }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;