import React from 'react'
import './assets/Tournament.css';
import Header from './Header';
import Footter from './Footter';

const Tournament = () => {
  const dados = [
    {
      id: 1,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 2,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 3,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 4,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 5,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 6,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 7,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 8,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
    {
      id: 9,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,  
    },
    {
      id: 10,
      name: 'Laura',
      image: 'https://cdn-icons-png.flaticon.com/512/186/186037.png',
      level: 16,
      xp: 100,
      coins: 500,
      love: 6,
      beacons: 2,
      resources: 70,
    },
  ];
  return (
    <div className='background-web mt-90'>
      <Header />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner"> 
    <div className="carousel-item active">
      <img src="https://passport-general-public.s3-ap-south-1.amazonaws.com/images/tournament/banner/a5753036-3511-4850-81b1-ef7316cefd7c/Free-Fire-Solo-Tournament-S2.jpg" className="d-block w-100 vh-100 mt-60" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://lh7-us.googleusercontent.com/N_QBKdhzgLc-sGRbz8OQf2W65eXq0Kw3bHrXiByC0S6zVj5SCwF3RvkWWhu_vzKO8BlSfpAI1_ljGd6D4DdWjnrXIvxs4xwjUDxqwmdzNFoaboqGvbzgCnXVaBjc8w61lpGUzM8k0_1RHxiVA8Qrus0" className="d-block w-100 vh-100 mt-60" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://sm.ign.com/ign_in/screenshot/default/3939-hindi-bgis-2024-grand-finals-day-3-bgmi-youtube-google_u9kz.png" className="d-block w-100 vh-100 mt-60" alt="..." />
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
        <div className="body-tournament">
        <div className="container-tournament">
      <div className="topLeadersList">
        {dados.map((leader, index) => (
          <div className="leader" key={leader.id}>
            {index + 1 <= 3 && (
              <div className="containerImage">
                <img className="image" loading="lazy" src={leader.image} />
                <div className="crown">
                  <svg
                    id="crown1"
                    fill="#0f74b5"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 100 50"
                  >
                    <polygon
                      className="cls-1"
                      points="12.7 50 87.5 50 100 0 75 25 50 0 25.6 25 0 0 12.7 50"
                    />
                  </svg>
                </div>
                <div className="leaderName">{leader.name}</div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="playerslist">
        <div className="table">
            <div>#</div>
        
            <div>Name</div>
        
          
            <div>LVL</div>
          
            <div>XP</div>
          
            <div>
              Coins
            </div>
          
            <div>
              Likes
            </div>
          
            <div>
              Pass
            </div>
          
            <div>
              Resources
            </div>
          
        </div>
        <div className="list">
          {dados.map((leader, index) => (
            <div className="player" key={leader.id}>
              <span> {index + 1}</span>
              <div className="user">
                <img className="image" src={leader.image} />
                <span> {leader.name} </span>
              </div>
              <span> {leader.level} </span>
              <span> {leader.xp} </span>
              <span> {leader.coins} </span>
              <span> {leader.love} </span>
              <span> {leader.beacons} </span>
              <span> {leader.resources} </span>
            </div>
          ))}
        </div>
        </div>
        </div>
        </div>
       <Footter />
    </div>
  )
}

export default Tournament;