
// 1) Automatic call to weather api returning location.

// 2) Weather returns data for location.
// -Temp
// -Humidity
// -Appx location
// -5 day forecast?

// 3) return background picture based on data

// What cases do we need?

// cold and clear = <45 cold
// cold and rainy = <50 + rain = cold rain
// V cold <50 = picture of snow
// V moderate = 50 - 65 fall trees
// V warm and sunny = 66 - 88 beach
// V hot and sunny = >88 desert

// 4) make it all look pretty



window.onload = function() {
  var city = geoplugin_city();
  var state = geoplugin_region();
  document.getElementById('location').innerHTML = city +', ' + state;
  
  var request = new XMLHttpRequest();
  request.open("GET", "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=8d3803d9f1c6b28d9f0d403ebd39fa45", false);
  request.send();
  
  var json = JSON.parse(request.responseText);
  var temp = Math.round(json.main.temp);
  // document.getElementById('temp').innerHTML = json.weather[0].description;
  
  // var iconId = json.weather[0].icon;
  // document.getElementById('img').innerHTML = "<img src=\'http://openweathermap.org/img/w/\' + iconId + \'.png\'/>"

  var weatherSummary = json.weather[0].description;
  document.getElementById('summary').innerHTML = weatherSummary;

  var windSpeed = json.wind.speed;
  var windDirection = json.wind.deg;
  document.getElementById('wind').innerHTML = windSpeed + ', ' + windDirection + ' deg.';

  var body = document.getElementsByTagName('body')[0];
  if (temp >= 88) {
    body.style.backgroundImage = 'url(desert-1007157.jpg)';
  } else if (temp >= 67 && temp < 88) {
    body.style.backgroundImage = 'url(beach-656734.jpg)';
  } else if (temp >= 50 && temp < 67) {
    body.style.backgroundImage = 'url(lake-65443.jpg)';
  } else if (temp > 38 && temp < 50) {
    body.style.backgroundImage = 'url(forest-605505.jpg)';
  } else {
    body.style.backgroundImage = 'url(winter-20234)';
  }
};
