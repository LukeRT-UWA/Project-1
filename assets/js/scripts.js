
//RANDOM BUTTON 
var randomMovie = document.querySelector('#random');

function randompage(){

  location.assign(./randomPage.html);
}

randomMovie.addEventListener('on-click', randompage);
