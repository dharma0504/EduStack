import React from 'react';
import './STYLES/Guidesinfo.css';

const JobPreparationGuide = () => {
  // Array of data for each step in the guide
  const steps = [
    {
      title: 'Self-Assessment',
      description: `Before you start your job search, take the time to assess yourself thoroughly. Reflect on your skills, strengths, weaknesses, and career goals. Consider what you enjoy doing and what motivates you.`,
    },
    {
      title: 'Research',
      description: `Research is key to a successful job search. Look into the companies and industries you're interested in. Understand their missions, cultures, and values. Stay updated on the latest trends and developments in your field.`,
    },
    {
      title: 'Resume and Cover Letter',
      description: `Your resume and cover letter are your first impressions to potential employers. Tailor your resume to highlight relevant experience, skills, and achievements. Write a compelling cover letter that showcases your passion for the role and company.`,
    },
    {
      title: 'Networking',
      description: `Networking can open doors to new opportunities. Build and maintain relationships with professionals in your industry. Attend industry events, career fairs, and networking mixers. Reach out to alumni, mentors, and peers for advice and support.`,
    },
    {
      title: 'Skill Development',
      description: `Continuous learning is essential for career growth. Identify any skill gaps and work to address them. Take online courses, attend workshops, or pursue certifications to enhance your qualifications. Practice technical skills and interview techniques regularly.`,
    },
    {
      title: 'Interview Preparation',
      description: `Prepare thoroughly for job interviews to make a strong impression. Research common interview questions and practice your responses. Prepare insightful questions to ask the interviewer. Conduct mock interviews with friends or mentors to gain confidence.`,
    },
    {
      title: 'Professional Appearance',
      description: `First impressions matter, so dress professionally for interviews. Research the company culture and industry norms to determine appropriate attire. Pay attention to grooming and personal hygiene. Arrive on time and demonstrate professionalism throughout the interview process.`,
    },
    {
      title: 'Follow-Up',
      description: `After an interview, send a thank-you email or handwritten note to express your appreciation. Reiterate your interest in the position and emphasize your qualifications. Follow up on any action items or next steps discussed during the interview to stay engaged and proactive.`,
    },
    {
      title: 'Continuous Improvement',
      description: `Job preparation is an ongoing process. Reflect on your job search experience and learn from both successes and setbacks. Seek feedback from interviewers or mentors to improve your skills and approach. Stay adaptable and open to new opportunities that align with your long-term career goals.`,
    }
  ];

  return (
    <div className="unique-container">
      <h1 className='unique-heading'>Job Preparation Guide</h1>
      <ol className='unique-ol'>
        {/* Map over the steps array and create a component for each item */}
        {steps.map((step, index) => (
          <Step key={index} {...step} index={index + 1} />
        ))}
      </ol>
    </div>
  );
};

// Step component representing each item in the guide
const Step = ({ title, description, index }) => (
  <li className="unique-li-resource">
    <h2 className='unique-resource-h2'>{title}</h2>
    <p className='unique-resource-p'>{description}</p>
  </li>
);

export default JobPreparationGuide;
