/*
    Assignment #4
    {Your name here}
*/
$(document).ready(function () {
    // you can modify this code only nothing else in the file
    var x = document.getElementById("content");
  
    // fetching the previous lat and long stored in localStorage
    // previousLat and previousLong will be null if they aren't available in localstorage
    var previousLat = localStorage.getItem("lat");
    var previousLong = localStorage.getItem("long");
  
    if (previousLat && previousLong) {
      // preivousLat and previsousLong is availabe... display appropriate message
      x.innerHTML +=
        "<br>Previous Latitude: " +
        previousLat +
        "<br>Previous Longitude: " +
        previousLong;
    } else {
      // if no previos lat and long is availble, then user is visiting the page for the first time
      // so appropriate message for that
      x.innerHTML += "Welcome";
    }
  
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  
    function showPosition(position) {
      var latitude = position.coords.latitude;
      var longitude = position.coords.longitude;
  
      x.innerHTML +=
        "<br>Current Latitude: " +
        latitude +
        "<br>Current Longitude: " +
        longitude;
  
      // saving current location in localStorage
      localStorage.setItem("lat", position.coords.latitude);
      localStorage.setItem("long", position.coords.longitude);
  
      if (previousLat && previousLong) {
        // calculating distance between previous and current location
        const distance = calcDistance(
          previousLat,
          previousLong,
          latitude,
          longitude
        );
        x.innerHTML +=
          "<br>Distance between previous and current location: " + distance;
      }
    }
  
    // function to calculate the distance in metres between two lat/long pairs on Earth
    // Haversine formula - https://en.wikipedia.org/wiki/Haversine_formula
    // Aren't those cool variable names? Yah gotta love JavaScript
    function calcDistance(lat1, lon1, lat2, lon2) {
      var toRadians = function (num) {
        return (num * Math.PI) / 180;
      };
      var R = 6371000; // radius of Earth in metres
      var φ1 = toRadians(lat1);
      var φ2 = toRadians(lat2);
      var Δφ = toRadians(lat2 - lat1);
      var Δλ = toRadians(lon2 - lon1);
  
      var a =
        Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) * Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
      return R * c;
    }
  });
  
