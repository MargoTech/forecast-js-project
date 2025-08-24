import { useState, useEffect } from "react";

export function useWeather() {
  const [data, setData] = useState(null);
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
      const json = await res.json();
      setData(json);

      const updatedHistory = [city, ...history.filter((c) => c !== city)].slice(
        0,
        5
      );
      setHistory(updatedHistory);
      localStorage.setItem("history", JSON.stringify(updatedHistory));
    } catch (err) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchWeather };
}
