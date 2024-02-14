const API_KEYS = "f07dd54f9c4bbdb9fef43361edd869e0";
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEYS}&units=metiric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  //alert("Can't find you, No weather for you.");
  console.log("Can't find you, No weather for you.");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
