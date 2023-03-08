//Home button
const homeBtn = document.querySelector(".home-btn")

homeBtn.addEventListener("click", () => {
  window.location.href = "index.html";
});

//Searchbar
const searchbar = document.querySelector(".searchpet")
const searchtext = document.querySelector("#search-query")
searchbar.addEventListener("submit", function(event){
  event.preventDefault();
  fetchPetByBreed(searchtext.value)
})

//Grab necessary HTML elements for dynamic rendering
const categoriesDiv = document.querySelector(".categories") // to hide and unhide
const content = document.querySelector(".content") // content gets generated and deleted here

//Generate cards for a specific pet CATEGORY using data from a get request
categoryCards = document.querySelectorAll(".category-card")
categoryCards.forEach(categoryCard => {
  categoryCard.addEventListener('click', function(event){
    event.preventDefault()
    fetch('/api/pets', {
        method: 'GET',
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful GET request:', data);
  
            //hide the categories div and view all pets div
            categoriesDiv.setAttribute("style", "display: none")
            var viewAll = document.querySelector("#view-all")
            viewAll.setAttribute("style", "display: none")
  
            while (content.firstChild) {
              content.removeChild(content.firstChild);
            }
            //**generate html based off retrieved data**//
  
            //create pet cards (<a> tags) here
            for(var i=0; i < data.length; i++){
              if(data[i].category_id == categoryCard.dataset.id){
                let card = document.createElement('a')
                card.classList.add('pet-card')
       
                //generate pet image
                let petImage = document.createElement('img')
                petImage.setAttribute("src", `${data[i].Picture}`)
        
                //generate pet name
                let petName = document.createElement('p')
                petName.textContent = data[i].pet_name

                //add pet id to each <a> tag 
                card.setAttribute('data-id', `${data[i].id}`)
  
                //add event listener to clear content and generate individual pet details
                card.addEventListener("click", () => {
                  let petId = card.dataset.id
                  fetchPetData(petId)
                })
                
                //append newly generated html elements to the webpage
                card.appendChild(petImage)
                card.appendChild(petName)
                content.appendChild(card)
              }
            }
        })
        .catch((error) => {
            console.error('Error in GET request:', error);
        });        
    })
  })

