// DOM 

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
      console.log("filled");
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

// Check if game won || is draw ELSE continue