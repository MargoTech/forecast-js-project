import { useWeather } from "./hooks/useWeather";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

export default function App() {
  const { data, loading, error, fetchWeather } = useWeather();

  return (
    <div>
      <h1>Weather Forecast</h1>
      <SearchBar onSearch={fetchWeather} />

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <div><WeatherCard data={data} /></div>}
    </div>
  );
}

export default App
