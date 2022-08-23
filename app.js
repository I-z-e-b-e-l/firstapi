let button = document.querySelector('#button');



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
            const homeworldName = homeworldRes.data.name;
            personData.homeworldName = homeworldName;
            xyz = updateInfo(personData);
            console.log("endpoint")
            
        });
        
    };



function updateInfo(data){
    let name = document.querySelector('#name');
    name.innerText = data.name

    let homeWorld = document.querySelector('#homeworld');
    homeWorld.innerText = data.homeworldName
} 

button.addEventListener('click', getInfo)