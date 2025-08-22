import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city"
        className="p-2 border rounded-lg flex-1"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="px-4 py-2 bg-yellow-400 text-white rounded-lg"
      >
        Forecast
      </button>
    </div>
  );
}
