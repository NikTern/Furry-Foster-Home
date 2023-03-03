const { Breed } = require('../models');

const breedData = [
    {
        breed_name: "Golden Retriever",
        category_id: 1,
    },
    {
        breed_name: "Bulldog",
        category_id: 1,
    },
    {
        breed_name: "Border Collie",
        category_id: 1,
    },
    {
        breed_name: "Staffordshire Bull Terrier",
        category_id: 1,
    },
    {
        breed_name: "Siamese",
        category_id: 2,
    },
    {
        breed_name: "Ragdoll",
        category_id: 2,
    },
    {
        breed_name: "Budgie",
        category_id: 3,
    },
    {
        breed_name: "Canary",
        category_id: 3,
    },
];

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;