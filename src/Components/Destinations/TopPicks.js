import React from 'react';
import cardImage1 from './Images/most-picked-places-1.jpg';
import cardImage2 from './Images/most-picked-places-2.jpg';
import cardImage3 from './Images/most-picked-places-3.jpg';
import cardImage4 from './Images/most-picked-places-4.jpg';
import cardImage5 from './Images/most-picked-places-5.jpg';
import cardImage6 from './Images/most-picked-places-6.jpg';

export default function TopPicks() {

     const mostPickedPlaces = function(title, image) {
          return (
               <div className="card text-light text-center">
                    <img src={image} className="card-img" alt="..."/>
                    <div className="card-img-overlay d-flex justify-content-center align-items-center">
                         <h2 className="card-title">{title}</h2>
                    </div>
               </div>
          );
     }
     return (
     <section className="top-picks">
          <div className="heading text-center py-4">
               <small className="text-secondary">TOP PICKS</small>
               <h3 className='text-uppercase pt-3'><b>Checkout Our popular picks</b></h3>
          </div>
          <div className="container">
               <div className="row">
                    <div className="col-md py-2">{mostPickedPlaces("Thailand", cardImage1)}</div>
                    <div className="col-md py-2">{mostPickedPlaces("Mexico", cardImage2)}</div>
                    <div className="col-md py-2">{mostPickedPlaces("Barcelona", cardImage3)}</div>
               </div>
               <div className="row">
                    <div className="col-md pt-1 pb-3">{mostPickedPlaces("Dubai", cardImage4)}</div>
                    <div className="col-md pt-1 pb-3">{mostPickedPlaces("Singapore", cardImage5)}</div>
                    <div className="col-md pt-1 pb-3">{mostPickedPlaces(["Andaman", <br/>, "Nicobar Island"], cardImage6)}</div>
               </div>
          </div>
     </section>
  )
}
