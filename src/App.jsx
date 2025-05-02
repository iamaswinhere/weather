import React, { useState } from 'react';
import SearchBox from './Components/SearchBox';
import WeatherCard from './Components/WeatherCard';
import Navbar from './Components/Navbar';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const [weatherData, setWeatherData] = useState(null);

  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path='/' element={<div className="text-center py-5">
          <h1 className="mb-4">🌦️ Weather App</h1>
          <SearchBox setWeatherData={setWeatherData} />
          {weatherData && <WeatherCard data={weatherData} />}
        </div>} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;