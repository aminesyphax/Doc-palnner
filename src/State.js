import React, { Component } from 'react';
import './State.css';

class State extends Component {
  render() {
    return (
<div>
<section className="stats">
  
    <div className="subtitle-stats">

      <div className="subtitle">

        <h1  className="header-stats">The world's<br/> biggest healthcare platform</h1>
      
        <p className="p-header">We work from 6 offices all over the world, bringing Docplanner Group to life in almost 20 countries.</p>

      </div>

      <div className="background-logo">

        <img src="https://www.docplanner.com/img/logo.png"/>
 
      </div>

    </div>

  <div className="Item-stats">

  	<div className="col-left">

      <div className="col" style={{marginBbottom: "-20px"}}>

      	<div className="vert-align">

           <img scr="https://www.docplanner.com/img/flag.png" srcset="https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x" className="img-stats"/>

           <h3>Leader in 8 countries</h3>

           <p className="p-stats">Poland, Turkey, Spain, Italy, Mexico, Brazil, Argentina and Chile</p>

        </div>
        
      </div>

      <div className="col">

      	<div className="vert-align">

           <img scr="https://www.docplanner.com/img/patients.png" srcset="https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x" className="img-stats"/>

           <h3>20 million unique patients</h3>

           <p className="p-stats">visit us every month</p>

        </div>

      </div>

    </div>

    <div className="col-right">

      <div className="col" style={{marginBottom: '-20px'}}>

        <div className="vert-align">


            <img scr="https://www.docplanner.com/img/visits.png" srcset="https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x" className="img-stats"/>

            <h3>600 000 appointments</h3>

            <p className="p-stats">booker last month</p>

       </div>
        
      </div>    

      <div className="col">

      	<div className="vert-align">

            <img scr="https://www.docplanner.com/img/doctors.png" srcset="https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x" className="img-stats"/>

            <h3>35 000 active doctors</h3>

            <p className="p-stats">trust in our solutions</p>

        </div>

      </div>

    </div>
</div>
  </section>
  </div>
  )
  }
  }
  export default State;
