import {React, PropTypes} from 'react'

export default function Coversection(props) {
     return (
          <section className={`py-5 ${props.backgroundColor}`}>
               <div className="container">
                    <div className="row d-flex align-items-center">
                         <div className={`col-sm ${props.imageOrder}`}>
                              <img src={props.image} className='rounded img-fluid' alt="" />
                         </div>
                         <div className={`col-sm ${props.descriptionOrder}`}>
                              <h1><b>{props.heading}</b></h1>
                              <p>{props.description}</p>
                              <button type="button" className="btn btn-info text-light">{props.buttonTitle}</button>
                         </div>
                    </div>
               </div>
          </section>
     )
}
