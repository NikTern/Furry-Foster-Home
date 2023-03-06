const { Pets } = require('../models');

const petData = [
    {
        breed_id: 1,
        category_id: 1,
        pet_name: "Duke",
        Size:"Large",
        Sex:"Male",
        Age:"2",
        Description:" My name is Duke - I am a big, affectionate goofball who loves to work my brain doing loads of enrichment puzzles (especially if there is food involved!).Good for families and will n need a Backyard to run around in but loves to sleep inside",
        Cost:300,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/golden.jfif',
        Location: "Newcastle, NSW",
        isAdopted: true,
        // Adopted_by: "",

    },
    {
        breed_id: 2,
        category_id: 1,
        pet_name: "Molly",
        Size:"Small",
        Sex:"Female",
        Age:"4",
        Description:"Molly is looking for a new family! Sweet, affectionate and loves to snuggle up. She is an indoor dog and would need someone who will be home during the day.",
        Cost:400,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/bulldog.jfif',
        Location: "Sydney, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },

    {
        breed_id: 5,
        category_id: 2,
        pet_name: "Blinky",
        Size:"Small",
        Sex:"Female",
        Age:"2",
        Description:" Insert some text about the cat",
        Cost:200,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/siemese.jpg',
        Location: "Newtown, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 12,
        category_id: 1,
        pet_name: "Buffy",
        Size:"Small",
        Sex:"Female",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:350,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/malltese.jpeg',
        Location: "Camden, NSW",
        isAdopted: true,
        // Adopted_by: "",

    },
    {
        breed_id: 4,
        category_id: 1,
        pet_name: "Tessa",
        Size:"Medium",
        Sex:"Female",
        Age:"5",
        Description:" Insert some text about the dog",
        Cost:300,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/english%20staffy.jpg',
        Location: "Hornsby, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 15,
        category_id: 2,
        pet_name: "Casper",
        Size:"Small",
        Sex:"Male",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:100,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/cat1.jfif',
        Location: "Newcastle, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 13,
        category_id: 1,
        pet_name: "Rusty",
        Size:"Large",
        Sex:"Male",
        Age:"1",
        Description:" Insert some text about the dog",
        Cost:300,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/German-shepherd-puppy-floppy-ears-scaled.jpeg',
        Location: "Bankstown, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 1,
        category_id: 1,
        pet_name: "Frankie",
        Size:"Large",
        Sex:"Male",
        Age:"1",
        Description:" Insert some text about the dog",
        Cost:400,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/demodog.png',
        Location: "Sydney, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 15,
        category_id: 2,
        pet_name: "Luna",
        Size:"Small",
        Sex:"Female",
        Age:"5",
        Description:" Insert some text about the dog",
        Cost:150,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/cat2.jfif',
        Location: "Castle Hill, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 3,
        category_id: 1,
        pet_name: "Max",
        Size:"Large",
        Sex:"Male",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:400,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/bordercollie-1.jpeg',
        Location: "Sydney, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 1,
        category_id: 1,
        pet_name: "Milo",
        Size:"Large",
        Sex:"Male",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:350,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/pug.jpg',
        Location: "Gosford, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 14,
        category_id: 1,
        pet_name: "Millie",
        Size:"Small",
        Sex:"Female",
        Age:"2",
        Description:" Insert some text about the dog",
        Cost:500,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/cavoodle.jfif',
        Location: "Redfern, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 8,
        category_id: 3,
        pet_name: "Jilly",
        Size:"Small",
        Sex:"Female",
        Age:"1",
        Description:" Insert some text about the bird",
        Cost:100,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/canary.jfif',
        Location: "Sydney, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 10,
        category_id: 3,
        pet_name: "Buddy",
        Size:"Small",
        Sex:"Male",
        Age:"2",
        Description:" Insert some text about the bird",
        Cost:50,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/Rainbow_Lorikeet_(227178595).jpeg',
        Location: "Sutherland, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 4,
        category_id: 1,
        pet_name: "Zeus",
        Size:"Small",
        Sex:"Male",
        Age:"1",
        Description:" Insert some text about the dog",
        Cost:200,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/staffy%20puppy.jfif',
        Location: "Maitland, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
    {
        breed_id: 16,
        category_id: 1,    
        pet_name: "Lucy",
        Size:"Large",
        Sex:"Female",
        Age:"4",
        Description:" Insert some text about the dog",
        Cost:300,
        Picture:'https://bootcampsmullock.blob.core.windows.net/pets/greyhound.jfif',
        Location: "Westmead, NSW",
        isAdopted: false,
        // Adopted_by: "",

    },
   
];

const seedPets = () => Pets.bulkCreate(petData);

module.exports = seedPets;