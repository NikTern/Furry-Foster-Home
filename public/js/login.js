const loginFormHandler = async (event) => {
  event.preventDefault();
 
  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
 
  // Validate password requirement
  if (password.length < 8) {
    window.alert("Password length must be at least 8 characters")
  }
  if (password.length > 20) {
  window.alert("Password length must be no more than 20 characters")
  }

  if (email && password) {
	// Send a POST request to the API endpoint
	const response = await fetch('/api/users/login', {
  	method: 'POST',
  	body: JSON.stringify({ email, password }),
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
 
const signupFormHandler = async (event) => {
  event.preventDefault();
 
  const firstName = document.querySelector('#first-name-signup').value.trim();
  const surname = document.querySelector('#surname-signup').value.trim();
  const mobile = document.querySelector('#mobile-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();
  const pwRetype = document.querySelector('#password-retype').value.trim();
 
  if (password !== pwRetype) {
  window.alert("Password does not match!")
  }

  if (firstName && surname && mobile && email && password && pwRetype) {
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
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
 
document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
 

