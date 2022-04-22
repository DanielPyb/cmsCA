const experienceLoppARR = ["story", "experience", "challenge", "memory"];
const gameCharacterLoopARR = ["Mario", "Sonic", "Samus", "Croft", "Drake", "Kratos", "Dante", "Crash", "Spyro", "Link"];

const gameCharacterLoopEl = document.querySelector("#characterLoop")
const experienceLoppEl = document.querySelector("#feelingLoop")

let i = 0;
function characterLoop() {
  setTimeout(function() {
    gameCharacterLoopEl.innerHTML = gameCharacterLoopARR[i];
    i++;                    
    if (i <= gameCharacterLoopARR.length -1){           
        characterLoop();             
    } else {
      i = 0;
      characterLoop();}                    
  }, 1000)
}



characterLoop();

let j = 0;
function experienceLoop() {
  setTimeout(function() {
    experienceLoppEl.innerHTML = experienceLoppARR[j];
    j++;                    
    if (j < experienceLoppARR.length) {           
        experienceLoop();      
    }
  }, 1500)
}

experienceLoop();