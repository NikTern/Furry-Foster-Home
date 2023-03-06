//Grab necessary HTML elements
const categoriesDiv = document.querySelector(".categories") // to hide and unhide
const content = document.querySelector(".content") // content gets generated and deleted here
 

//Generate cards for a specific pet category using data from a get request
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
  
            //delete any existing content in the content page
            for(var j=0; j < content.length; j++){
                content.removeChild(content.firstChild)
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

//Function to generate details for a single pet using data from a get request
//(used as an event listener added to generated pet cards to make them clickable)
function fetchPetData(id) {
    fetch(`/api/pets/${id}`, {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
      console.log('Successful GET request:', data);
  
      //hide the categories div and view all pets div
      categoriesDiv.setAttribute("style", "display: none")
      var viewAll = document.querySelector("#view-all")
      viewAll.setAttribute("style", "display: none")
  
      // delete any existing content in the content page
      while (content.firstChild) {
        content.removeChild(content.firstChild);
      }
  
      //**generate html based off retrieved data**//
  
      //pet image
      let petImage = document.createElement('img')
      petImage.setAttribute("src", `${data.Picture}`) // SET SRC LINK TO BE AMAZON LINK (which will be an object property? data[i].imglink?)
      

      //pet name 
      let petName = document.createElement('h2')
      petName.textContent = data.pet_name //need to use correct property

      //pet details        
      let petAge = document.createElement('p')
      petAge.textContent = data.Age
  
      let petDescription = document.createElement('p')
      petDescription.textContent = data.Description
  
      let petBreed = document.createElement('p')
      petBreed.textContent = `breed: ${data.breed_name}`
  
      let petCategory = document.createElement('p')
      petCategory.textContent = data.category_name
  
      let petSize = document.createElement('p')
      petSize.textContent = `Size: ${data.Size}` 
  
      let petSex = document.createElement('p')
      petSex.textContent = `Sex: ${data.Sex}`
  
      let petCost = document.createElement('p')
      petCost.textContent = `Cost: $${data.Cost}`
  
      let petLocation = document.createElement('p')
      petLocation.textContent = `Location: ${data.Location}`
  
      //APPEND EVERYTHING
      let petDetailsDiv = document.createElement('div')
      
      let petPhotoDiv = document.createElement('div')
      petPhotoDiv.appendChild(petImage)

      let petTextDiv = document.createElement('div')
      petTextDiv.appendChild(petName)
      petTextDiv.appendChild(petAge)
      petTextDiv.appendChild(petCategory)
      petTextDiv.appendChild(petBreed)
      petTextDiv.appendChild(petDescription)
      petTextDiv.appendChild(petSize)
      petTextDiv.appendChild(petSex)
      petTextDiv.appendChild(petCost)
      petTextDiv.appendChild(petLocation)

      petDetailsDiv.appendChild(petPhotoDiv)
      petDetailsDiv.appendChild(petTextDiv)
      content.appendChild(petDetailsDiv)
    })
    .catch((error) => {
      console.error('Error in GET request:', error);
    });
    
    //create back button
            
  }

//'View All Pets' button - Generate cards for all the pets using data from a get request
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

            //delete any existing content in the content page
            for(var j=0; j < content.length; j++){
                content.removeChild(content.firstChild)
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
            
            //create back button

        })
        .catch((error) => {
            console.error('Error in GET request:', error);
        });        
})


// code for searchbar to bring up individual pets based on searched term (UNFINISHED)
    // const searchpet = document.querySelector('#searchpet');
    // searchpet.addEventListener('submit', function(event) {
    //   event.preventDefault();

    //   const searchQuery = document.querySelector('#search-query').value;

    //   // Send request to server with searched pets
    //   fetch(`/pets/${searchQuery}`)
    //     .then(response => response.json())
    //     .then(data => {
    //       // Render search results on page
    //       const resultsContainer = document.querySelector('#pets');
    //       // ...
    //     });
    // });