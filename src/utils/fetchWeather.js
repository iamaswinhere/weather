const API_KEY = 'b5b6dd292500f066a772e0e648f46042';
export const getForecastByCoords = async (lat, lon) => {
  const res = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=metric&appid=YOUR_API_KEY`);
  const data = await res.json();
  return data;
};