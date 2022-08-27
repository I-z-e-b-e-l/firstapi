let e4_button = document.querySelector('#e4_button');

let e5_button = document.querySelector('#e5_button');


function getInfo(val) {
    
    console.log(val)

    const url = val;
    let movieData;
    axios
        .get(url)

        .then((response)=>{
            movieData = response.data;

            let planetsArray = response.data.planets;

            for (let i = 0; i < planetsArray.length; i++){

                axios
                    .get(planetsArray[i])
                    .then((planetResponse)=>{
                        planetData = planetResponse.data;

                        let li = document.createElement("li");
                        li.innerHTML=planetData.name;
                        document.getElementById("planetUl").appendChild(li);

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
                        document.getElementById("charactersUl").appendChild(li);

                    })
            } 

            updateInfo(movieData);
            
        })

    };


function updateInfo(data){



    let title = document.querySelector('#title');
    title.innerText = data.title

    let rDate = document.querySelector('#rDate');
    rDate.innerText = data.release_date



} 

// e4_button.addEventListener('click', getInfo)

// e5_button.addEventListener('click', getInfo)
