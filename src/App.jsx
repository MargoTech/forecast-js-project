import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const { data, loading, error, fetchWeather, history } = useWeather();

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={fetchWeather} />

      {history.length > 0 && (
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          {history.map((city, i) => (
            <button
              key={i}
              onClick={() => fetchWeather(city)}
              className="px-3 py-1 bg-white/20 rounded-lg"
            >
              {city}
            </button>
          ))}
        </div>
      )}

      {loading && <p className="mt-4">Loading...</p>}
      {error && <p className="mt-4 text-red-300">{error}</p>}
      {data && (
        <div className="mt-6">
          <WeatherCard data={data} />
        </div>
      )}
    </div>
  );
}
