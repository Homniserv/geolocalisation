(function () {
    var x = document.getElementById("demo");
    console.log("in JS");
    function getLocation() {
        if (navigator.geolocation) {
            console.log("geo OK");
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            console.log("geo KO");
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
    }

    getLocation();
 console.log("end JS");
})();
