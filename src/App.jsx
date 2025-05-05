import React, { useState, useEffect } from 'react';
import SearchBox from './Components/SearchBox';
import WeatherCard from './Components/WeatherCard';
import Navbar from './Components/Navbar';
import { getWeatherByCity, getWeatherByCoordinates } from './utils/fetchWeather';
import './App.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ForecastCard from './Components/Forecast';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    // Automatically fetch weather based on user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          try {
            const data = await getWeatherByCoordinates(latitude, longitude);
            if (data.cod === 200) {
              setWeatherData(data);
              console.log(data);

            }
          } catch (error) {
            console.error('Error fetching weather by coordinates:', error);
          }
        },
        (error) => {
          console.warn('Geolocation error:', error.message);
        }
      );
    } else {
      console.warn('Geolocation is not supported by this browser.');
    }
  }, []);

  const formatForecastData = (forecast) => {
    const dailyData = forecast.list.filter((reading, index) =>
      index % 8 === 0 // every 8th entry = next day (3-hour steps)
    );

    return dailyData.map((item) => ({
      day: new Date(item.dt_txt).toLocaleDateString('en-US', { weekday: 'short' }),
      temp: `${Math.round(item.main.temp)}°C`,
      icon: item.weather[0].icon,
      description: item.weather[0].main,
    }));
  };

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<div className="text-center py-5">
          <h4>date : <span className="highlight">{date.toLocaleDateString()}</span></h4>
          <h1 className="mb-4">🌦️ Weather App</h1>
          <SearchBox setWeatherData={setWeatherData} setCoordinates={setCoordinates} setForecastData={setForecastData} />
          {weatherData && <WeatherCard data={weatherData} />}
          {forecastData && forecastData.list && (
            <ForecastCard forecast={formatForecastData(forecastData)} />
          )}
        </div>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;