//Function to generate card for a SINGLE PET using data from a get request
//(used as an event listener added to generated pet cards to make them clickable)
function fetchPetData(id) {
    fetch(`/api/pets/${id}`, {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("Successful GET request:", data);

      //hide the categories div and view all pets div
      categoriesDiv.setAttribute("style", "display: none");
      var viewAll = document.querySelector("#view-all");
      viewAll.setAttribute("style", "display: none");

      // delete any existing content in the content page
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }

      //**generate html based off retrieved data**//

      //pet image
      let petImage = document.createElement("img");
      petImage.setAttribute("src", `${data.Picture}`);
      petImage.setAttribute(
        "style",
        "width: 24rem; border-radius: 20px ; margin-bottom: 1.7%; "
      );

      //pet name
      let petName = document.createElement("h2");
      petName.textContent = data.pet_name;

      //pet details
      let petAge = document.createElement("p");
      petAge.textContent = `Age: ${data.Age}`;

      let petDescription = document.createElement("p");
      petDescription.textContent = data.Description;

      let petBreed = document.createElement("p");
      petBreed.textContent = `Breed: ${data.breed.breed_name}`;

      let petCategory = document.createElement("p");
      petCategory.textContent = data.category_name;

      let petSize = document.createElement("p");
      petSize.textContent = `Size: ${data.Size}`;

      let petSex = document.createElement("p");
      petSex.textContent = `Sex: ${data.Sex}`;

      let petCost = document.createElement("p");
      petCost.textContent = `Cost: $${data.Cost}`;

      let petLocation = document.createElement("p");
      petLocation.textContent = `Location: ${data.Location}`;

      document.querySelectorAll(".pet-details p").forEach((p) => {
        p.setAttribute(
          "style",
          "padding-left: 5%; font-size: large; align-self: end;"
        );
      });
      //APPEND EVERYTHING
      let petDetailsDiv = document.createElement("div");
      petDetailsDiv.classList.add("petDetailsDiv");
      petDetailsDiv.setAttribute(
        "style",
        "width: 100%; display: flex; flex-wrap: wrap; padding-top: 2.5%; justify-content: center; align-items: center"
      );

      let petPhotoDiv = document.createElement("div");
      petPhotoDiv.classList.add("petPhotoDiv");
      petPhotoDiv.setAttribute("style", "padding-right: 5%;");
      petPhotoDiv.appendChild(petImage);

      let infobox = document.createElement("div");
      infobox.classList.add("infobox");
      infobox.setAttribute(
        "style",
        "display: flex; flex-direction: column; justify-content: center; align-items: center;"
      );

      let adoptButton = document.createElement("button");
      adoptButton.textContent = "Adopt!";
      adoptButton.setAttribute(
        "style",
        "padding: 2%; padding-left: 2.5%; padding-right: 2.5%; border-radius: 6px; border-style: none; box-sizing: border-box; color: black; background-color: #1ac23c; flex: 1; margin-left: 10px; margin-right: 10px; width: 10vh; font-size: large; font-weight: bold; align-text: center"
      );
      adoptButton.addEventListener("mouseover", function () {
        adoptButton.style.backgroundColor = "#04e209ff";
      });
      adoptButton.addEventListener("mouseout", function () {
        adoptButton.style.backgroundColor = "#1ac23c";
      });
      adoptButton.addEventListener("focus", function () {
        adoptButton.style.backgroundColor = "#04e209ff";
      });

      //add click event for adopt button
      const adoptModalHandler = async () => {
        const response = await fetch(`/api/pets/${id}`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
          console.log(response);
          //TODO: ADD CODE FOR TRIGGER MODAL
          //   //modalname=document.querySelector('#modal');
          //   //modalname.modal("show");
        } else {
          window.location.href("/404.html");
        }
      };

      adoptButton.addEventListener("click", adoptModalHandler);

      let backButton = document.createElement("a");
      backButton.href = "./index.html";
      let backBtn = document.createElement("img");
      backBtn.src = "./assets/images/back.png";
      backBtn.setAttribute("style", "width: 58px; height: 58px");
      backButton.appendChild(backBtn);

      let backBtnDiv = document.createElement("div");
      backBtnDiv.classList.add("backBtnDiv");
      backBtnDiv.setAttribute(
        "style",
        "height: 100%; display: flex ; align-items: start"
      );
      backBtnDiv.appendChild(backButton);

      let petTextDiv = document.createElement("div");
      petTextDiv.classList.add("petTextDiv");
      petTextDiv.setAttribute("style", "font-size: 1.2rem;");
      petTextDiv.appendChild(petName);
      petTextDiv.appendChild(petAge);
      petTextDiv.appendChild(petCategory);
      petTextDiv.appendChild(petBreed);
      petTextDiv.appendChild(petDescription);
      petTextDiv.appendChild(petSize);
      petTextDiv.appendChild(petSex);
      petTextDiv.appendChild(petCost);
      petTextDiv.appendChild(petLocation);

      infobox.appendChild(petTextDiv);
      infobox.appendChild(adoptButton);

      let container = document.createElement("div");
      container.setAttribute("style", "display: flex;");
      container.appendChild(infobox);
      container.appendChild(backBtnDiv);

      petDetailsDiv.appendChild(petPhotoDiv);
      // petDetailsDiv.appendChild(infobox)
      // petDetailsDiv.appendChild(backBtnDiv)
      petDetailsDiv.appendChild(container);
      content.appendChild(petDetailsDiv);
    })
    .catch((error) => {
      console.error('Error in GET request:', error);
    });            
  }

