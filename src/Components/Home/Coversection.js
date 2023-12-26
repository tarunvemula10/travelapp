import {React, PropTypes} from 'react';
import {Link} from 'react-router-dom';

export default function Coversection(props) {
     return (
          <section className={`py-5 ${props.backgroundColor}`}>
               <div className="container">
                    <div className="row d-flex align-items-center">
                         <div className={`col-lg ${props.imageOrder}`}>
                              <img src={props.image} className='rounded img-fluid' alt="" />
                         </div>
                         <div className={`col-lg ${props.descriptionOrder}`}>
                              <h1><b>{props.heading}</b></h1>
                              <p>{props.description}</p>
                              <Link type="button" className="btn btn-info text-light" to={props.path}>{props.buttonTitle}</Link>
                         </div>
                    </div>
               </div>
          </section>
     )
}
