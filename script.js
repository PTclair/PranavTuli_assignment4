/*
    Assignment 4
    {Pranav Tuli}
*/

$(document).ready(function() {
    // your code here

    localStorage.setItem("WEB303", "Section 2");
    navigator.geolocation.getCurrentPosition((position) => {
        $('.latitude').eq(0).html("The latitude is: " + position.coords.latitude);
        $('.longitude').eq(0).html(`The longitude is: ${position.coords.longitude}`);
        $('.accuracy').eq(0).html('With a level of accuracy of: ' + position.coords.accuracy + " Meters");
        console.log(localStorage.getItem("WEB303"));


        console.log(localStorage.getItem("WEB303"));
        history.pushState({ page_id: 1 }, "Testing", "index.html");
        var lat1 = "42.3118013";
        var lon1 = "-83.0592212";
        var lat2 = "44.3118013";
        var lon2 = "-81.0592212";
        calcDistance(lat1, lon1, lat2, lon2)
    }, () => {
        $('#error').text("We cannot display your coordinates unless you allow access to your location");
    });





    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript


    function calcDistance(lat1, lon1, lat2, lon2) {
        debugger;
        var toRadians = function(num) {
            num * Math.PI / 180;
            console.log(num);
            return num;
        }
        var R = 6371000; // radius of Earth in metres
        var φ1 = toRadians(lat1);
        var φ2 = toRadians(lat2);
        var Δφ = toRadians(lat2 - lat1);
        var Δλ = toRadians(lon2 - lon1);

        var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) + Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var num1 = (R * c);

        console.log(num1);
        return num1;

    }
});