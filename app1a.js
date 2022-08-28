

let button = document.querySelector('#button');

let movies = 'https://swapi.dev/api/films/1'
// let planets = 'https://swapi.dev/api/planets'



function getInfo() {
    axios.get(movies).then(function(response){
        updateInfo(response.data)
    })
}

// function getInfo() {
//     axios.get('https://swapi.dev/api/people/1')
// }



function updateInfo(data){
    let name = document.querySelector('#name');
    name.innerText = data.title

    let planets = document.querySelector('#planets');
    planets.innerText = data.planets
} 

button.addEventListener('click', getInfo)