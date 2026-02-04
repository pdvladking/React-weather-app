function WeatherCard({ weather, loading, error }) {
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!weather) return <p>Search for a city to see weather.</p>;

  return (
    <div className="bg-white shadow-lg rounded-xl p-6 max-w-sm mx-auto text-center">
      <h2 className="text-2xl font-bold mb-2">{weather.name}</h2>
      <p className="text-lg font-semibold">🌡️ {weather.main.temp}°C</p>
      <p className="text-gray-600">💧 Humidity: {weather.main.humidity}%</p>
      <p className="text-gray-600">💨 Wind {weather.wind.speed} m/s</p>
    </div>
  );
}
export default WeatherCard;
