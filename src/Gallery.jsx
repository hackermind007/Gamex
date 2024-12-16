import React from 'react'
import Header from './Header';
import Footter from './Footter';

const Gallery = () => {
  return (
    <div className='background-web mt-90'>
      <Header />
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://m.media-amazon.com/images/I/81yGe-kXLiS.jpg" className="d-block w-100 vh-100 mt-60" alt="..." />
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
<section className="gallery">
          <div className="container">
            <ul className="gallery-list has-scrollbar">
              <li>
                <figure className="gallery-item">
                  <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyHyBMn01K60X4JTwByFNTBeqM2IUaCK4MIw4pEayp63GbLMkBlf4TAbb3Y6cC2JzDZjmwrEaXDocsbQucPsHpknrtXrIpUqIfEkIrBgoiZiwfdMks3PRjBok3hoTC5dpUd90qDVm5dTuf/s1376/eSports.imm1.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://t3.ftcdn.net/jpg/05/70/46/84/360_F_570468461_nQkMk10XoVneaUmWSr83XsZEhpneUCQS.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://t3.ftcdn.net/jpg/05/70/57/84/360_F_570578470_XqwpDL1vztE4omdFGAll8TDF78gojGcm.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://img.freepik.com/premium-photo/esports-tournament-background_861346-51130.jpg" alt="Gallery image" />
                </figure>
              </li>
            </ul>
          </div>
        </section>

        
        <section className="gallery">
          <div className="container">
            <ul className="gallery-list has-scrollbar">
              <li>
                <figure className="gallery-item">
                  <img src="https://images.cnbctv18.com/wp-content/uploads/2023/08/garena-free-fire-1019x573.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://i.gadgets360cdn.com/large/garena_free_fire_most_downloaded_game_october_2021_garena_international_1637064558280.jpg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://images5.alphacoders.com/133/thumb-1920-1331016.jpeg" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://images.indianexpress.com/2021/11/Garena-Free-Fire.jpg" alt="Gallery image" />
                </figure>
              </li>
            </ul>
          </div>
        </section>
        <section className="gallery">
          <div className="container">
            <ul className="gallery-list has-scrollbar">
              <li>
                <figure className="gallery-item">
                  <img src="https://indiacsr.in/wp-content/uploads/2023/05/Battlegrounds-Mobile-India-BGMI-game.webp" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://images.firstpost.com/wp-content/uploads/2022/07/Explained-Why-Google-and-Apple-removed-BGMI-from-their-respective-app-stores-2-years-after-PUBG-ban-2.jpg?im=FitAndFill=(596,336)" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://contentstatic.techgig.com/thumb/msid-102385923,width-800,resizemode-4/BGMI-2-7-update-download-will-go-live-on-August-9-Check-details-here.jpg?31512" alt="Gallery image" />
                </figure>
              </li>
              <li>
                <figure className="gallery-item">
                  <img src="https://www.jagranimages.com/images/newimg/19052023/19_05_2023-bgmi_unban_news_23417019.webp" alt="Gallery image" />
                </figure>
              </li>
            </ul>
          </div>
        </section>
        <Footter />
    </div>
  )
}

export default Gallery;