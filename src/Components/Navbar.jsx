import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">WeatherApp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarContent">
        <ul className="navbar-nav ms-auto">
          <Link className="nav-item" style={{ textDecoration: 'none' }} to={'/'}>
            <a className="nav-link" href="/">Home</a>
          </Link>

          <a className="nav-link" href="https://personal-website-blond-phi-82.vercel.app">About</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;