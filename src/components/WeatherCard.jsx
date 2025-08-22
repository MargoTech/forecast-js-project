export default function WeatherCard({ data }) {
  const { main, weather, name } = data;
  return (
    <div>
      <h2>{name}</h2>
      <p>{main.temp}°C</p>
      <p>{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto"
      />
    </div>
  );
}
