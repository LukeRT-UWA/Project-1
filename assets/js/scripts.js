
//RANDOM BUTTON 
var randomMovie = document.querySelector('#random');

function randompage(){

  location.assign(./randomPage.html);
}

randomMovie.addEventListener('on-click', randompage);





//Trying to get a movie trailer

tmdbAPIkey = ;
movieID = document.getElementById("userSearch").value;

requestURL = "https://api.themoviedb.org/3/movie/" + movieID + "/videos?" + tmdbAPIkey + "=<<api_key>>&language=en-US"

function getApi(requestURL) {
  fetch(requestUrl)
    .then(function (response) {
      console.log(response);
      if (response.status === 200) {
        responseText.textContent = response.status;
      }
      return response.json();
  });
}

getApi(requestURL);

function landingSearch () {
  //grab user input
  //get trailer - responce.result.type
}

//Video player
mediabox = document.getElementById("my-video");

mediaSource = mediabox.setAttribute("src", medialink);

mediaLink = responce.results.type.traier 
//append

