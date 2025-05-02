import React from 'react';
import '../Styles/weathercard.css'

const WeatherCard = ({ data }) => {
  const {
    name,
    sys: { country },
    main: { temp, feels_like, temp_min, temp_max, humidity },
    weather,
    wind: { speed },
  } = data;

  const weatherInfo = weather[0];

  return (
    <div className="container mt-4">
      <div className="weather-card shadow-lg mx-auto" style={{ maxWidth: '400px' }}>
        <div className="card-body text-center">
          <h2 className="card-title mb-2">{name}, {country}</h2>
          <h5 className="text mb-3">{weatherInfo.main} - {weatherInfo.description}</h5>

          <img
            src={`https://openweathermap.org/img/wn/${weatherInfo.icon}@2x.png`}
            alt="Weather icon"
            className="mb-3"
          />

          <h1 className="display-4">{Math.round(temp)}°C</h1>
          <p className="mb-1">Feels like: {Math.round(feels_like)}°C</p>
          <p className="mb-1">Min: {Math.round(temp_min)}°C | Max: {Math.round(temp_max)}°C</p>
          <p className="mb-1">Humidity: {humidity}%</p>
          <p className="mb-0">Wind Speed: {speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;