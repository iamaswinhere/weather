import React  , {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark px-4">
      <a className="navbar-brand" href="/">WeatherApp</a>
      <button
        className="navbar-toggler"
        type="button"
        onClick={toggleNavbar}
        aria-controls="navbarNav"
        aria-expanded={isOpen}
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarContent">
        <ul className="navbar-nav ms-auto">
          <Link className="nav-item" style={{ textDecoration: 'none' }} to={'/'}>
            <a className="nav-link text-center" href="/">Home</a>
          </Link>

          <a className="nav-link text-center" href="https://personal-website-blond-phi-82.vercel.app">About</a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;