import { useState } from 'react';
import Header from './component/Header';
import SearchBar from './component/SearchBar';
import WeatherCard from './component/WeatherCard';
import Background from './component/background';

function App() {
  const [weather, setWeather] = useState(null);

  // Function to fetch weather data
  const fetchWeather = async (city) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=18ead549d83d488cd78bf57fc517177c&units=metric`
      );
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.error('Error fetching weather:', error);
    }
  };

  // Determine condition for background
  const condition = weather?.weather?.[0]?.main || 'Clear';

  return (
    <div className="min-h-screen flex flex-col relative">
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
