import React from 'react'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Tournament from './Tournament'
import Gallery from './Gallery'
import Team from './Team'
import Footter from './Footter'

const Home = () => {
  return (
    <div className='background-web'>
      <Header />
      <Hero />
      <section className="about" id="about">
          <div className="container">
          <div className="about-content">
              <p className="about-subtitle">Find Map & Modes</p>
              <h2 className="about-title">Game Modes And Map <strong>Information</strong> </h2>
              <p className="about-text">
              Free Fire offers over 15 game modes, including Team Deathmatch, Clash Squad, Big Head, Explosive Jump, Cold Steel, Zombie Hunt, Rampage, and Pet Mania.
              </p>
              <p className="about-bottom-text">
                <ion-icon name="arrow-forward-circle-outline" />
                <span>Will sharpen your brain and focus</span>
              </p>
            </div>
            <div className="about-content">
              <p className="about-subtitle">Find team member</p>
              <h2 className="about-title">Experience just for gamers <strong>offer</strong> </h2>
              <p className="about-text">
              In this mode it allows you to choose whether you want to play alone which is solo, or with another person which is duo and, in a team, which is squad.
              </p>
              <p className="about-bottom-text">
                <ion-icon name="arrow-forward-circle-outline" />
                <span>Will sharpen your brain and focus</span>
              </p>
            </div>
          </div>
        </section>
        <section className="tournament" id="tournament">
          <div className="container">
            <div className="tournament-content">
              <p className="tournament-subtitle">Check out our next</p>
              <h2 className="h3 tournament-title">Gaming tournaments !</h2>
              <p className="tournament-text">
                Lpsum dolor sit amet, consectetur adipiscing elit, sed labore et dolore magna aliqua.
              </p>
              <a className='Color-a' href="https://play.google.com/store/apps/details?id=com.getstan&hl=en_IN">
              <button className="btn btn-primary K">Join with us</button></a>
            </div>
            <div className="tournament-prize">
              <h2 className="h3 tournament-prize-title">Prize pool</h2>
              <data value={80000}>$80000</data>
              <figure>
                <img src="./assets/images/prize-img.png" alt="Prize image" />
              </figure>
            </div>
            <div className="tournament-winners">
              <h2 className="h3 tournament-winners-title">Last winners</h2>
              <ul className="tournament-winners-list">
                <li>
                  <div className="winner-card">
                    <figure className="card-banner">
                      <img src="./assets/images/winner-img-1.png" alt="Winner image" />
                    </figure>
                    <h3 className="h5 card-title">1st place</h3>
                  </div>
                </li>
                <li>
                  <div className="winner-card">
                    <figure className="card-banner">
                      <img src="./assets/images/winner-img-2.png" alt="Winner image" />
                    </figure>
                    <h3 className="h5 card-title">2nd place</h3>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <ul className="gallery-list has-scrollbar">
              <li>
                <figure className="gallery-item">
                  <img src="https://images3.alphacoders.com/133/thumb-1920-1331441.jpeg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://wallpapers.com/images/featured/call-of-duty-pictures-7lrqnchbx478ucgg.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://images.firstpost.com/wp-content/uploads/2022/07/Explained-Why-Google-and-Apple-removed-BGMI-from-their-respective-app-stores-2-years-after-PUBG-ban-2.jpg?im=FitAndFill=(596,336)" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="./assets/images/gallery-img-3.jpg" alt="Gallery image" />
                </figure>
              </li>
            </ul>
          </div>
        </section>
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

export default Home
