import React, { useState } from 'react';
import { getWeatherByCity } from '../utils/fetchWeather';
import '../Styles/Searchbox.css'

const SearchBox = ({ setWeatherData }) => {
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
    <div className="searchbox-container">
      <form onSubmit={handleSearch} className="searchbox-form">
        <input
          type="text"
          className="searchbox-input"
          placeholder="Enter city name..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="searchbox-button"
          type="submit"
          disabled={loading}
        >
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>
      {error && <p className="searchbox-error">{error}</p>}
    </div>
  );
};

export default SearchBox;