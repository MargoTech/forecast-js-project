import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city);
    }
  };

  return (
    <div className="flex w-full max-w-sm gap-2">
      <input
        type="text"
        placeholder="Enter city"
        className="flex-1 p-3 rounded-l-xl border-0 outline-none text-black"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={handleSearch}
        className="bg-yellow-400 hover:bg-yellow-500 px-6 rounded-r-xl font-bold text-black transition-colors"
      >
        Forecast
      </button>
    </div>
  );
}
