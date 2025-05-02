export const getForecastByLatLon = async (lat, lon) => {
    const API_KEY = 'd6e12088ce445d31f732620fbac8eec8';
    const URL = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,current,alerts&units=metric&appid=${API_KEY}`;
  
    try {
      const res = await fetch(URL);
      const data = await res.json();
      return data;
    } catch (err) {
      console.error('Forecast fetch error:', err);
      return null;
    }
  };