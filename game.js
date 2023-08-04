let randomnumber=parseInt(Math.floor(Math.random()*100)+1);
console.log(randomnumber)

let submit=document.querySelector("#s");
let userinput=document.querySelector("#t");
let guesslot=document.querySelector("#guesses");
let remaining=document.querySelector("#lastresult");
let loworhi=document.querySelector("#loworhi");
let startover=document.querySelector(".resultparas");

let p=document.createElement("p")

let prevguess=[];
let numguess=1;

let playgame=true;
if (playgame){
    submit.addEventListener("click",(e)=>{
    e.preventDefault();
    const guess=parseInt(userinput.value)
    console.log(guess)
    validateguess(guess)
    })
}
function validateguess(guess){
if (isNaN(guess)){
    alert("Enter a valid number")
} else if(guess < 1){
    alert("Enter a valid number")
} else if (guess>100){
    alert("Enter a valid number")
} else{
    prevguess.push(guess)
    if(numguess===11){
        displaymsg(`Game Over.....Random number is ${randomnumber}.`)
        displayguess(guess)
        endgame()
    } else{
      checkguess(guess)
      displayguess(guess)
    }
}
}

function displaymsg(message) {
loworhi.innerHTML=`<h2>${message}</h2>`
}

function checkguess(guess){
if (guess== randomnumber){
    displaymsg("You got it right!!!")
    endgame()
}else if (guess < randomnumber){
    displaymsg("Number is too low.")
}else if (guess > randomnumber){
    displaymsg("Number is too high.")
}
}

function displayguess(guess){
userinput.value='';
guesslot.innerHTML+=`${guess} `
numguess++;
remaining.innerHTML=`${11-numguess}`
}

function endgame(){
userinput.value='';
userinput.setAttribute("disabled","")
p.classList.add("button")
p.innerHTML=`<h2 id="start">Start Over</h2>`
startover.appendChild(p)
newgame()
playgame = false;
}

function newgame(){
const newgame=document.querySelector("#start")
newgame.addEventListener("click",()=>{
randomnumber=parseInt(Math.floor(Math.random()*100)+1);
prevguess = []
numguess = 1;
guesslot.innerHTML = "";
remaining.innerHTML = `${11-numguess}`
userinput.removeAttribute("disabled")
startover.removeChild(p)
playgame = true;
})
}