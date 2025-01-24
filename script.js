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

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("City is not founded");
      }
      return response.json();
    })
    .then((data) => {
      const temp = data.main.temp;
      const description = data.weather[0].description;
      const city = data.name;
      const iconCode = data.weather[0].icon;

      const weatherResults = document.getElementById("weatherResults");
      const message = `There is ${temp}°C, ${description} in ${city}.`;

      weatherResults.innerHTML = `
        <p>${message}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt="Weather icon">`;
    })
    .catch((error) => {
      console.error(error);
      weatherResults.textContent = "Failed to retrieve weather data";
    });
});
