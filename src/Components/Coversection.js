import React from 'react'
import imageCover from './Images/cover-image.jpg';

export default function Coversection() {
     return (
          <section className='pt-5'>
               <div className="container">
                    <div className="row">
                         <div className="col-sm-7">
                              <img src={imageCover} className='rounded img-fluid' alt="" />
                         </div>
                         <div className="col-sm-5 mt-sm-4">
                              <h1><b>Plan Your Adventure <br/> with us</b></h1>
                              <p>
                                   Embark on a journey of discovery with our unparalleled traveling site! 
                                   Immerse yourself in a world of wanderlust as we curate unforgettable experiences, 
                                   from hidden gems to iconic landmarks. Navigate through a treasure trove of destination guides, 
                                   travel tips, and captivating narratives that will fuel your adventurous spirit. 
                                   Whether you crave the thrill of exotic landscapes, cultural escapades, 
                                   or simply the joy of a relaxing getaway, our traveling site is your compass 
                                   to a world full of possibilities. Unpack inspiration, explore the extraordinary, 
                                   and let your wanderlust take flight!
                              </p>
                              <button type="button" className="btn btn-info text-light">Plan Your Journey</button>
                         </div>
                    </div>
               </div>
          </section>
     )
}
