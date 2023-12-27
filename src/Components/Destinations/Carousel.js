import React from 'react';

export default function Carousel() {
     return (
     <section className='carousel-section' id='#carousel-section'>
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade" data-bs-ride="carousel">
               <ul className="carousel-indicators">
                    <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"
                         className="active" aria-current="true" aria-label="Slide 1"></li>
                    <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                         aria-label="Slide 2"></li>
                    <li type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                         aria-label="Slide 3"></li>
               </ul>
               <div className="carousel-inner text-light">
                    <div className="carousel-item active">
                         <div className="container">
                              <h1><b>Barcelona</b></h1>
                              <p>
                                   Discover the vibrant heartbeat of Catalonia in Barcelona, 
                                   where Gaudí's architectural masterpieces, sun-kissed beaches, and the rich 
                                   tapestry of Spanish culture converge to create an unforgettable journey for every traveler.
                              </p>
                         </div>
                    </div>
                    <div className="carousel-item">
                         <div className="container">
                              <h1><b>Singapore</b></h1>
                              <p>
                                   Embark on a captivating adventure in Singapore, 
                                   a city-state where modern skyscrapers harmonize with lush green spaces, 
                                   delectable street food tantalizes your taste buds, 
                                   and a cultural mosaic unfolds at every turn, 
                                   promising an unforgettable tapestry of experiences.
                              </p>
                         </div>
                    </div>
                    <div className="carousel-item">
                         <div className="container">
                              <h1><b>Paris</b></h1>
                              <p>
                                   Indulge in the timeless allure of Paris, 
                                   where the Eiffel Tower's silhouette graces the skyline, 
                                   charming cobblestone streets whisper tales of romance, 
                                   and world-class art and cuisine beckon. In the City of Lights, 
                                   every moment is a brushstroke on the canvas of a truly enchanting journey.
                              </p>
                         </div>
                    </div>
               </div>
               <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
               </button>
               <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
               </button>
          </div>
     </section>
     )
}
