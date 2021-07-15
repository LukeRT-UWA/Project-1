youtubeAPI = "AIzaSyB599Zhnh0IGZVuo2rk6h43K_6oBU2Bs28"

//get acess to Youtube API ready
function init() {
    gapi.client.setApiKey(youtubeAPI);
    gapi.client.load("youtube","v3","search",function(){
    });

function getyoutubeAPI() {
    
    const request = gapi.client.youtube.search.list({
        part: "snippet",
        type: "video",
        maxResults: 1,
        order: "viewCount",
        q: trailer|" ",
        videoDefinition: "high",
        videoEmbeddable: "true"
        }),
/*        
    request.execute(function(response) {
        var results = response.result;)
        }

const videoContainerEl = document.getElementById("video-container");    
const videoMedia = document.createElement("video");

videoMedia.setAttribute("class","screenaspect");
videoMedia.setAttribute("poster", "placeholder" *** poster image from TMDB)

videoContainerEl.append("videoMedia");
*/