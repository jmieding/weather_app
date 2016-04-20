window.onload = function() {
  // Geolocate by IP. Script called in home.html
  var city = geoplugin_city();
  var state = geoplugin_region();
  document.getElementById('location').innerHTML = city +', ' + state;
  
  // Download Openweather Data
  var request = new XMLHttpRequest();
  request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8d3803d9f1c6b28d9f0d403ebd39fa45", false);
  request.send();
  
  var json = JSON.parse(request.responseText);
  var temp = Math.round(json.main.temp);
  document.getElementById('temp').innerHTML = temp + ' F';
  
  // Weather icon
  var iconId = json.weather[0].icon;
  document.getElementById('img').innerHTML = "<img src=http://openweathermap.org/img/w/" + iconId + ".png>";

  // Status
  var weatherSummary = json.weather[0].description;
  document.getElementById('summary').innerHTML = weatherSummary;

  // Windspeed and direction
  var windSpeed = json.wind.speed;
  var windDirectionDegrees = json.wind.deg;
  var windDirection;
  if (windDirectionDegrees > 338 | windDirectionDegrees < 22) {
    windDirection = "N";
  } else if (windDirectionDegrees >= 22 && windDirectionDegrees < 68) {
     windDirection = "NE";
  } else if (windDirectionDegrees >= 68 && windDirectionDegrees < 112) {
     windDirection = "E";
  } else if (windDirectionDegrees >= 112 && windDirectionDegrees < 158) {
     windDirection = "SE";
  } else if (windDirectionDegrees >= 158 && windDirectionDegrees < 202) {
     windDirection = "S";
  } else if (windDirectionDegrees >= 202 && windDirectionDegrees < 248) {
     windDirection = "SW";
  } else if (windDirectionDegrees >= 248 && windDirectionDegrees < 292) {
     windDirection = "W";
  } else {
     windDirection = "NW";
  };
  document.getElementById('wind').innerHTML = windDirection + ' ' + windSpeed + 'mph';

  // Body background image changes with temperature
  var body = document.getElementsByTagName('body');
  if (temp >= 88) {
    body.style.backgroundImage = "url('desert-1007157.jpg')";
  } else if (temp >= 67 && temp < 88) {
    body.style.backgroundImage = "url(beach-656734.jpg)";
  } else if (temp >= 50 && temp < 67) {
    body.style.backgroundImage = "url(lake-65443.jpg)";
  } else if (temp > 38 && temp < 50) {
    body.style.backgroundImage = "url('forest-605505.jpg')";
  } else {
    body.style.backgroundImage = "url('winter-20234.jpg')";
  }
};