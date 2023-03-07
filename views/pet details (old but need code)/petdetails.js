// grab id in url and use it to make fetch request for the individual pet
const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('cardId');
console.log(id)

fetch(`/api/pets/${id}`, {
    method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful GET request:', data)

        //**generate relevant html based off retrieved data**//

        //pet image
        let petImage = document.createElement('img')
        petImage.setAttribute("src", `${data[i].Picture}`) // SET SRC LINK TO BE AMAZON LINK (which will be an object property? data[i].imglink?)

        //pet name 
        let petName = document.createElement('h2')
        petName.textContent(data[i].pet_name) //need to use correct property

        //pet details        
        let petAge = document.createElement('p')
        petAge.textContent(data[i].Age)

        let petDescription = document.createElement('p')
        petDescription.textContent(data[i].Description) 

        let petBreed = document.createElement('p')
        petBreed.textContent(data[i].breed_name) 

        let petCategory = document.createElement('p')
        petCategory.textContent(data[i].category_name)

        let petSize = document.createElement('p')
        petSize.textContent(data[i].Size) 

        let petSex = document.createElement('p')
        petSex.textContent(data[i].Sex)

        let petCost = document.createElement('p')
        petCost.textContent(data[i].Cost) 
        
        let petLocation = document.createElement('p')
        petLocation.textContent(data[i].Location)

        //APPEND EVERYTHING
    })
    