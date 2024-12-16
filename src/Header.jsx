import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
        <header className="header">
    <div className="overlay" data-ove3rlay />
    <div className="container">
      <a href="#" className="logo">
        <img src="./assets/images/logo.svg" alt="GameX logo" />
      </a>
      <button className="nav-open-btn" data-nav-open-btn>
        <ion-icon name="menu-outline" />
      </button>
      <nav className="navbar" data-nav>
        <div className="navbar-top">
          <a href="#" className="logo">
            <img src="./assets/images/lgo.svg" alt="GameX logo" />
          </a>
          <button className="nav-close-btn" data-nav-close-btn>
            <ion-icon name="close-outline" />
          </button>
        </div>
        <ul className="navbar-list">
          <Link to="/">
          <li>
            <a href="#hero" className="navbar-link">Home</a>
          </li>
          </Link>
          <Link to="/About">
          <li>
            <a href="#about" className="navbar-link">About</a>
          </li>
          </Link>
          <Link to="/Tournament">
          <li>
            <a href="#tournament" className="navbar-link">Tournament</a>
          </li>
          </Link>
          <Link to="/Gallery">
          <li>
            <a href="#team" className="navbar-link">Gallery</a>
          </li>
          </Link> 
          <Link to="/Team">
          <li>
            <a href="#gears" className="navbar-link">Team</a>
          </li>
          </Link> 
          <Link to="/Contact">
          <li>
            <a href="#contact" className="navbar-link">Contact</a>
          </li>
          </Link> 
        </ul>
      </nav>
      <div className="header-actions">
        <Link to="/Login">
        <button className="btn-sign_in">
          <div className="icon-box">
            <ion-icon name="log-in-outline" />
          </div>
          <span>Sign-Up</span>
        </button>
          </Link>
      </div>
    </div>
  </header>
  )
}

export default Header;