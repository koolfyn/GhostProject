let reset = document.getElementById("reset");
let submit = document.getElementById("submit");
reset.addEventListener('click', resetGame, false);
submit.addEventListener("click", submitRes, false);
let secretCode = [];
let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
let guess = [];
let feedback = [];
let blackDots = null;
let secretColor = null;
let guessColor = null;
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
    let choices = document.getElementsById("select");
    for(let color of choices){
        guess.push(color.value);
    }
}

function check1() {
    for(let i = 0; i < 4; i++){
        if(secretCode[i] == guess[i]){
            feedback.push("black");
            blackDots += 1;
        }
    }
}

function check2() {
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 6; j++){
            if(secretCode[i] == colors[j]){
                secretColor += 1;
            }
        }
    }
    for(let i = 0; i < 4; i++){
        for(let j = 0; j < 6; j++){
            if(guess[i] == colors[j]){
                guessColor += 1;
            }
        }
    }
    let minColor = Math.min(secretColor, guessColor)
    let whiteDots = minColor - blackDots
    for(let k = 0; k < whiteDots; k++){
        feedback.push("white");
    }
}

// function check2() {
//     for(let i = 0; i < 4; i++){
//         for(let j = 0; j < 4; j++){
//             if(secretCode[i] == guess[j] && i != j){
//                 feedback.push("white")
//             }
//         }
//     }
// }

// let colors = ["red", "blue", "yellow", "green", "orange", "purple"];
// guess: r, r, y, b
// secreteCode: b, y, b, y

function createRow(guess, feedback){
    let gameBoard = document.getElementById("gameBoard");
    let row = document.createElement("div");
    let guessContainer =  document.createElement("div");
    let feedbackContainer =  document.createElement("div");
    for(let g of guess){
        let el = document.createElement("div");
        el.className = g + "Circle";
        guessContainer.append(el);
    }
    for(let color of feedback){
        let element = document.createElement("div");
        element.className = color + "Circle";
        feedbackContainer.append(element);
    }
    row.append(guessContainer);
    row.append(feedbackContainer);
    gameBoard.appendChild(row);
}

function submitRes() {
    choices();
    check1();
    check2();
    createRow(guess, feedback);
    blackDots = 0;
    guessColor = 0;
    secretColor = 0;
}



/***** STORE IT AS AN ARRAY IN THE VARIABLE NAMED secretCode. ******/
//For example, a valid value for secretCode could be ["blue", "red", "green", "blue"]

    //first make sure there is nothing in the secretCode array by making it an empty array

    //push 4 random strings from the colors array into the secretCode array