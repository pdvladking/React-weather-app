const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const BASE_URL = "https://api.openweathermap.org/data/2.5"

//current weather
export async function fetchCurrentWeather(city) {
  const res = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  )
  if (!res.ok) {
    throw new Error("Failed to fetch current weather")
  }
  return res.json()
}

// weekly forecast
export async function fetchWeeklyWeather(city) {
  const res = await fetch (
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  )
  if (!res.ok) {
    throw new Error("Failed to fetch forecast")
  }
  return res.json()
}

