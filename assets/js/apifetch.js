var apiKey = "b38fe3f237a509f2859b965513f8c249"
let cardContainer = document.getElementById('card-box')

function fetchAPI(userInput) {
    return fetch("https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&language=en-US&query=" + userInput + "&page=1&include_adult=false")
    .then((response) => response.json())
    // .then(function (response) { })
}

function search(event) {
  event.preventDefault();
  var userInput = document.getElementById('search-input').value;
  
 

  fetchAPI(userInput)
      .then((data) => {
        const movieData = data;
        for (let index = 0; index < movieData.results.length; index++) {
          const movieResults = movieData.results[index];
          console.log(movieResults)
        let movieTitle = movieResults.title
        let moviePoster = movieResults.poster_path
        let movieReleaseDate = movieResults.release_date
        let movieOverview = movieResults.overview
        let movieScore = movieResults.vote_average
        let cardDiv = document.createElement("div")
        cardDiv.setAttribute("class", "pure-u-1-5 card")
        cardContainer.appendChild(cardDiv)
        let movieTitleEl = document.createElement('h1')
        movieTitleEl.textContent = movieTitle
        cardDiv.appendChild(movieTitleEl)

        console.log(movieOverview)
        console.log(movieTitle);
        console.log(moviePoster)
      }
      });
    }







//RANDOM BUTTON 
// var randomMovie = document.querySelector('#random');

// function randompage(){

//   location.assign(./randomPage.html);
// }

// randomMovie.addEventListener('on-click', randompage);

// ______________________________________

document.getElementById('search-form').addEventListener("submit", search);

