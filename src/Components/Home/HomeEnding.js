import {React, PropTypes} from 'react';
import endingImage1 from './Images/home-ending-1.svg';
import endingImage2 from './Images/home-ending-2.svg';
import {Link} from 'react-router-dom';

export default function HomeEnding(props) {
     return (
     <section className={`pt-5 ${props.backgroundColor}`}>
          <div className="container">
               <div className="row d-flex align-items-center">
                    <div className="col-sm-3">
                         <img src={endingImage1} className='img-fluid' alt="" />
                    </div>
                    <div className="col-sm-6 text-center">
                         <h3><b>The value for Experience</b></h3>
                         <p>Relax... You're with us! We make it simple</p>
                         <Link className="btn btn-info text-light" to='/planyourtrip'>Start Planning</Link>
                    </div>
                    <div className="col-sm-3">
                         <img src={endingImage2} className='img-fluid' alt="" />
                    </div>
               </div>
          </div>
     </section>
     )
}
