import React from 'react'

const Footter = () => {
  return (
    <div>
      <footer>
    <div className="footer-top">
      <div className="container">
        <div className="footer-brand-wrapper">
          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" alt="GameX logo" />
          </a>
          <div className="footer-menu-wrapper">
            <ul className="footer-menu-list">
              <li>
                <a href="#hero" className="footer-menu-link">Home</a>
              </li>
              <li>
                <a href="#about" className="footer-menu-link">About</a>
              </li>
              <li>
                <a href="#tournament" className="footer-menu-link">Tournament</a>
              </li>
              <li>
                <a href="#team" className="footer-menu-link">Gallery</a>
              </li>
              <li>
                <a href="#gears" className="footer-menu-link">Team</a>
              </li>
              <li>
                <a href="#" className="footer-menu-link">Contact</a>
              </li>
            </ul>
            <div className="footer-input-wrapper">
              <input type="text" name="message" required placeholder="Find Here Now" className="footer-input" />
              <button className="btn btn-primary">
                <ion-icon name="search-outline" />
              </button>
            </div>
          </div>
        </div>
        <div className="footer-quicklinks">
          <ul className="quicklink-list">
            <li>
              <a href="#" className="quicklink-item">Faq</a>
            </li>
            <li>
              <a href="#" className="quicklink-item">Help center</a>
            </li>
            <li>
              <a href="#" className="quicklink-item">Terms of use</a>
            </li>
            <li>
              <a href="#" className="quicklink-item">Privacy</a>
            </li>
          </ul>
          <ul className="footer-social-list">
            <li>
              <a href="#" className="footer-social-link">
                <ion-icon name="logo-discord" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-social-link">
                <ion-icon name="logo-twitch" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-social-link">
                <ion-icon name="logo-xbox" />
              </a>
            </li>
            <li>
              <a href="#" className="footer-social-link">
                <ion-icon name="logo-youtube" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p className="copyright">
          Copyright © 2024 <a href="#">codewith-harsh</a>. all rights reserved
        </p>
        <figure className="footer-bottom-img">
          <img src="./assets/images/footer-bottom-img.png" alt="Online payment companies logo" />
        </figure>
      </div>
    </div>
  </footer>
    </div>
  )
}

export default Footter
