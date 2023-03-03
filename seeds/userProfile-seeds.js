const { UserProfile } = require('../models');

const userProfileData = [
    {
        first_name: "Sam",
        last_name: "Smith",
        gender: "Male",
        address:" 122 Smith Street, Sydney, NSW",
        currentPets: 0,
        email:"ssmith@gmail.com",
        phone_number:0411111222,
        password: "Password123"

    },
    {
        first_name: "Mark",
        last_name: "Williams",
        gender: "Male",
        address:" 122 White Street, Manly, NSW",
        currentPets: 1,
        email:"mwilliams@gmail.com",
        phone_number:0412312212,
        password: "Password3"

    },
   
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;