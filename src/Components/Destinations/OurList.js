import React from 'react';
import listImage1 from './Images/our-list-1.jpg';
import listImage2 from './Images/our-list-2.jpg';
import listImage3 from './Images/our-list-3.jpg';
import listImage4 from './Images/our-list-4.jpg';
import listImage5 from './Images/our-list-5.jpg';
import listImage6 from './Images/our-list-6.jpg';
import listImage7 from './Images/our-list-7.jpg';
import listImage8 from './Images/our-list-8.jpg';
import listImage9 from './Images/our-list-9.jpg';
import listImage10 from './Images/our-list-10.jpg';
import listImage11 from './Images/our-list-11.jpg';

export default function OurList() {

     const bucketList = function(title, image) {
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
     <section className='our-list bg-secondary-subtle'>
          <div className="heading text-center py-4">
               <small className="text-secondary">OUR LIST</small>
               <h3 className='text-uppercase pt-3'><b>Choose the place you <br />wanted to dive in!</b></h3>
          </div>

          <div className="container">
               <div className="row">
                    <div className="col-md py-2">{bucketList("Canada", listImage1)}</div>
                    <div className="col-md py-2">{bucketList("Asia", listImage2)}</div>
                    <div className="col-md py-2">{bucketList("India", listImage3)}</div>
               </div>
               <div className="row">
                    <div className="col-md py-2">{bucketList("Africa", listImage4)}</div>
                    <div className="col-md py-2">{bucketList("Australia", listImage5)}</div>
                    <div className="col-md py-2">{bucketList("Antarctica", listImage6)}</div>
                    <div className="col-md py-2">{bucketList("Europe", listImage7)}</div>
               </div>
               <div className="row">
                    <div className="col-md pt-2 pb-3">{bucketList("North America", listImage8)}</div>
                    <div className="col-md pt-2 pb-3">{bucketList("South America", listImage9)}</div>
                    <div className="col-md pt-2 pb-3">{bucketList("South Pacific", listImage10)}</div>
                    <div className="col-md pt-2 pb-3">{bucketList("Spain", listImage11)}</div>
               </div>
          </div>
     </section>
     )
}
