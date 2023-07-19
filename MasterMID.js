let reset = document.getElementById("reset");
reset.addEventListener('click', resetGame, false);
let secretCode = [];
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let guess = [];
/****  WRITE A COMMAND HERE THAT WILL RESET THE GAME USING resetGame() *****/
resetGame();

function resetGame() {
    /****  WRITE A COMMAND HERE THAT WILL PICK A RANDOM CODE THE GAME *****/
    randomColor = colors[Math.floor(colors.length * Math.random())];
    /****  USING THE FUNCTION YOU DEFINE BELOW *****/

}

/*** CREATE A FUNCTION HERE THAT WILL PICK A RANDOM 4-COLOR CODE AND ****/
function chooseColor() {
    for(i = 0; i < 4; i++) {
        let color = colors[Math.floor(colors.length * Math.random())];
        secretCode.push(color);
    }
}

function choices() {
    for(let color of colors){
        let choices = document.getElementsById("select")
        guess.push(choices)
    }
}

let circleOutput = document.getElementById("circleOutput")

function check() {
    for(let i = 0; i < 4; i++){
        if secretCode[i] == guess[i]
        circleOutput.textContent = 
    }

chooseColor();
choices();


/***** STORE IT AS AN ARRAY IN THE VARIABLE NAMED secretCode. ******/
//For example, a valid value for secretCode could be ["blue", "red", "green", "blue"]

    //first make sure there is nothing in the secretCode array by making it an empty array

    //push 4 random strings from the colors array into the secretCode array
    