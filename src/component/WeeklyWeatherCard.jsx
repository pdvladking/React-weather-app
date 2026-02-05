import {
  WiDaySunny,
  WiCloud,
  WiRain,
  WiSnow,
  WiThunderstorm,
  WiFog,
} from "react-icons/wi";

// 🎨 Icon + animation mapping
const weatherIcons = {
  Clear: <WiDaySunny className="text-4xl text-yellow-600 animate-float" />,
  Clouds: <WiCloud className="text-4xl text-gray-700 animate-pulse" />,
  Rain: <WiRain className="text-4xl text-blue-600 animate-drip" />,
  Snow: <WiSnow className="text-4xl text-blue-400 animate-float" />,
  Thunderstorm: <WiThunderstorm className="text-4xl text-purple-700 animate-pulse" />,
  Mist: <WiFog className="text-4xl text-gray-500 animate-float" />,
};

// 🎨 Background gradient mapping
const weatherBackgrounds = {
  Clear: "bg-gradient-to-r from-yellow-200 to-yellow-400",
  Clouds: "bg-gradient-to-r from-gray-200 to-gray-400",
  Rain: "bg-gradient-to-r from-blue-200 to-blue-500",
  Snow: "bg-gradient-to-r from-blue-100 to-blue-300",
  Thunderstorm: "bg-gradient-to-r from-purple-300 to-purple-600",
  Mist: "bg-gradient-to-r from-gray-100 to-gray-300",
};

function WeeklyWeatherCard({ forecast }) {
  if (!forecast) {
    return (
      <p className="text-center text-gray-500">
        Search for a city to see weekly forecast.
      </p>
    );
  }

  // Group forecast data by date
  const daily = {};
  forecast.list.forEach((item) => {
    const date = item.dt_txt.split(" ")[0];
    if (!daily[date]) daily[date] = [];
    daily[date].push(item);
  });

  const days = Object.keys(daily).slice(0, 7);

  function getDayName(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      month: "short",
      day: "numeric",
    });
  }

  return (
    <div className="grid grid-cols-2 gap-4 mt-6">
      {days.map((date) => {
        const temps = daily[date].map((d) => d.main.temp);
        const avgTemp = (
          temps.reduce((a, b) => a + b, 0) / temps.length
        ).toFixed(1);
        const condition = daily[date][0].weather[0].main;
        const icon = weatherIcons[condition] || <WiDaySunny className="text-4xl animate-float" />;
        const bg = weatherBackgrounds[condition] || "bg-white";

        return (
          <div
            key={date}
            className={`${bg} shadow-md rounded-lg p-4 text-center hover:shadow-lg transition`}
          >
            <h3 className="font-bold text-lg mb-2">{getDayName(date)}</h3>
            <p className="mb-2">{icon}</p>
            <p className="text-xl font-semibold">🌡️ {avgTemp}°C</p>
            <p className="text-gray-700 font-medium">{condition}</p>
          </div>
        );
      })}
    </div>
  );
}

export default WeeklyWeatherCard;