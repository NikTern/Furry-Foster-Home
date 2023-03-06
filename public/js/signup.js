
const signupFormHandler = async (event) => {
    event.preventDefault();
   
    const firstName = document.querySelector('#first-name-signup').value.trim();
    const surname = document.querySelector('#surname-signup').value.trim();
    const mobile = document.querySelector('#mobile-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const pwRetype = document.querySelector('#password-retype').value.trim();
    const petNo = document.querySelector('#pet-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();

    if (document.getElementById('gender-male').checked) {
        var gender = "male"
    } else if (document.getElementById('gender-female').checked) {
        var gender = "female"
    } else {
        window.alert("Please select gender")
    }
   
    if (password !== pwRetype) {
    window.alert("Password does not match!")
    }
      
    // Validate password requirement
    if (password.length < 8) {
    window.alert("Password length must be at least 8 characters")
    }
    if (password.length > 20) {
    window.alert("Password length must be no more than 20 characters")
    }
  
    if (firstName && surname && gender && mobile && petNo && address && email && password && pwRetype) {
      const response = await fetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ firstName, surname, email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
   
      if (response.ok) {
      // If successful, redirect the browser to the home page
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
    };

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
 
