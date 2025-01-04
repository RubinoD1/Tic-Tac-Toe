// DOM 

// turn tracker 

// on click change to either X || O if td element is "" THEN check if win or draw game




document
  .querySelector('tbody')
  .addEventListener('click', ({ target }) => {
    console.log(target.id, target.innerHTML);
    

  });