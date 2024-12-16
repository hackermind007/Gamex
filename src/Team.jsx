import React from 'react'
import Header from './Header';
import Footter from './Footter';

const Team = () => {
  return (
    <div className='background-web mt-90'>
      <Header />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://wallpapers.com/images/hd/bgmi-1920-x-1080-background-mhhqw02vmccjf9tc.jpg" className="d-block w-100 vh-100 mt-60" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://m.media-amazon.com/images/I/71G4Kg0wFTL.jpg" className="d-block w-100 vh-100 mt-60" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202202/freefire_22022022.jpg" className="d-block w-100 vh-100 mt-60" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
      <section className="team" id="team">
          <div className="container">
            <h2 className="h2 section-title">Active Team Members</h2>
            <ul className="team-list">
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-1.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-2.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-3.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-4.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-6.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-7.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-8.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-9.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-10.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-11.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
              <li>
                <a href="#" className="team-member">
                  <figure>
                    <img src="./assets/images/team-member-12.png" alt="Team member image" />
                  </figure>
                  <ion-icon name="link-outline" />
                </a>
              </li>
            </ul>
            <button className="btn btn-primary">view all members</button>
          </div>
        </section>
        <section className="gears" id="gears">
          <div className="container">
            <h2 className="h2 section-title">check our gears</h2>
            <ul className="gears-list">
              <li>
                <div className="gears-card">
                  <div className="card-banner">
                    <a href="#">
                      <img src="./assets/images/gears-img-1.png" alt="Headphone" />
                    </a>
                    <button className="share">
                      <ion-icon name="share-social" />
                    </button>
                    <div className="card-time-wrapper">
                      <ion-icon name="time-outline" />
                      <span>In 4 days</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">Headphone</h3>
                      <p className="card-subtitle">e-sports</p>
                    </div>
                    <div className="card-prize">$18</div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <ion-icon name="add-outline" />
                      <span>Add to cart</span>
                    </button>
                    <button className="btn card-btn">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="gears-card">
                  <div className="card-banner">
                    <a href="#">
                      <img src="./assets/images/gears-img-2.png" alt="Controller" />
                    </a>
                    <button className="share">
                      <ion-icon name="share-social" />
                    </button>
                    <div className="card-time-wrapper">
                      <ion-icon name="time-outline" />
                      <span>In 4 days</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">Controller</h3>
                      <p className="card-subtitle">e-sports</p>
                    </div>
                    <div className="card-prize">$29</div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <ion-icon name="add-outline" />
                      <span>Add to cart</span>
                    </button>
                    <button className="btn card-btn">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="gears-card">
                  <div className="card-banner">
                    <a href="#">
                      <img src="./assets/images/gears-img-3.png" alt="Gaming mask" />
                    </a>
                    <button className="share">
                      <ion-icon name="share-social" />
                    </button>
                    <div className="card-time-wrapper">
                      <ion-icon name="time-outline" />
                      <span>In 4 days</span>
                    </div>
                  </div>
                  <div className="card-content">
                    <div className="card-title-wrapper">
                      <h3 className="h3 card-title">Gaming mask</h3>
                      <p className="card-subtitle">e-sports</p>
                    </div>
                    <div className="card-prize">$45</div>
                  </div>
                  <div className="card-actions">
                    <button className="btn btn-primary">
                      <ion-icon name="add-outline" />
                      <span>Add to cart</span>
                    </button>
                    <button className="btn card-btn">
                      <ion-icon name="heart-outline" />
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>
        <section className="newsletter">
          <div className="container">
            <div className="newsletter-card">
              <div className="newsletter-content">
                <figure className="newsletter-img">
                  <img src="./assets/images/newsletter-img.png" alt="Newsletter image" />
                </figure>
                <h2 className="h2 newsletter-title">Subscribe to our newsletter</h2>
              </div>
              <form action className="newsletter-form">
                <input type="email" name="email" required placeholder="Your Email Address" className="input-field" />
                <button type="submit" className="btn btn-secondary">Subscribe</button>
              </form>
            </div>
          </div>
        </section>
        <Footter />
    </div>
  )
}

export default Team;