function WeeklyWeatherCard({ forecast }) {
  if (!forecast) {
    return <p className="text-center text-gray-500">Search for a city to see weekly forecast.</p>;
  }

  // Group forecast data by date
  const daily = {};
  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(' ')[0];
    if (!daily[date]) daily[date] = [];
    daily[date].push(item);
  });

  // Get 7 days
  const days = Object.keys(daily).slice(0, 7);

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {days.map((date) => {
        const temps = daily[date].map((d) => d.main.temp);
        const avgTemp = (temps.reduce((a, b) => a + b, 0) / temps.length).toFixed(1);
        const condition = daily[date][0].weather[0].main;

        return (
          <div
            key={date}
            className="bg-white shadow-md rounded-lg p-4 text-center hover:shadow-lg transition"
          >
            <h3 className="font-bold text-lg mb-2">{date}</h3>
            <p className="text-xl font-semibold">🌡️ {avgTemp}°C</p>
            <p className="text-gray-600">{condition}</p>
          </div>
        );
      })}
    </div>
  );
}
export default WeeklyWeatherCard;
