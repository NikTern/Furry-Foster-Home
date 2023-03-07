const profileUsername = document.querySelector('#user-full-name');
const profileEmail = document.querySelector('#email')
const profilePetsAdopted = document.querySelector('#pets-adopted');
const profielFirstName = document.querySelector('#first-name');
const profileLastName = document.querySelector('#last-name');
const profileGender = document.querySelector('#gender');
const profileAddress = document.querySelector('#address');
const profilePhoneNumber = document.querySelector('#phone');
const profileCurrentPets = document.querySelector('#current-pets');

const profileModal = $('#exampleModal');
const editFirstName = document.querySelector('#edit-first-name');
const editLastName = document.querySelector("#edit-last-name");
// const editGender = document.getElementsByName('edit-gender');
const editGenderFemale = document.querySelector("#edit-gender-female");
const editGenderMale = document.querySelector('#edit-gender-male');
const editAddress = document.querySelector("#edit-address");
const editPhone = document.querySelector("#edit-phone");
const editCurrentPets = document.querySelector("#edit-current-pets");
const saveChangeBtn = document.querySelector('#save-changes');
// const editMyBio = document.querySelector('#edit-my-bio');


const profilePageRender = async () => { 
  try {
    const response = await fetch(`/api/users/profile`);
    const userData = await response.json();
    const { email, first_name, last_name, gender, address, phone_number, currentPets } = userData;
    profileUsername.textContent = `${first_name} ${last_name}`;
    profileEmail.textContent = email;
    profielFirstName.textContent = first_name;
    profileLastName.textContent = last_name;
    profileGender.textContent = gender;
    profileAddress.textContent = address;
    profilePhoneNumber.textContent = phone_number;
    profileCurrentPets.textContent = currentPets;
    editFirstName.setAttribute('value', first_name);
    editLastName.setAttribute('value', last_name);
    if (gender === 'female') {
      editGenderFemale.checked=true;
    } else { 
      editGenderMale.checked=true;
    }
    editAddress.setAttribute("value", address);
    editPhone.setAttribute("value", phone_number);
    editCurrentPets.setAttribute("value", currentPets);
  } catch (err) { 
    // document.location.replace("../404.html");
    // console.log(err);
  }
    
}


const editProfileHandler = async (event) => { 
    event.preventDefault();

    const first_name = editFirstName.value.trim();
  const last_name = editLastName.value.trim();
  var gender;
    if (document.getElementById("edit-gender-female").checked) {
      gender = "female";
    } else {
       gender = "male";
    }

    const address = editAddress.value.trim();
    const phone_number = editPhone.value.trim();
    const currentPets = editCurrentPets.value.trim();

    const response = await fetch('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ first_name, last_name, gender, address, phone_number, currentPets }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, hide the modal
        profileModal.modal('hide');
        document.location.replace('/html/userProfile.html');

    } else {
      alert(response.statusText);
    }
}

saveChangeBtn.addEventListener('click', editProfileHandler)

profilePageRender();

const user = document.querySelector("#user");
const loginBtn = $("#login-btn");
const signupBtn = $("#signup-btn");

const navBarRender = async () => {
  const session = await fetch("/api/users/status");
  const sessionData = await session.json();
  console.log(sessionData);
  if (sessionData.logged_in) {
    loginBtn.hide();
    signupBtn.hide();
    console.log(sessionData.user_email);
    user.textContent = `${sessionData.user_email}`;
  }
};

navBarRender();