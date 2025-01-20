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
    console.log(target.id, target.innerHTML);
    if (target.innerHTML = " "){
      // set class to icon value
      //  target.classList.add(`${turn}`);
      target.innerHTML = `${turn}`;
      // change turn value 
      changeTurn();
    } else {
      console.log("filled");//REPLACE WITH break instead once testing done
    }

  });

// change turn value THEN call gameStatus function
function changeTurn(){
  if(turn === "o"){
    turn = x;
    // check if win || draw condition met

  } else {
    turn = circle;
    // check if win || draw condition met

  }
  return; //redundant once gameStatus function in place
}

//iterate through relevant array values to check if either game over, won, or continue
function gameCheck(){

 let check = array[1].row;
 //console.log(check, "this is check");
 //console.log(check.includes('xxx'));
 
 switch (true) {
  case check.includes('xxx'):
   console.log("Includes 3 x -- GAME WON")
   break;
 case check.includes("ooo"):
   console.log('Includes 3 o -- GAME WON');
   break;
 case check.includes("xxo"):
 case check.includes("xox"):
 case check.includes("oxx"):
 case check.includes("oox"):
 case check.includes("oxo"):
 case check.includes("xoo"):
   console.log('INCLUDES TWO MATCHES & a opposite -- SET TO UNWINNABLE');
   break;
 case check.includes("xx"):
 case check.includes("oo"):
   console.log('INCLUDES TWO MATCHES -- GAME CONTINUES');
   break;
 case check.includes("xo"):
 case check.includes("ox"):
   console.log('INCLUDES one MATCH & opposite -- SET TO UNWINNABLE');
   break;
 case check.includes("x"):
 case check.includes("o"):
   console.log('INCLUDES ONE MATCH -- GAME CONTINUES');
   break;
 default:
   console.log(`Default case -- NO MATCHES`);
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

 //  gameCheck(array[0].row);
gameCheck();