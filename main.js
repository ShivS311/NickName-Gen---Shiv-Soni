//variable for HTML elements
let firstName = document.getElementById("first-name");
let lastName = document.getElementById("last-name");
let holding = document.getElementById("holder");
let rndBtN = document.getElementById("gen-btn");
let allBtN = document.getElementById("all-btn");

//Button
rndBtN.addEventListener("click", randName);
allBtN.addEventListener("click", allNames);

//global variables aka array for all the rnd names 
let chooseName = ["Crusher", "the Scientist", "twinkletoes", "the coder", "the jester", "the sloth", "Quick-Silver"];


// function 
function randName() {
  let firsName  = firstName.value;
  let lasName = lastName.value;

 
  holding.innerHTML =
    " " + firsName + " " + chooseName[randomNum(0,7)] + " " + lasName + " ";


}


function allNames() {
  let firsName = firstName.value;
  let lasName = lastName.value;


  let divName = "";
  for (let i = 0; i < chooseName.length; i++) {
    divName += `${firsName} "${chooseName[i]}"  ${lasName}  <br>`;
  }
  holding.innerHTML = divName;
}



// found a tutorial on how to choose a random number from the given values using math.floor
function randomNum(low, high) {
  return Math.floor(Math.random() * (high - low) + low);
} 

