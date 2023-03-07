const { UserProfile } = require('../models');

const userProfileData = [
  {
    first_name: "Sam",
    last_name: "Smith",
    gender: "Male",
    address: " 122 Smith Street, Sydney, NSW",
    currentPets: 0,
    email: "ssmith@gmail.com",
        phone_number: 0411111222,
    //original password: Password123
    password: "$2a$10$TT4c7NDIm8cJxs0RrHYtMeaTDwMDdwqGlmLtSoI9ptHSUVOR3E6Te",
  },
  {
    first_name: "Mark",
    last_name: "Williams",
    gender: "Male",
    address: " 122 White Street, Manly, NSW",
    currentPets: 1,
    email: "mwilliams@gmail.com",
    phone_number: 0412312212,
    //original password: Password3
    password: "$2a$10$frXypQXvrBJRAAntXyfgxO0U.V9WrpxxGetu1OcjlCsD0PO5vfV3u",
  },
];

const seedUserProfile = () => UserProfile.bulkCreate(userProfileData);

module.exports = seedUserProfile;