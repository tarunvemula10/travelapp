import React from 'react';
import headImage1 from './Images/blog-image-head-1.jpg'
import headImage2 from './Images/blog-image-head-2.jpg'
import cardImage1 from './Images/blog-image-card-1.jpg'
import cardImage2 from './Images/blog-image-card-2.jpg'
import cardImage3 from './Images/blog-image-card-3.jpg'

export default function BlogPost() {
     return (
     <section className='blog-post mt-5' id='#blog'>
          <div className="container text-center p-3 heading">
               <p className='text-secondary'><small>OUR LATEST BLOG POSTS</small></p>
               <h3><b>FROM THE RESOURCE CENTER</b></h3>
          </div>
          <div className="container">
               <div className="row">
                    <div className="col-md pt-3">
                         <div className="card text-bg-dark">
                              <img src={headImage1} className="card-img img-fluid" alt="..."/>
                              <div className="card-img-overlay">
                                   <h5 className="card-title">The Tokyo Nights</h5>
                                   <p className="card-text">Explore the beauty of tokyo in nights</p>
                                   <p className="card-text"><small className='bg-info rounded py-1 px-2 text-dark'>Popular</small></p>
                              </div>
                         </div>
                    </div>
                    <div className="col-md pt-3">
                         <div className="card text-bg-dark">
                              <img src={headImage2} className="card-img img-fluid" alt="..."/>
                              <div className="card-img-overlay">
                                   <h5 className="card-title">Incredible India</h5>
                                   <p className="card-text">Unity in Diversity</p>
                                   <small className='bg-info rounded py-1 px-2 text-dark'>Popular</small>
                              </div>
                         </div>
                    </div>
               </div>

               <div className="row mt-2">
                    <div className="col-md p-2">
                         <div className="card">
                              <img src={cardImage1} className="card-img-top img-fluid" alt="..." height='250px' width='100%'/>
                              <div className="card-body p-4">
                                   <h5 className="card-title"><b>Surfing in maldivies</b></h5>
                                   <p className="card-text">Unveil the secrets of the Indian Ocean's gentle giants as we explore the exhilarating world of surfing in the Maldives.</p>
                                   <p className="card-text"><small className="text-body-secondary">Suggested - Diaries of Maldivies</small></p>
                              </div>
                         </div>
                    </div>
                    <div className="col-md p-2">
                         <div className="card">
                              <img src={cardImage2} className="card-img-top img-fluid" alt="..." height='250px' width='100%'/>
                              <div className="card-body p-4">
                                   <h5 className="card-title"><b>Beauty of God's own country - Kerala</b></h5>
                                   <p className="card-text">
                                        Embark on a visual odyssey through the enchanting landscapes of Kerala, where nature weaves its magic in every hue and contour.
                                   </p>
                                   <p className="card-text"><small className="text-body-secondary">Suggested - Incredible India</small></p>
                              </div>
                         </div>
                    </div>
                    <div className="col-md p-2">
                         <div className="card">
                              <img src={cardImage3} className="card-img-top img-fluid" alt="..." height='250px' width='100%'/>
                              <div className="card-body p-4">
                                   <h5 className="card-title"><b>Enchanting Kashmir</b></h5>
                                   <p className="card-text">Immerse yourself in the ethereal beauty of snow-capped peaks as we explore the Himalayan wonders of Gulmarg and Pahalgam.</p>
                                   <p className="card-text"><small className="text-body-secondary">Suggested - Incredible India</small></p>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </section>
     )
}