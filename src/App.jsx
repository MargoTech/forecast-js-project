import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const { data, loading, error, fetchWeather, history } = useWeather();

  return (
    <div lassName="min-h-screen flex flex-col items-center justify-start bg-gradient-to-b from-blue-500 to-blue-700 text-white p-6">
      <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
        Weather Forecast
      </h1>
      <SearchBar onSearch={fetchWeather} />

      {history.length > 0 && (
        <div className="mt-4 flex gap-2 flex-wrap justify-center">
          {history.map((city, i) => (
            <button
              key={i}
              onClick={() => fetchWeather(city)}
              className="px-4 py-2 bg-white/20 hover:bg-white/40 rounded-full transition-colors"
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
