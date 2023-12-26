import React from 'react';
import imageTestimonial1 from './Images/testimonials-1.jpg';
import imageTestimonial2 from './Images/testimonials-2.jpg';
import imageTestimonial3 from './Images/testimonials-3.jpg';
import imageTestimonial4 from './Images/testimonials-4.jpg';
import imageTestimonial5 from './Images/testimonials-5.jpg';

export default function Reviews() {

     const testimonialCard = function(imageTestimonial, clientName, reviewText) {
          return (
               <div className="bg-light border border-secondary-subtle testimonial-card">
                    <div className="row">
                         <div className="col-lg">
                              <img src={imageTestimonial} className='img-fluid' alt=""/>
                         </div>
                         <div className="col-lg p-4 d-flex justify-content-center align-items-center">
                              <div>
                                   <p>{reviewText}</p>
                                   <h3><b>{clientName}</b></h3>
                                   <span className="text-warning">
                                        <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                                   </span>
                              </div>
                         </div>
                    </div>
               </div>
          )
     };
     const testimonialContents = [
          {
               id: 2,
               image: imageTestimonial2,
               clientName : 'Priya Sharma',
               reviewText : 
               `Kudos to Traveler's Adda for creating a dream vacation! Every recommendation 
               was spot-on, and their commitment to customer satisfaction was evident at every 
               turn. Smooth transitions between destinations and unique experiences made for an 
               extraordinary adventure.`
          }, {
               id: 3,
               image: imageTestimonial3,
               clientName : 'Noel',
               reviewText : 
               `A big shoutout to the team at Traveler's Adda for making our travel dreams a 
               reality. Their expertise and passion for travel were evident in every aspect of our 
               journey. The personalized touch and thoughtful surprises along the way truly set them 
               apart.` 
          }, {
               id: 4,
               image: imageTestimonial4,
               clientName : 'Sara Lance',
               reviewText : 
               `Outstanding service! Traveler's Adda not only met but exceeded our expectations. 
               The itinerary was perfectly tailored to our interests, and the level of professionalism 
               displayed by their team was commendable. Can't wait to plan our next adventure with them!`
          }, {
               id: 5,
               image: imageTestimonial5,
               clientName : 'Hitesh Singh',
               reviewText : 
               `Choosing Traveler's Adda was the best decision we made for our vacation. 
               Their knowledgeable staff, prompt communication, and seamless coordination ensured 
               a stress-free experience. Our trip was filled with unique experiences and hidden 
               gems that we wouldn't have discovered on our own. Highly recommended!`
          }
     ];
     return (
     <section className='testimonials bg-secondary-subtle'>
          <div className="container py-4">
               <div className="text-center p text-secondary">
                    <p>TESTIMONIALS</p>
               </div>
               <div className="row align-items-center py-2">
                    <div className="col-lg-4 text-center">
                         <h1><b>What Our <br />Clients say...</b></h1>
                    </div>
                    <div className="col-lg-8">
                         <div id="carouselExampleRide" className="carousel slide" data-bs-ride="true">
                              <div className="carousel-inner">
                                   <div className="carousel-item active">
                                        {testimonialCard(imageTestimonial1, "Katherine", 
                                        `
                                        Exceptional service from Traveler's Adda! From start to finish, 
                                        they crafted a personalized itinerary that exceeded our expectations. 
                                        The attention to detail, seamless logistics, and insider knowledge made 
                                        our trip truly unforgettable. Can't recommend them enough!
                                        `)}
                                   </div>
                                   {testimonialContents.map((element)=> {
                                        return (
                                             <div className="carousel-item" key={element.id.toString()}>
                                                  {testimonialCard(element.image, element.clientName, element.reviewText)}
                                             </div>
                                        )
                                   })}
                              </div>
                              <button className="carousel-control-prev border border-black" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="prev">
                                   <i className="fa-solid fa-angle-left"></i>
                              </button>
                              <button className="carousel-control-next border border-black" type="button" data-bs-target="#carouselExampleRide" data-bs-slide="next">
                                   <i className="fa-solid fa-angle-right"></i>
                              </button>
                         </div>
                    </div>
               </div>
          </div>
     </section>
     )
}
