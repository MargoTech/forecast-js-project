const cityInput = document.getElementById("cityInput");
const getWeatherBtn = document.getElementById("getWeatherBtn");
const weatherResults = document.getElementById("weatherResults");

const apiKey = "c8d69cfc7d78b8bcc8fcb039afb7167a";

getWeatherBtn.addEventListener("click", async () => {
  const cityName = cityInput.value.trim();
  if (cityName) {
    renderError("Please enter a  city!");
    return;
  }

  try {
    renderLoading();
    const data = await fetchWeather(cityName);
    renderWeather(data);
  } catch (error) {
    renderError(error.message);
  }
});

async function fetchWeather(city) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error("City is not founded");
  }

  return response.json();
}

function renderWeather(data) {
  const { temp } = data.main;
  const { description, icon } = data.weather[0];
  const { name } = data;

  weatherResults.innerHTML = `
        <p>There is ${temp}°C, ${description} in ${name}./p>
        <img src="https://openweathermap.org/img/wn/${iconCode}.png" alt="Weather icon" />
     `;
}

function renderError(message) {
  weatherResults.innerHTML = `<p style="color: red;">${message}</p>`;
}

function renderLoading() {
  weatherResults.innerHTML = `<p>Loading...</p>`;
}
