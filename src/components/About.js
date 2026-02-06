import React from 'react';
import LazyImage from './LazyImage';

export default function About({ resumeData }) {
  return (
    <section id="about">
      <div className="row">
        <div className="three columns">
          <LazyImage
            className="profile-pic"
            src="images/NFlemming_Headshot.jpg"
            alt="Neilson Flemming Professional Headshot"
            width={220}
            height={220}
          />
        </div>

        <div className="nine columns main-col">
          <h2>About Me</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row">
            <div className="columns contact-details">
              <h2>Contact Details</h2>
              <p className="address">
                <span>
                  <a href="mailto:NeilsonFlemming@Gmail.com">
                    {resumeData.email}
                  </a>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
