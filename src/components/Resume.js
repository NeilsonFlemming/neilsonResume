import React from 'react';

export default function Resume({ resumeData }) {
  return (
    <section id="resume">
      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.work &&
            resumeData.work.map((item, index) => (
              <div key={item.CompanyName || index} className="row item">
                <div className="twelve columns">
                  <h3>{item.CompanyName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span>{' '}
                    <em className="date">
                      {item.MonthOfLeaving} {item.YearOfLeaving}
                    </em>
                  </p>
                  <p>{item.Achievements}</p>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {resumeData.education &&
            resumeData.education.map((item, index) => (
              <div key={item.UniversityName || index} className="row item">
                <div className="twelve columns">
                  <h3>{item.UniversityName}</h3>
                  <p className="info">
                    {item.specialization}
                    <span>&bull;</span>{' '}
                    <em className="date">
                      {item.MonthOfPassing} {item.YearOfPassing}
                    </em>
                  </p>
                  <p>{item.Achievements}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
