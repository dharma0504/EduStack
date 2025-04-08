import React from 'react';
import './STYLES/Guidesinfo.css';

const DataStructuresResources = () => {
  // Array of data for each resource
  const resources = [
    {
      title: 'Programming Languages',
      description: 'Proficiency in relevant programming languages such as Python, Java, JavaScript, C++, C#, etc.',
      link: '#'
    },
    {
      title: 'Frameworks and Libraries',
      description: 'Familiarity with popular frameworks and libraries within chosen programming languages (e.g., React.js, Angular, Django, Spring, Express.js).',
      link: '#'
    },
    {
      title: 'Version Control',
      description: 'Understanding of version control systems like Git for managing code repositories, branching strategies, and conflict resolution.',
      link: '#'
    },
    {
      title: 'Software Development Life Cycle (SDLC)',
      description: 'Knowledge of SDLC processes including requirements gathering, design, implementation, testing, deployment, and maintenance. Familiarity with agile methodologies (e.g., Scrum, Kanban) is beneficial.',
      link: '#'
    },
    {
      title: 'Problem-Solving Skills',
      description: 'Ability to analyze problems, devise effective solutions, and write clean, maintainable code.',
      link: '#'
    },
    {
      title: 'Communication Skills',
      description: 'Strong written and verbal communication skills for collaborating with team members, conveying technical concepts, and documenting code and processes.',
      link: '#'
    },
    {
      title: 'Testing and Quality Assurance',
      description: 'Understanding of software testing principles, practices, and frameworks for ensuring software quality.',
      link: '#'
    },
    {
      title: 'Security Awareness',
      description: 'Awareness of common security vulnerabilities and best practices for securing software applications.',
      link: '#'
    },
    {
      title: 'Continuous Learning',
      description: 'Willingness to learn new technologies, tools, and methodologies to stay updated in a constantly evolving industry.',
      link: '#'
    },
    {
      title: 'Domain Knowledge',
      description: 'Familiarity with relevant domain-specific concepts, regulations, and standards depending on the industry or domain.',
      link: '#'
    }
  ];

  return (
    <div className="unique-container">
      <h1 className='unique-heading'>Industry Requirements</h1>
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
