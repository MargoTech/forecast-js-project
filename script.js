const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResults = document.getElementById("weatherResults");

const apiKey = "c8d69cfc7d78b8bcc8fcb039afb7167a";

getWeatherBtn.addEventListener("click", function () {
  const cityName = cityInput.value.trim();
  if (cityName === "") {
    weatherResults.textContent = "Please, add your city!";
  } else {
    weatherResults.textContent = `You choose city: ${cityName}`;
  }
});


const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

fetch(apiUrl)
  .then((response) => response.json());
  .then(data => {
    const temp = data.main.temp, 
    data.weather[0].description, 
    data.name});

    .catch(error => {
        console.error("Error:", error);
        weatherResults.textContent = "Failed to retrieve weather data";
    });


const weatherResults = document.getElementById("weatherResults");
const message = `There is ${data.main.temp}°C, ${data.weather[0].description} in ${data.name}.`; 

// weatherResults.textContent = message;
weatherResults.innerHTML = `
    <p>${message}</p>
    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">
`;
