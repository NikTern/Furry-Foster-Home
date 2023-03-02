const { Pets } = require('../models');

const petData = [
    {
        breed_id: 1,
        category_id: 1,
        pet_name: "Duke",
        Size:"Large",
        Sex:"Male",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:300,
        Picture:'',
        Location: "Newcastle, NSW",
        isAdopted: true,
        // Adopted_by: "",

    },
    {
        breed_id: 2,
        category_id: 1,
        pet_name: "Molly",
        Size:"Smale",
        Sex:"Femalele",
        Age:"4",
        Description:" Insert some text about the dog",
        Cost:400,
        Picture:'',
        Location: "Sydney, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },

    {
        breed_id: 1,
        category_id: 2,
        pet_name: "Blinky",
        Size:"Smale",
        Sex:"Femalele",
        Age:"2",
        Description:" Insert some text about the cat",
        Cost:200,
        Picture:'',
        Location: "Newtown, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
   
];

const seedPets = () => Pets.bulkCreate(petData);

module.exports = seedPets;