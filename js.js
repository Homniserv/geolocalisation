(function () {
    var x = document.getElementById("demo");
    console.log("in JS....x=" + x);
    function getLocation() {
        if (navigator.geolocation) {
            console.log("geo OK");
            /**  https://www.w3schools.com/html/html5_geolocation.asp */
            navigator.geolocation.getCurrentPosition(showPosition);
            console.log("pos=" + navigator.geolocation.getCurrentPosition());
        } else {
            console.log("geo KO");
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function showPosition(position) {
        console.log("in showPosition");
        x.innerHTML = "Latitude: " + position.coords.latitude +
                "<br>Longitude: " + position.coords.longitude;
    }

    //getLocation();//moi









    /**https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/getCurrentPosition*/
    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);
    }

    function error(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    var posit = navigator.geolocation.getCurrentPosition(success, error, options);
    console.log("pos=" + posit);
  console.log("pos=" + posit.coords;


    console.log("end JS");
})();
