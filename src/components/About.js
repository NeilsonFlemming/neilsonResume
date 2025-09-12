import React, { Component } from 'react';
import LazyImage from './LazyImage';

export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <LazyImage 
                 className="profile-pic"  
                 src="images/NFlemming_Headshot.jpg" 
                 alt="Neilson Flemming Professional Headshot" 
               />

            </div>

            <div className="nine columns main-col">

               <h2>About Me</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <p className="address">
                      {/* <span>{resumeData.name}</span>
                     <br>
                     </br>
       				 <span>{resumeData.address}</span>
                    <br>
                    </br> */}
                    <span>
                        <a href="mailto:NeilsonFlemming@Gmail.com" > {resumeData.email} </a>
                    </span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}
