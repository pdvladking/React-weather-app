import { useState } from 'react';
import { fetchWeather } from './api/weather';
import Layout from './component/Layout';
import SearchBar from './component/SearchBar';
import WeatherCard from './component/WeatherCard';

function App() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (city) => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchWeather(city);
      setWeather(data);
    } catch (err) {
      setError(err.message || 'City not found or API error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout>
      <h1 className="text-4xl font-extrabold text-blue-700 mb-8 text-center">Weather App</h1>
      <SearchBar onSearch={handleSearch} />
      <WeatherCard weather={weather} loading={loading} error={error} />
    </Layout>
  );
}

export default App;
