// DOM 
// table cells 
const square1 = document.getElementById("1");
const square2 = document.getElementById("2");
const square3 = document.getElementById("3");
const square4 = document.getElementById("4");
const square5 = document.getElementById("5");
const square6 = document.getElementById("6");
const square7 = document.getElementById("7");
const square8 = document.getElementById("8");
const square9 = document.getElementById("9");
// user message for game winner & draw game 
const gameMessage = document.getElementById("game-message");
//reset button 
const resetBtn = document.getElementById("restart-btn"); 
//used to update the array.row values
const squareNumber = [[square1, square2, square3], [square4,square5,square6], [square7,square8,square9], [square1,square4,square7], [square2,square5,square8], [square3,square6,square9], [square7,square5,square3], [square1,square5,square9]];

// used in setting player turns
const circle = "o";
const x = "x";
// turn tracker 
let turn = circle;
//game state won || draw = true
let gameComplete = false;
//used on winning squares to modify classes for style changes
let winningSquares; 

// on click change to either X || O if td element is " " THEN check if win or draw game
document
  .querySelector('tbody')
  .addEventListener('click', ({ target }) => {

    if (target.innerHTML == "" && gameComplete === false){
		  target.innerHTML = `${turn}`;  
      gameCheck();
    } else {   
      //If user clicks on a filled table cell -- DO NOTHING
    }
});

//reloads webpage 
resetBtn.addEventListener("click" , () => {
  window.location.reload();// reload the current page
}) 

// change turn value THEN call gameStatus function
function changeTurn(){
  if(turn === "o"){
    turn = x;
    cpuTurn();
  } else {
    turn = circle;
  }
}

//logic for how cpu decides its turn 
function cpuTurn(){

  //xx is highest -- means cpu can WIN this turn 
for (let i = 0; i < array.length; i++){
  if(array[i].row == "xx"){
    cpuMoveSet(i); 
    return;
  } else {
    //DO NOTHING
  }
}

//oo -- need to break line to not lose game 
for (let i = 0; i < array.length; i++){
  if(array[i].row == "oo"){
    cpuMoveSet(i); 
    return;
  } else {
    //DO NOTHING
  }
}

//x -- Add on to line no other priorities 
for (let i = 0; i < array.length; i++){
  if(array[i].row == "x"){
    cpuMoveSet(i); 
    return;
  } else {
    //DO NOTHING
  }
}

// No X's RANDOM SELECT  
//select number between 0 - 7 to determine which array.row index value to use 
const minCeiled = Math.ceil(0);//smallest integer greater than or equal to a give number. 
const maxFloored = Math.floor(7);//largest interger less than or equal to a given number. 
cpuMoveSet(Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled));
return;
}

//set innerHTML for cpu turn 
function cpuMoveSet(selected){
//iterate through squareNumber[selected] and find the space that is "" THEN set that value to x 
  for(i=0; i < squareNumber[selected].length; i++){
   if(squareNumber[selected][i].innerHTML === ""){
      squareNumber[selected][i].innerHTML = "x";
      gameCheck();
      return;

    } else {
      //DO Nothing 
    }
  }   
}

//iterate through relevant array values to check if either game over, won, or continue
function gameCheck(){
  let endLoop = false;//used to end for loop if win conditions met 
  let winner = "";//used to pass winner value to gameWon function
  
  //update array.row values
  for (let i = 0; i < array.length; i++){
    array[i].row = [squareNumber[i][0].innerHTML + squareNumber[i][1].innerHTML + squareNumber[i][2].innerHTML];
  }
  
  
  for (let i = 0; i <= array.length; i++) {
    let check = "";

    if (endLoop === true){// if win condition met end for loop and run gameWon function
      return gameWon(winner);
    }

    if (i < array.length){
      check = array[i].row;
    }
    else {
      check = "";
    }
    
    switch (true) {
     case check.includes("xxx"):
     case check.includes("ooo"):
      endLoop = true;
      winner = array[i].row;
      winningSquares = i; 
      break;
    case check.includes("xxo"):
    case check.includes("xox"):
    case check.includes("oxx"):
    case check.includes("oox"):
    case check.includes("oxo"):
    case check.includes("xoo"):
    case check.includes("xo"):
    case check.includes("ox"):
      array[i].winnable = false;
      break;
    case check.includes("xx"):
    case check.includes("oo"):
    case check.includes("x"):
    case check.includes("o"):
    case check.includes(""):
      break;
    default:
      break;
    }
  }
  //call winnableCheck function to check if game still winnable 
  winnableCheck();
}

//winnable check funciton -- IF TRUE change turn function ELSE Draw game 
function winnableCheck(){
  //if no match result will be undefined
  const result = array.find(({ winnable }) => winnable === true);

  if(result === undefined){//if result is undefined the game is a draw
    drawGame();
  }else { //else call the changeTurn function
    changeTurn();
  }

}

//Game is a draw
function drawGame (){
  gameComplete = true; 
  gameMessage.innerHTML = "Draw game";
} 

//Game has been won 
function gameWon(winner){
  gameComplete = true; 
  //Set .winner class to winning squares 
  for (i = 0; i < 3; i++){
    squareNumber[winningSquares][i].classList.add("winner"); 
  }
  
  if (winner == "xxx"){
    gameMessage.innerHTML = "X is the winner!";
    
  }else {
    gameMessage.innerHTML = "O is the winner!"; 
  }
}

let array = [
  //horizontal row 1
  {row: [square1.innerHTML + square2.innerHTML + square3.innerHTML], winnable: true},
  //horizontal row 2 
  {row: [square4.innerHTML + square5.innerHTML + square6.innerHTML], winnable: true},
  //horizontal row 3
  {row: [square7.innerHTML + square8.innerHTML + square9.innerHTML], winnable: true},
  //vertical row 1
  {row: [square1.innerHTML + square4.innerHTML + square7.innerHTML], winnable: true},
  //vertical row 2
  {row: [square2.innerHTML + square5.innerHTML + square8.innerHTML], winnable: true},
  //vertical row 3
  {row: [square3.innerHTML + square6.innerHTML + square9.innerHTML], winnable: true},
  //diagonal row 1 
  {row: [square7.innerHTML + square5.innerHTML + square3.innerHTML], winnable: true},
  //diagonal row 2 
  {row: [square1.innerHTML + square5.innerHTML + square9.innerHTML], winnable: true},
 ];
 



