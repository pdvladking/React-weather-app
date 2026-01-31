import { useState } from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Background from "./components/Background";

function App() {
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=YOUR_API_KEY&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error("Error fetching weather:", error);
    }
  };

  // Determine condition for background
  const condition = weather?.weather?.[0]?.main || "Clear";

  return (
    <div className="min-h-screen flex flex-col">
      {/* Dynamic background */}
      <Background condition={condition} />

      {/* Overlay content */}
      <div className="absolute inset-0 flex flex-col items-center">
        <Header />
        <SearchBar onSearch={fetchWeather} />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
}

export default App;