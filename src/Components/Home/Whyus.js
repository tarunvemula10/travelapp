import React from 'react'
import cardImage1 from './Images/card-1.svg'
import cardImage2 from './Images/card-2.svg'
import cardImage3 from './Images/card-3.svg'

export default function Whyus() {
     return (
     <section className='why-us bg-secondary-subtle'>
          <div className="text-center pt-5">
               <p className='text-secondary'><small>3 STEPS TO THE PERFECT TRIP</small></p>
               <h3><b>FIND TRAVEL PERFECTION, WITH THE <br />WISDOM OF EXPERTS</b></h3>
               <p className='text-secondary'>
                    Naturally head of the class when it comes to 
                    luxury travel because we do more homework than anyone else,<br /> 
                    with a few little sweeteners thrown in! 
                    Travel to the four corners of the world, without going around in circles.
               </p>
          </div>
          <div className="p-2 container">
               <div className="row p-3">
                    <div className="col-sm">
                         <img src={cardImage1} alt="" className='mx-auto d-block' height='250px' />
                         <div className="mt-2 text-center">
                              <p className='text-secondary'><b>Tell us what you want to do</b></p>
                              <p className='text-secondary'>Fill out a 2-minute questionnaire <br />about how you like to travel</p>
                         </div>
                    </div>
                    <div className="col-sm">
                         <img src={cardImage2} alt="" className='mx-auto d-block' height='250px' />
                         <div className="mt-2 text-center">
                              <p className='text-secondary'><b>Share your Travel Preference & Dates</b></p>
                              <p className='text-secondary'>It happens online, We recommend <br />everything to your vision</p>
                         </div>
                    </div>
                    <div className="col-sm">
                         <img src={cardImage3} alt="" className='mx-auto d-block' height='250px' />
                         <div className="mt-2 text-center">
                              <p className='text-secondary'><b>We'll give you tailored recommendations</b></p>
                              <p className='text-secondary'>Once you're happy with your final plan, we <br />handle everything for you</p>
                         </div>
                    </div>
               </div>
               <div className="p-3">
                    <button className="btn btn-info text-light mx-auto d-block">Lets Plan your Trip</button>
               </div>
          </div>
     </section>
     )
}