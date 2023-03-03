// petName = document.querySelector(".petname")
// petName.text

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
    })
    