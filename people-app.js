
function getInfo() {
    
    const url = 'https://swapi.dev/api/people';
    
    let peopleData;
    axios
        .get(url)

        .then((response)=>{
            peopleData = response.data.results;

            console.log(peopleData)

            for (let i = 0; i < peopleData.length; i++){

                console.log(peopleData[i])

                let table = document.getElementById("character-table");
                let tr = document.createElement("tr");
                table.appendChild(tr);

                let tdName = document.createElement("td");
                tdName.innerHTML=peopleData[i].name;
                tr.appendChild(tdName);
  
                axios
                    .get(peopleData[i].homeworld)
                    .then((homeworldResponse)=>{
                        let homeworldName = homeworldResponse.data.name;
                        peopleData[i].homeworld = homeworldName

                        let tdHomeworld = document.createElement("td");
                        tdHomeworld.innerHTML=peopleData[i].homeworld;
                        tr.appendChild(tdHomeworld)
  
                    }) 

                let filmsArray = peopleData[i].films;

                let tdFilms = document.createElement("td");
                tr.appendChild(tdFilms);

                let ulFilms = document.createElement("ul");
                tdFilms.appendChild(ulFilms);

                for (let x=0; x < filmsArray.length; x++){
                    axios
                        .get(filmsArray[x])
                        .then ((filmResponse)=> {
                            filmData = filmResponse.data;

                            let liFilms = document.createElement("li");
                            liFilms.innerHTML=filmData.title;
                            ulFilms.appendChild(liFilms);
                        })
                }
                    
            } 
            
        })

    };


getInfo();