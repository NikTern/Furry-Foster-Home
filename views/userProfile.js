const url = '/api/users/profile';
const profileUsername = $('#username');
const profileEmail = $('#email');
const profilePetsAdopted = $('#pets-adopted');
const profielFirstName = $('#first-name');
const profileLastName = $('#last-name');
const profileGender = $('#gender');
const profileAddress = $('#address');
const profilePhoneNumber = $('#phone');
const profileCurrentPets = $('#current-pets');

const profileModal = $('#exampleModal');
const editFirstName = $('#edit-first-name');
const editLastName = $('#edit-last-name');
// const editGender = document.getElementsByName('edit-gender');
const editGender=$("input[name='edit-gender']:checked");
const editAddress = $('#edit-address');
const editPhone = $('#edit-phone');
const editCurrentPets = $('#edit-current-pets');
const saveChangeBtn = $('#save-changes');


const profilePageRender = async () => { 
    const response = await fetch(url);
    const userData = response.json();
    const { username, email, first_name, last_name, gender, address, phone_number, currentPets } = userData;
    profileUsername.val() = username;
    profileEmail.val() = email;
    profielFirstName.val() = first_name;
    profileLastName.val() = last_name;
    profileGender.val() = gender;
    profileAddress.val() = address;
    profilePhoneNumber.val() = phone_number;
    profileCurrentPets.val() = currentPets;
}


const editProfileHandler = async (event) => { 
    event.preventDefault();

    const first_name = editFirstName.val().trim();
    const last_name = editLastName.val().trim();
    const gender = editGender.val()
    const address = editAddress.val().trim();
    const phone_number = editPhone.val().trim();
    const currentPets = editCurrentPets.val().trim();

    const response = await fetch(url, {
        method: 'PUT',
        body: JSON.stringify({ first_name, last_name, gender, address, phone_number, currentPets }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, hide the modal
        profileModal.modal('hide');
        document.location.replace(url);

    } else {
      alert(response.statusText);
    }
}

saveChangeBtn.on('click', editProfileHandler)

profilePageRender();