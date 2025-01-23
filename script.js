const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResults = document.getElementById("weatherResults");

getWeatherBtn.addEventListener("click", function () {
  const cityName = cityInput.value.trim();
  if (cityName === "") {
    weatherResults.textContent = "Please, add your city!";
  } else {
    weatherResults.textContent = `You choose city: ${cityName}`;
  }
});
