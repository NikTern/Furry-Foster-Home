const username = $('#username');
const email = $('#email');
const petsAdopted = $('#pets-adopted');
const first_Name = $('#first-name');
const last_Name = $('#last-name');
const gender = $('#gender');
const address = $('#address');
const phone_number = $('#phone');
const currentPets = $('#current-pets');

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
    const response = await fetch('/api/users/profile');
    
}


const editProfileHandler = async (event) => { 
    event.preventDefault();

    const first_name = editFirstName.val().trim();
    const last_name = editLastName.val().trim();
    const gender = editGender.val()
    const address = editAddress.val().trim();
    const phone_number = editPhone.val().trim();
    const currentPets = editCurrentPets.val().trim();

    const response = await fetch('/api/users/profile', {
        method: 'PUT',
        body: JSON.stringify({ first_name, last_name, gender, address, phone_number, currentPets }),
        headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, hide the modal
        profileModal.modal('hide');
        document.location.replace('/api/users/profile');

    } else {
      alert(response.statusText);
    }
}

saveChangeBtn.on('click',editProfileHandler)