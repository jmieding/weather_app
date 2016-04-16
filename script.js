
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
  document.getElementById('city').innerHTML = city;
}