

let button = document.querySelector('#button');

let people = 'https://swapi.dev/api/people/1'
let planets = 'https://swapi.dev/api/planets/1'

const requestPeople = axios.get(people);
const requestPlanets = axios.get(planets);

// axios.all([requestPeople, requestPlanets]).then(function(response){
//                 updateInfo(response.data)
//             })




requestPeople.then(function(response){
            updateInfo(response.data)
        })

requestPlanets.then(function(response){
            updateInfo(response.data)
        })


// function getInfo() {
//     axios.get(people).then(function(response){
//         updateInfo(response.data)
//     })
// }

// function getInfo() {
//     axios.get('https://swapi.dev/api/people/1')
// }



function updateInfo(data){
    let name = document.querySelector('#name');
    name.innerText = data.name;

    let homeWorld = document.querySelector('#homeworld');
    homeWorld.innerText = data.homeworld;
} 

// button.addEventListener('click', getInfo)