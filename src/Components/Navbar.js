import React from "react";

export default function Navbar() {
     return (
     <header className='fixed-top bg-body-tertiary'>
          <nav className="navbar navbar-expand-lg container">
               <div className="container-fluid">
                    <a className="navbar-brand mt-2" href="/">
                         <h2>Traveler's Adda</h2>
                    </a>
                    <button className="navbar-toggler shadow-none border-dark text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav, #book-button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                         <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                         <ul className="navbar-nav">
                              <li className="nav-item">
                                   <a className="nav-link active" aria-current="page" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Destinations</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Plan Your Journey</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">About Us</a>
                              </li>
                              <li className="nav-item">
                                   <a className="nav-link" href="/">Contact Us</a>
                              </li>
                         </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id='book-button'>
                         <button type="button" className="btn btn-outline-dark">Book your Travel</button>
                    </div>
               </div>
          </nav>
     </header>
     )
}
