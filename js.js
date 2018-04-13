(function(){
var x = document.getElementById("demo");
    console.log("in JS");
function getLocation() {
    if (navigator.geolocation) {
        console.log("geo KO");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude; 
}


})();
