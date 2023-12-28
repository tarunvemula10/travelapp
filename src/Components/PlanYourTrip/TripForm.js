import React from 'react'

export default function TripForm() {

     const continents = ['Europe', 'Asia', 'North America', 'South America', 'Africa', 'Oceania', 'Antarctica'];

     return (
     <section className='trip-form'>
          <div className="heading text-center py-4">
               <small className="text-secondary">PLAN YOUR TRIP</small>
               <h3 className='text-uppercase pt-3'><b>Tell us, <br />where you want to go?</b></h3>
          </div>
          <div className="container">
               <form action="">
                    <div className="row py-1">
                         <div className="col-sm form-floating">
                              <input type="text" className="form-control" id="firstName" placeholder="eg. Henry"/>
                              <label htmlFor="firstName" className='mx-3'>First Name<span className='text-secondary'> (required)</span></label>
                         </div>
                         <div className="col-sm form-floating">
                              <input type="text" className="form-control" id="lastName" placeholder="eg. Allen"/>
                              <label htmlFor="lastName" className='mx-3'>Last Name<span className='text-secondary'> (required)</span></label>
                         </div>
                    </div>
                    <div className="row py-1">
                         <div className="col-sm form-floating">
                              <input type="email" className="form-control" id="email" placeholder="eg. henry@gmail.com"/>
                              <label htmlFor="email" className='mx-3'>Email Address<span className='text-secondary'> (required)</span></label>
                         </div>
                         <div className="col-sm form-floating">
                              <input type="phone" className="form-control" id="phone" placeholder="eg. Allen"/>
                              <label htmlFor="phone" className='mx-3'>Phone<span className='text-secondary'> (required)</span></label>
                         </div>
                    </div>
                    <div className="pt-1">
                         <select className="form-select p-3" aria-label="Select a place" required>
                              <option>~Where you want to go?~</option>
                              {continents.map((continent, index)=> {
                                   return <option defaultValue={index+1} key={continent.toString()}>{continent}</option>
                              })}
                         </select>
                    </div>
                    <div className="row py-2">
                         <div className="col-sm">
                              <label htmlFor="date" className='px-1'><small className='text-secondary'>When do you want to leave? (required)</small></label>
                              <input type="date" className="form-control p-3" id="date" placeholder='Date'/>
                         </div>
                         <div className="col-sm">
                              <label htmlFor="days" className='px-1'><small className='text-secondary'>How long would you like to go? (required)</small></label>
                              <input type="number" className="form-control p-3" id="days" placeholder='eg. 5'/>
                         </div>
                    </div>
                    <div className="row py-1">
                         <div className="col-sm">
                              <label htmlFor="days" className='px-1'><small className='text-secondary'>Number of People(required)</small></label>
                              <input type="number" className="form-control p-3" id="days" placeholder='eg. 5'/>
                         </div>
                         <div className="col-sm">
                              <label htmlFor="date" className='px-1'><small className='text-secondary'>Occasion Type</small></label>
                              <input type="text" className="form-control p-3" id="days" placeholder='eg. Casual, Honey Moon, etc'/>
                         </div>
                    </div>
                    <div className="pt-1">
                         <div className="form-floating">
                              <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                              <label htmlFor="floatingTextarea">Comments</label>
                         </div>
                    </div>
                    <button className='btn btn-info text-light d-block mx-auto mt-3 mb-4' type="submit">Start my trip</button>
               </form>
          </div>
     </section>
     )
}