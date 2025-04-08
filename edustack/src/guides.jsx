import React from 'react';
import "./STYLES/guides.css";

function DataStructuresResourcesCard() {
  // Data array directly inside the component
  const data = [
    { title: 'Job Preparation', link: '/Guides/jobguide' },
    { title: 'Career Explorations', link: '/Guides/carrer' },
    { title: 'Interview Tips', link: '/Guides/interview' },
    { title: 'Coding Practice', link: '/Guides/Coding-practice' },
    { title: 'Internships', link: '/Guides/internships' },
    { title: 'Industry Requirements', link: '/Guides/industry-requirements' },
    // Add more data objects as needed
  ];

  return (
    <>
    <p className='tagline'>"treaure trove of insights on job readiness,carrer exploration,internships and beyond,illuminating your path in the realm of</p><p className='tagline-2'> computer science."</p>
    <div className="card-container">
      {data.map((item, index) => (
        <a key={index} href={item.link} className="card-link">
          <div className="card">
            <p>{item.title}</p>
          </div>
        </a>
      ))}
    </div></>
  );
}

export default DataStructuresResourcesCard;
