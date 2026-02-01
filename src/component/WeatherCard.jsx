function WeatherCard({ weather }) {
  if (!weather) return null;

  return (
    <div className="p-6 bg-white rounded shadow text-center">
      <h2 className="text-xl font-semibold">{weather.name}</h2>
      <p className="text-2xl">{weather.main.temp}°C</p>
      <p>{weather.weather[0].description}</p>

      <img src="{turbineImg}" alt="Weather illustration" className="mx-auto mt-4" />
    </div>
  );
}

export default WeatherCard;
