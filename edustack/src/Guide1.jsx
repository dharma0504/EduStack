import React from 'react';
import './STYLES/Guidesinfo.css';

const DataStructuresResources = () => {
  // Array of data for each resource
  const resources = [
    {
      title: 'Prepare Technical Questions',
      description: 'Review common technical interview questions related to algorithms, data structures, and problem-solving. Practice solving problems on platforms like LeetCode or HackerRank.',
      link: '#'
    },
    {
      title: 'Know Your Resume',
      description: 'Be prepared to discuss your past projects, experiences, and technical skills listed on your resume. Highlight your achievements and contributions.',
      link: '#'
    },
    {
      title: 'Research the Company',
      description: 'Learn about the companys products, services, culture, and recent news. Understand how your skills and experiences align with the companys goals and values.',
      link: '#'
    },
    {
      title: 'Communicate Effectively',
      description: 'Articulate your thoughts clearly and concisely during the interview. Practice explaining technical concepts in simple terms and be receptive to feedback.',
      link: '#'
    },
    {
      title: 'Demonstrate Problem-Solving Skills',
      description: 'Walk through your problem-solving approach step-by-step. Communicate your thought process, consider edge cases, and explain your code or algorithm design.',
      link: '#'
    },
    {
      title: 'Ask Questions',
      description: 'Prepare thoughtful questions to ask the interviewer about the role, team dynamics, projects, or company culture. Show your genuine interest in the opportunity.',
      link: '#'
    },
    {
      title: 'Practice Coding Interviews',
      description: 'Practice coding interviews with a friend, mentor, or through mock interviews. Focus on writing clean, efficient code and explaining your solutions clearly.',
      link: '#'
    },
    {
      title: 'Stay Calm and Confident',
      description: 'Stay calm and composed during the interview. Confidence in your abilities and a positive attitude can leave a lasting impression on the interviewer.',
      link: '#'
    },
    {
      title: 'Follow Up',
      description: 'Send a thank-you email to the interviewer(s) after the interview. Express your gratitude for the opportunity and reiterate your interest in the position.',
      link: '#'
    }
  ];

  return (
    <div className="unique-container">
      <h1 className='unique-heading'>Interview Tips</h1>
      <ul className='unique-ul'>
        {/* Map over the resources array and create a component for each item */}
        {resources.map((resource, index) => (
          <Resource key={index} {...resource} />
        ))}
      </ul>
    </div>
  );
};

// Resource component representing each item in the list
const Resource = ({ title, description, link }) => (
  <li className="unique-li-resource">
    <h2 className='unique-resource-h2'>{title}</h2>
    <p className='unique-resource-p'>{description}</p>
    <a className='unique-resource-a'href={link}>Learn more</a>
  </li>
);

export default DataStructuresResources;
