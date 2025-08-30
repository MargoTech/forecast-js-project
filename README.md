# 🌤 Forecast App

A modern **weather forecast app** built with **React**, **Vite**, and **TailwindCSS**.  
Search for any city worldwide and get **real-time weather data** instantly.  

---

## 🖼 Screenshot

![Forecast App Screenshot](./assets/screenshot.png)  

---

## 🚀 Features

- 🌍 Search for any city worldwide  
- 🌡️ Display current temperature, weather description, and icon  
- 🕑 History of last 5 searched cities  
- 📱 Responsive and mobile-friendly design  
- 🎨 Smooth gradients, hover effects, and shadows  
- 🔑 Environment variable support for API key  

---

## 💻 Tech Stack

- **React 18** – UI library  
- **Vite** – Build tool  
- **TailwindCSS 3.3** – Styling  
- **OpenWeatherMap API** – Weather data  

---

## ⚡ Live Demo

[🌐 View Demo on Netlify](https://68b07fafdb9374b93d2bdb20--forecats-app.netlify.app/)  

---

## 🛠 Installation

1. Clone the repository:
```bash
git clone https://github.com/MargoTech/forecast-js-project.git
cd forecast-app
Install dependencies:

bash
Copy code
npm install
Install TailwindCSS (if not already installed):

bash
Copy code
npm install -D tailwindcss@3.3.3 postcss autoprefixer
npx tailwindcss init -p
Create a .env file in the project root:

ini
Copy code
VITE_API_KEY=your_openweathermap_api_key
Run the development server:

bash
Copy code
npm run dev
Open http://localhost:5173 in your browser.

🗂 Project Structure
css
Copy code
src/
 ├─ components/
 │   ├─ WeatherCard.jsx
 │   ├─ SearchBar.jsx
 │   └─ Loader.jsx
 ├─ hooks/
 │   └─ useWeather.js
 ├─ App.jsx
 ├─ main.jsx
 └─ index.css
🔮 Future Improvements
🌗 Dark/Light mode toggle

°C / °F temperature switch

📅 5-day forecast

✨ Skeleton loader animation while fetching

⚡ React Query for caching API requests

💡 Tip: Keep your API key in .env and never commit it to GitHub.
