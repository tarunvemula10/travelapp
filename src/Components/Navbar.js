import {React, useState} from "react";

export default function Navbar() {

     const [scroll, updateScroll] = useState(false);
     const [clickState, updateClickState] = useState(false);

     const [navColor, updateNavColor] = useState('bg-transparent');
     const [textColor, updateTextColor] = useState('text-light');
     const [borderColor, updateBorderColor] = useState('border-light');
     const [buttonColor, updateButtonColor] = useState('btn-outline-light');
     
     window.addEventListener('scroll', function() {
          if(window.scrollY>=50) {
               updateScroll(true);
               updateNavColor('bg-white');
               updateTextColor('text-dark');
               updateBorderColor('border-dark');
               updateButtonColor('btn-outline-dark');
          } else {
               updateScroll(false);
               updateNavColor('bg-transparent');
               updateTextColor('text-light');
               updateBorderColor('border-light');
               updateButtonColor('btn-outline-light');
          }
     });

     const handleClick = ()=> {
          if(!scroll) {
               if(!clickState) {
                    updateClickState(true);
                    updateNavColor('bg-light');
                    updateTextColor('text-dark');
                    updateBorderColor('border-dark');
                    updateButtonColor('btn-outline-dark');
               } else {
                    updateClickState(false);
                    updateNavColor('bg-transparent');
                    updateTextColor('text-light');
                    updateBorderColor('border-light');
                    updateButtonColor('btn-outline-light');
               }
          }
     }
     
     // const handleColor = ()=> (color ? updateTextColor('text-dark') : updateTextColor('text-light'));


     return (
     <header className={`fixed-top ${navColor}`}>
          <nav className="navbar navbar-expand-lg container">
               <div className="container-fluid">
                    <a className={`navbar-brand mt-2 ${textColor}`} href="/">
                         <h2>Traveler's Adda</h2>
                    </a>
                    <button className={`navbar-toggler shadow-none ${borderColor} ${textColor}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav, #book-button" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation" onClick={handleClick}>
                         <i className="fa-solid fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                         <ul className="navbar-nav">
                              <li className="nav-item">
                                   <a className={`nav-link active ${textColor}`} aria-current="page" href="/">Home</a>
                              </li>
                              <li className="nav-item">
                                   <a className={`nav-link ${textColor}`} href="/">Destinations</a>
                              </li>
                              <li className="nav-item">
                                   <a className={`nav-link ${textColor}`} href="/">Plan Your Journey</a>
                              </li>
                              <li className="nav-item">
                                   <a className={`nav-link ${textColor}`} href="/">About Us</a>
                              </li>
                              <li className="nav-item">
                                   <a className={`nav-link ${textColor}`} href="/">Contact Us</a>
                              </li>
                         </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id='book-button'>
                         <button type="button" className={`btn ${buttonColor} border-2`}>Book your Adventure</button>
                    </div>
               </div>
          </nav>
     </header>
     )
}
