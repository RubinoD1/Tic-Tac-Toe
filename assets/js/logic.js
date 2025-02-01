// DOM 
const square1 = document.getElementById("1");
const square2 = document.getElementById("2");
const square3 = document.getElementById("3");
const square4 = document.getElementById("4");
const square5 = document.getElementById("5");
const square6 = document.getElementById("6");
const square7 = document.getElementById("7");
const square8 = document.getElementById("8");
const square9 = document.getElementById("9");

// used to set class value for icon image
const circle = "o";
const x = "x";
// turn tracker 
let turn = circle;

// on click change to either X || O if td element is " " THEN check if win or draw game
document
  .querySelector('tbody')
  .addEventListener('click', ({ target }) => {
    //console.log(target.id, target.innerHTML);

    if (target.innerHTML !== ""){
      console.log("filled");//REPLACE WITH break instead once testing done
    } else {      
      target.innerHTML = `${turn}`;
      
      for (let i = 0; i < array.length; i++){
        //iterate through array and update array.row values
        const squareNumber = [[square1, square2, square3], [square4,square5,square6], [square7,square8,square9], [square1,square4,square7], [square2,square5,square8], [square3,square6,square9], [square7,square5,square3], [square1,square5,square9]];
        array[i].row = [squareNumber[i][0].innerHTML + squareNumber[i][1].innerHTML + squareNumber[i][2].innerHTML];
        //console.log(array[i].row, " array row value");
        
      }

      gameCheck();
    }

  });

// change turn value THEN call gameStatus function
function changeTurn(){
  if(turn === "o"){
    turn = x;
  } else {
    turn = circle;
  }
  return turn; //redundant once gameStatus function in place
}

//iterate through relevant array values to check if either game over, won, or continue
function gameCheck(){
  let endLoop = false;//used to end for loop if win conditions met 
  let winner = "";//used to pass winner value to gameWon function
  for (let i = 0; i < array.length; i++) {
    let check = array[i].row;
    //console.log(i);
    
    if (endLoop === true){// if win condition met end for loop and run gameWon function
      return gameWon(winner);
    }

    switch (true) {
     case check.includes('xxx'):
     case check.includes("ooo"):
      console.log("Includes 3 x -- GAME WON");
      endLoop = true;
      winner = array[i].row;
      break;
    case check.includes("xxo"):
    case check.includes("xox"):
    case check.includes("oxx"):
    case check.includes("oox"):
    case check.includes("oxo"):
    case check.includes("xoo"):
    //added two case -- check they work 
    case check.includes("xo"):
    case check.includes("ox"):
      console.log('INCLUDES TWO Types -- SET TO UNWINNABLE');
      array[i].winnable = false;
      console.log(array[i].winnable);
      break;
    case check.includes("xx"):
    case check.includes("oo"):
    //ADDED TEST STILL WORKING 
    case check.includes("x"):
    case check.includes("o"):
    case check.includes(""):
      console.log('INCLUDES ONE TYPE ONLY or NOTHING -- GAME CONTINUES');
      break;
    default:
      console.log(`Default case -- NO MATCHES`);
    }
  }
  //run winnable check function to check if game still winnable THEN continue game IF TRUE
  winnableCheck();
}

//winnable check funciton -- IF TRUE change turn function ELSE Draw game 
function winnableCheck(){
  //if no match result will be undefined
  const result = array.find(({ winnable }) => winnable === true);

  if(result === undefined){
    console.log("GAME OVER");
    //END GAME AS DRAW 

  }else {
    console.log("Winnable");
    // RUN NEXT TURN FUNCTION || CHANGE HERE 
    changeTurn();
  }

}


function gameWon(winner){
  if (winner === "xxx"){
    console.log("x has won the game!");
    
  }else {
    console.log("o has won the game!");
    
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
 
 // console.log(array[0].row);
 // console.log(array[1].winnable);
 //console.log(array[0].row, array[1].row);
 //console.log(array[1].row.includes("xxx"));
 //console.log(array[1].row.includes("xo"));
//console.log(array.length);
 //  gameCheck(array[0].row);
//gameCheck();

//const testArray = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [7,5,3], [1,5,9]];
//console.log(testArray[0] ,testArray[0][0]);
//testArray[i][0]