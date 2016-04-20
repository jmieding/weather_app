window.onload = function() {
  // Geolocate by IP. Script called in home.html
  var city = geoplugin_city();
  var state = geoplugin_region();
  document.getElementById('location').innerHTML = city +', ' + state;
  
  // Download Openweather Data
  var requestCurrentWeather = new XMLHttpRequest();
  requestCurrentWeather.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8d3803d9f1c6b28d9f0d403ebd39fa45", false);
  requestCurrentWeather.send();
  
  var json = JSON.parse(requestCurrentWeather.responseText);
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
  temp = 20;
  if (temp >= 88) {
    document.body.style.backgroundImage = "url('desert-1007157.jpg')";
  } else if (temp >= 67 && temp < 88) {
    document.body.style.backgroundImage = "url('beach-656734.jpg')";
  } else if (temp >= 50 && temp < 67) {
    document.body.style.backgroundImage = "url('lake-65443.jpg')";
  } else if (temp > 38 && temp < 50) {
    document.body.style.backgroundImage = "url('forest-605505.jpg')";
  } else {
    document.body.style.backgroundImage = "url('winter-20234.jpg')";
    document.getElementById('temp').style.color = "black";
    var h2 = document.getElementsByTagName('h2');
    h2.style.color = "black";
  };
  // Download Forecast Data
  //var requestForecast = new XMLHttpRequest();
  //requestForecast.open("GET", "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=8d3803d9f1c6b28d9f0d403ebd39fa45", false);
  //requestForecast.send();
};