let button = document.querySelector('#button');

//Sucessfully pulls in both name and homeworld from the API, the chains to translate homeworld URL 

function getInfo() {
    const url = 'https://swapi.dev/api/people/1';
    let personData;
    axios
        .get(url)

        .then((response)=>{
            personData = response.data;
            return axios
                .get(response.data.homeworld);
            })    
                        
        .then((homeworldRes) => {
            const homeworldName = homeworldRes.data.name; //set homeworldName = to api/planet/1.name
            console.log(homeworldRes.data.name) // = Tattooine
            console.log(personData.homeworldName) // = Undefined
            personData.homeworldName = homeworldName; //set the initial response.data
            updateInfo(personData);
            
        });
        
    }; 



function updateInfo(data){
    let name = document.querySelector('#name');
    name.innerText = data.name

    let homeWorld = document.querySelector('#homeworld');
    homeWorld.innerText = data.homeworldName
} 

button.addEventListener('click', getInfo)