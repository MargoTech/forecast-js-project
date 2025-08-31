import { useState } from "react";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export function useWeather() {
  const [data, setData] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [history, setHistory] = useState(
    JSON.parse(localStorage.getItem("history")) || []
  );

  const fetchWeather = async (city) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      if (!res.ok) throw new Error("City not found");
      const current = await res.json();
      setData(current);

      const resForecast = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
      );
      const forecastJson = await resForecast.json();

      const daily = forecastJson.list.filter((item) =>
        item.dt_txt.includes("12:00:00")
      );

      setForecast(daily);

      const updatedHistory = [city, ...history.filter((c) => c !== city)].slice(
        0,
        5
      );
      setHistory(updatedHistory);
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    } catch (err) {
      setError(err.message);
      setData(null);
      setForecast([]);
    } finally {
      setLoading(false);
    }
  };

  return { data, forecast, loading, error, fetchWeather, history };
}
