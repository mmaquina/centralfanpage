//import { API_KEY } from "secrets.js";

const inputVal = "rosario";

var data = {
    "coord": {
      "lon": 10.99,
      "lat": 44.34
    },
    "weather": [
      {
        "id": 501,
        "main": "Rain",
        "description": "moderate rain",
        "icon": "10d"
      }
    ],
    "base": "stations",
    "main": {
      "temp": 298.48,
      "feels_like": 298.74,
      "temp_min": 297.56,
      "temp_max": 300.05,
      "pressure": 1015,
      "humidity": 64,
      "sea_level": 1015,
      "grnd_level": 933
    },
    "visibility": 10000,
    "wind": {
      "speed": 0.62,
      "deg": 349,
      "gust": 1.18
    },
    "rain": {
      "1h": 3.16
    },
    "clouds": {
      "all": 100
    },
    "dt": 1661870592,
    "sys": {
      "type": 2,
      "id": 2075663,
      "country": "IT",
      "sunrise": 1661834187,
      "sunset": 1661882248
    },
    "timezone": 7200,
    "id": 3163858,
    "name": "Zocca",
    "cod": 200
  }      

const API_KEY = "secret";
const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${API_KEY}&units=metric`;

console.log(url)
  fetch(url)
  .then(response => response.json())
  .then(newData => {
    data = newData;
    const { main, name, sys, weather } = data;
    const icon = `https://openweathermap.org/img/wn/${
      weather[0]["icon"]
    }@2x.png`;
    const li = document.getElementById("weather");
    const markup = ` 
    <h2 class="city-name" data-name="${name},${sys.country}"> 
    <span>${name}</span> 
    <sup>${sys.country}</sup> 
    </h2> 
    <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> 
    </div> 
    <figure> 
    <img class="city-icon" src=${icon} alt=${weather[0]["main"]}> 
    <figcaption>${weather[0]["description"]}</figcaption> 
    </figure> 
    `;
    li.innerHTML = markup;

  })
  .catch(() => {
    console.log("Please search for a valid city 😩");
  });


