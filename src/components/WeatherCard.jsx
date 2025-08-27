export default function WeatherCard({ data }) {
  const { main, weather, name } = data;
  return (
    <div className="p-6 bg-white/20 backdrop-blur-md rounded-2xl shadow-lg text-center text-white">
      <h2 className="text-2xl font-bold mb-2">{name}</h2>
      <p className="text-5xl font-extrabold">{main.temp}°C</p>
      <p className="capitalize text-lg">{weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`}
        alt="weather icon"
        className="mx-auto mt-4"
      />
    </div>
  );
}
