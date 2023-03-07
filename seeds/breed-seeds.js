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
    {
        breed_name: "Indian Ringneck",
        category_id: 3,
    },
    {
        breed_name: "Lorikeet",
        category_id: 3,
    },
    {
        breed_name: "Pug",
        category_id: 1,
    },
    {
        breed_name: "Maltese Terrier",
        category_id: 1,
    },
    {
        breed_name: "German Shephard",
        category_id: 1,
    },
    {
        breed_name: "Cavoodle",
        category_id: 1,
    },

    {
        breed_name: "Domestic Short Hair",
        category_id: 2,
    },
    {
        breed_name: "Greyhound",
        category_id: 1,
    },

];

const seedBreeds = () => Breed.bulkCreate(breedData);

module.exports = seedBreeds;