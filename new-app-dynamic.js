
function getInfo(val) {

    document.getElementById("info-box").style.display="block";

    const url = val;
    let movieData;
    axios
        .get(url)

        .then((response)=>{
            movieData = response.data;

            let planetsArray = response.data.planets;


            let planetUl = document.getElementById("planetUl")
            while (planetUl.hasChildNodes()){
                planetUl.removeChild(planetUl.firstChild)
            }

            let  charactersUl = document.getElementById("charactersUl")
            while (charactersUl.hasChildNodes()){
                charactersUl.removeChild(charactersUl.firstChild)
            }

            for (let i = 0; i < planetsArray.length; i++){

                axios
                    .get(planetsArray[i])
                    .then((planetResponse)=>{
                        planetData = planetResponse.data;

                        let planetli = document.createElement("li");
                        planetli.innerHTML=planetData.name;
                        planetUl.appendChild(planetli);

                    })
            } 

            let charactersArray = response.data.characters

            for (let i = 0; i < charactersArray.length; i++){

                axios
                    .get(charactersArray[i])
                    .then((charactersResponse)=>{
                        charactersData = charactersResponse.data;

                        let li = document.createElement("li");
                        li.innerHTML=charactersData.name;
                        // come back here 
                        charactersUl.appendChild(li);

                    })
            } 

            updateInfo(movieData);
            
        })

    };


function updateInfo(data){

    let title = document.querySelector('#title');
    title.innerText = data.title

    console.log(data.release_date)


    let rDate = document.querySelector('#rDate');
    rDate.innerText = new Date(data.release_date).toDateString()
} 


