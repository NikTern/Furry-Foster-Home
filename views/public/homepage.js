//Grab necessary HTML elements to generate cards
const petsBox = document.querySelector(".pets")

//Code which generates the pets by making a get request 
fetch('/api/pets', {
method: 'GET'
})
.then((res) => res.json())
.then((data) => {
    console.log('Successful GET request:', data);

    //create cards here
    for(var i=0; i < data.length; i++){
        let card = document.createElement('a')
        card.classList.add('pet-card')
        
        //generate pet image
        let petImage = document.createElement('img')
            // SET SRC LINK TO BE AMAZON LINK (which will be an object property? data[i].imglink?)
        petImage.setAttribute("src", "./assets/cutecat.png")

        let petName = document.createElement('p')
        petName.textContent(data[i].petname) //need to use correct property
    }

    card.appendChild(petImage)
    card.appendChild(petName)

    petsBox.appendChild(card)

    // return data;
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