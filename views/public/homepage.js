//Grab necessary HTML elements to append cards to
const petsBox = document.querySelector(".pets")
 
//Code which generates the pets using data from a get request
fetch('/api/pets', {
method: 'GET'
})
.then((res) => res.json())
.then((data) => {
    console.log('Successful GET request:', data);

    //create cards (<a> tags) here
    for(var i=0; i < data.length; i++){
        let card = document.createElement('a')
        card.classList.add('pet-card')
        //add pet id to each <a> tag 
        card.id = data[i].id

        //set url path for each <a> tag to have an id corresponding to the database for the other html page to grab
        card.setAttribute("href", `./petdetails.html?cardId=${card.id}`)

        //generate pet image
        let petImage = document.createElement('img')
        petImage.setAttribute("src", "./assets/cutecat.png") // SET SRC LINK TO BE AMAZON LINK (which will be an object property? data[i].imglink?)

        //generate pet name
        let petName = document.createElement('p')
        petName.textContent(data[i].petname) //need to use correct property
    }

    card.appendChild(petImage)
    card.appendChild(petName)
    petsBox.appendChild(card)
})
.catch((error) => {
    console.error('Error in GET request:', error);
});


//Grab necessary HTML elements to generate pet categories
    //

//Code which generates pet categories by making a get request
    //


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