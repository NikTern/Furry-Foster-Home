const signupFormHandler = async (event) => {
  event.preventDefault();

  const first_name = document.querySelector("#first-name-signup").value.trim();
  const last_name = document.querySelector("#surname-signup").value.trim();
  const phone_number = document.querySelector("#mobile-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const pwRetype = document.querySelector("#password-retype").value.trim();
  const currentPets = document.querySelector("#pet-signup").value.trim();
  const address = document.querySelector("#address-signup").value.trim();
  var gender;

  if (document.getElementById("gender-male").checked) {
    gender = "male";
  } else if (document.getElementById("gender-female").checked) {
    gender = "female";
  } 

  if ((first_name == null || first_name == "") || (last_name == null || last_name == "") || (phone_number == null || phone_number == "") || (email == null || email == "") || (password == null || password == "") || (currentPets == null || currentPets == "") || (address == null || address == "") || (gender == null || gender == "")) {
    alert("Please Fill In All Required Fields");
  }

  if (password !== pwRetype) {
    window.alert("Password does not match!");
  }

  // Validate password requirement
  if (password.length < 8) {
    window.alert("Password length must be at least 8 characters");
  }
  if (password.length > 20) {
    window.alert("Password length must be no more than 20 characters");
  }

  if (
    first_name &&
    last_name &&
    gender &&
    phone_number &&
    currentPets &&
    address &&
    email &&
    password &&
    pwRetype
  ) {
    const response = await fetch("/api/users/register", {
      method: "POST",
      body: JSON.stringify({
        first_name,
        last_name,
        gender,
        phone_number,
        currentPets,
        email,
        address,
        password,
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      // If successful, redirect the browser to the home page
      document.location.replace("/");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
