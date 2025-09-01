export default function ForecastCard({ day }) {
  const date = new Date(day.dt * 1000);
  const options = { weekday: "short", day: "numeric", month: "short" };
  const formattedDate = date.toLocaleDateString("en-US", options);

  return (
    <div className="bg-white/20 p-4 rounded-2xl text-center shadow-md w-28">
      <p className="font-semibold">{formattedDate}</p>
      <img
        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
        alt={day.weather[0].description}
        className="mx-auto"
      />
      <p className="text-lg font-bold">{Math.round(day.main.temp)}°C</p>
      <p className="text-sm capitalize">{day.weather[0].description}</p>
    </div>
  );
}
