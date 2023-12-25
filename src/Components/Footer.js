import React from 'react'

export default function Footer() {

     const portfolioUrl = 'https://tharunvemula-portfolio.netlify.app/';

     return (
     <footer className='bg-dark'>
          <div className="container pt-5">
               <div className="row">
                    <div className="col-md py-2">
                         <div className='text-light'>
                              <b>GET IN TOUCH</b>
                         </div>
                         <div className='text-light pt-3'>
                              <b><small>Address</small></b>
                              <div className="text-secondary">
                                   <small>
                                        Bulding-24, Nagawara, <br />
                                        Hebbala, Bengaluru,<br />
                                        Karnataka - IN 560045
                                   </small>
                              </div>
                         </div>
                         <div className='text-light pt-3'>
                              <b><small>Phone</small></b>
                              <div className="text-secondary">
                                   <small>+91 123-456-7890</small>
                              </div>
                         </div>
                         <div className='text-light pt-3'>
                              <b><small>Email</small></b>
                              <div className="text-secondary">
                                   <small>travelersadda23@gmail.com</small>
                              </div>
                         </div>
                    </div>
                    <div className="col-md py-2">
                         <div className='text-light'>
                              <b>ABOUT US</b>
                         </div>
                         <div className='pt-3'>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Start Planning</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">About us</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Blog</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Reviews</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Contact us</a>
                              </small>
                         </div>
                    </div>
                    <div className="col-md py-2">
                         <div className="text-light">
                              <b>FROM THE BLOG</b>
                         </div>
                         <div className="pt-3">
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Traveling Guides</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Planning Your Trip</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Guest Posts</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Destinations</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Tours</a>
                              </small>
                              <small className='d-block py-1'>
                                   <a href="/" className="text-secondary">Webinars</a>
                              </small>
                         </div>
                    </div>
                    <div className="col-md py-2">
                         <div className="text-light">
                              <b>GET SOCIAL</b>
                         </div>
                         <div className="pt-3 text-secondary w-75">
                              <small>
                                   Keep up to date with all the latest social media news. There are lot of exciting things happening this year.
                              </small>
                         </div>
                         <div className="pt-3 text-secondary">
                              <span className="fa-brands fa-facebook-f pe-4"></span>
                              <span className="fa-brands fa-instagram pe-4"></span>
                              <span className="fa-brands fa-x-twitter pe-4"></span>
                              <span className="fa-brands fa-linkedin-in pe-4"></span>
                              <span className="fa-brands fa-google-plus-g pe-4"></span>
                         </div>
                    </div>
               </div>
               <hr className="text-secondary" />
          </div>
          <div className="container py-3">
               <div className="row align-items-center">
                    <div className="col-sm-4 text-light">
                         <h2><b>Traveler's <br />Adda</b></h2>
                    </div>
                    <div className="col-sm-6">
                         <small className="text-secondary d-block">
                              Copyright &copy; 2023. Traveler's adda and other trademarks, service marks, 
                              and designs are the registered or unregistered trademarks of Traveler's adda inc. 
                              India and other countries.
                         </small>
                         <small className="text-secondary">
                              Designed and Developed by <a href={portfolioUrl} target='_blank' rel="noreferrer" className='text-secondary'><b>Tharun Vemula</b></a>
                         </small>
                    </div>
               </div>
          </div>
     </footer>
     )
}
