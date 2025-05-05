import React, { useState } from 'react';
import { getWeatherByCity, getForecastByCoordinates } from '../utils/fetchWeather';

const SearchBox = ({ setWeatherData, setForecastData, setCoordinates }) => {
  const [city, setCity] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!city.trim()) return;

    setLoading(true);
    setError('');
    try {
      const data = await getWeatherByCity(city);
      if (data.cod === 200) {
        setWeatherData(data);
        setCity('');

        // ✅ Extract lon and lat from the response
        const { lon, lat } = data.coord;
        setCoordinates({ lon, lat }); // Update coordinates in App

        // ✅ Fetch forecast using coordinates
        const forecastData = await getForecastByCoordinates(lat, lon);
        setForecastData(forecastData);
      } else {
        setError('City not found!');
      }
    // eslint-disable-next-line no-unused-vars
    } catch (err) {
      setError('Something went wrong.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSearch} className="d-flex flex-column flex-md-row gap-2 justify-content-center align-items-center">
        <input
          type="text"
          className="form-control w-75 w-md-50"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="btn btn-primary px-4" type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="text-danger text-center mt-2">{error}</p>}
    </div>
  );
};

export default SearchBox;