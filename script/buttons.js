const systemsList = document.querySelector(".gameSystems");
const generationList = document.querySelector(".gameGeneration");
const genreList = document.querySelector(".genres");



const genreBTN = document.querySelector("#genreBTN");
const generationsBTN = document.querySelector("#generationBTN");
const systemsBTN = document.querySelector("#systemsBTN");


const showGenre = () =>{
    if(genreList.style.display != "block"){
        genreList.style.display = "block";
        generationList.style.display = "none"
        systemsList.style.display = "none"
    } else{
        genreList.style.display = "none"
    }
}

const showGenerations = () =>{
    if(generationList.style.display != "block"){
        generationList.style.display = "block";
        genreList.style.display = "none"
        systemsList.style.display = "none"
    } else{
        generationList.style.display = "none"
    }
}

const showSystems = () =>{
    if(systemsList.style.display != "block"){
        systemsList.style.display = "block";
        genreList.style.display = "none"
        generationList.style.display = "none"
    } else{
        systemsList.style.display = "none"
    }
}




genreBTN.addEventListener("click", showGenre);
generationsBTN.addEventListener("click", showGenerations);
systemsBTN.addEventListener("click", showSystems);