//'View All Pets' button - Generate cards for ALL PETS using data from a get request
const viewAll = document.querySelector("#view-all-btn")
viewAll.addEventListener('click', function(event){
    event.preventDefault()
    fetch('/api/pets/', {
        method: 'GET'
        })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful GET request:', data);

            //hide the categories div and view all pets div
            categoriesDiv.setAttribute("style", "display: none")
            var viewAll = document.querySelector("#view-all")
            viewAll.setAttribute("style", "display: none")

            while (content.firstChild) {
              content.removeChild(content.firstChild);
            }

            //**generate html based off retrieved data**//

            //create pet cards (<a> tags) here
            for(var i=0; i < data.length; i++){
                let card = document.createElement('a')
                card.classList.add('pet-card')
       
                //generate pet image
                let petImage = document.createElement('img')
                petImage.setAttribute("src", `${data[i].Picture}`)
        
                //generate pet name
                let petName = document.createElement('p')
                petName.textContent = data[i].pet_name
                
                //add pet id to each <a> tag 
                card.setAttribute('data-id', `${data[i].id}`)

                //add event listener to clear content and generate individual pet details
                card.addEventListener("click", () => {
                  let petId = card.dataset.id
                  fetchPetData(petId)
                })
                
                //append newly generated html elements to the webpage
                card.appendChild(petImage)
                card.appendChild(petName)
                content.appendChild(card)
              }
        })
        .catch((error) => {
            console.error('Error in GET request:', error);
        });        
})

//Generate cards for a specific pet BREED using data from a get request (UNFINISHED)
function fetchPetByBreed(breedname){
  fetch('/api/pets/', {
    method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful GET request:', data);

        //hide the categories div and view all pets div
        categoriesDiv.setAttribute("style", "display: none")
        var viewAll = document.querySelector("#view-all")
        viewAll.setAttribute("style", "display: none")

        while (content.firstChild) {
          content.removeChild(content.firstChild);
        }

        //**generate html based off retrieved data**//

        //create pet cards (<a> tags) here
        let check = false
        for(var i=0; i < data.length; i++){
          if(data[i].breed.breed_name == breedname){
            check = true
            let card = document.createElement('a')
            card.classList.add('pet-card')
   
            //generate pet image
            let petImage = document.createElement('img')
            petImage.setAttribute("src", `${data[i].Picture}`)
    
            //generate pet name
            let petName = document.createElement('p')
            petName.textContent = data[i].pet_name
            
            //add pet id to each <a> tag 
            card.setAttribute('data-id', `${data[i].id}`)

            //add event listener to clear content and generate individual pet details
            card.addEventListener("click", () => {
              let petId = card.dataset.id
              fetchPetData(petId)
            })
            
            //append newly generated html elements to the webpage
            card.appendChild(petImage)
            card.appendChild(petName)
            content.appendChild(card)
          }          
        }
        return check
    })
    .catch((error) => {
        console.error('Error in GET request:', error);
    });        
}




const user = document.querySelector("#user");
const signOutBtn = document.querySelector('#sign-out');
const loginBtn = $("#login-btn");
const signupBtn = $("#signup-btn");
const partition = document.querySelector('#partition');

const getSessionData = async () => { 
  const session = await fetch("/api/users/status");
  const sessionData = await session.json();
  return sessionData;
}
const navBarRender = async () => {
  const sessionData = await getSessionData();
  console.log(sessionData);
  // const session = await fetch("/api/users/status");
  // const sessionData = await session.json();
  // console.log(sessionData);
  if (sessionData.logged_in) {
    loginBtn.hide();
    signupBtn.hide();
    console.log(sessionData.user_email);
    user.textContent = `${sessionData.user_email}`;
    signOutBtn.textContent = 'Sign out';
    partition.textContent = " | ";
  }
};

const signOut = async () => {
  const response = await fetch("/api/users/logout", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
  } else {
    alert(response.statusText);
  }
};

signOutBtn.addEventListener("click", signOut);


navBarRender();
