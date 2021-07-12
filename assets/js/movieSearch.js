//Search

userInput = 

//grab input data and request data

//set up api responce - get JSON data


//requets title data

//requets date published data

//request rating data

//requets blurb

//requets movie poster

/* -- loop function for every responce
function getPosterSource(){

    url=/movie/{movie_id}/images
    posterSource = responce.poster

    *** will have to set up class
}

function movieSearchCard (searchOutput){
    for (let i = 0; i < searchOutput.lenght; i++){

    }
    //create small search card for every search output 


    const mainScreen = document.getElementbyId("div")
    mainScreen.setAttribute("class","pure-u-sm-1") 

    *small screen one card and flex wrap
    *medium screen 3 card and flex wrap
    *large screen 4 card and flex wrap
    *extra large screen 6 card and flex wrap 

    const infoContainer = document.createElement("div");

    posterEl = document.createElement("div");
    posterEl.setAttribute("class","pure-u-1-2");

    const smallPoster = document.createElement("img");
    smallPoster.setAttribute("src", posterSource);
    smallPoster.setAttribute("class","small-poster");

    posterEl.append(smallPoster);

    movieBriefEl = document.createElement("div");
    moveiBriedEl.setAttribute("class","pure-u-1-2");

    const movieTitle = document.createElement("p");

    genre buttons - function???
    loop
        function genreButton (genreOutput){
           for (let i = 0; i < searchOutput.lenght; i++)

            const genreButton = document.createElement("button");
            genreButton.setAttribute("class"," ");
            *inactive button

            genreButton.textcontent("genreOutput[]"); 

            } 
        }


    const movieTitle = document.createElement("p");
    movieTitle.textContent("")
    const moviePublished = document.createElement("p");
    moviePublished.textContent("")
    const movieDirector = document.createElement("p");
    movieDirector.textContent("")
    const movieWriter = document.createElement("p");
    movieWriter.textContent("")

    movieBriedEl.append(movieTitle,moviePublished,movieDirector,movieWriter);

    infoContainer.append(posterEl.movieBriefEl);

    mainScreen.append(infoContainer);
}
^^^
html of what the above is trying to do
<div>
    <div>
        <img src="">
    </div>

    <div>
        <h2>Movie Title</h2>
        <button>genre 1</button> -- loop function
        <p>Date published</p>
        <p>Director</p>
        <p>Writer</p>
        <i>Rating<i> -- if statement 
        <p>Blurb<p> -- only when more info pressed 
    </div>
</div>
*/

