import React, { Component } from 'react';
// import './FSection.css';

class FSection extends Component {
  render() {
    return (
<div>
   <section  className="container">

   <div> 

     <p className="note1">
       We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.
    </p> 

   </div>

   <div>

    <p className="note2">
       We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients. 
     </p>

   </div>

</section>
 
<section className="services-card">


  	<section className="patient-card">

       <p className="card-title"> For patient: </p>

          <p className="card-paragraph">

            Find a doctor, book a visit and solve any health-related doubt.

          </p>

          <select >

          	<option value="Country" style={{paddingRight: '200px'}}>CHOOSE A COUNTRY</option>
          	
          </select>

          	 
         <div className="card-col">

                	<img src="https://www.docplanner.com/img/screen-marketplace@2x.png"/>

         </div>	

           

   </section>

   <section className="doctor-card">

        <p className="card-title">For doctors</p>

        <p className="card-paragraph" >Save time managing visits and cut no-shows by half</p>

        <div className="card-col">
  
           	 <img src="https://www.docplanner.com/img/screen-saas@2x.png"/>

      	</div>
 
   </section>


</section>
</div>
    )
    } 
    }
export default FSection;
