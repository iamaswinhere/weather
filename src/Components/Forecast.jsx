import React from 'react';
import '../Styles/ForecastCard.css';

const ForecastCard = ({ forecast }) => {
  return (
    <div className="forecast-container">
      {forecast.map((item, index) => (
        <div key={index} className="forecast-card">
          <p className="day">{item.day}</p>
          <img
            src={`https://openweathermap.org/img/wn/${item.icon}@2x.png`}
            alt={item.description}
            className="forecast-icon"
          />
          <p className="temp">{item.temp}</p>
          <p className="desc">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ForecastCard;