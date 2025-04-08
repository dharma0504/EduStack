import React from 'react';
import './STYLES/Guidesinfo.css';

const CareerExplorationsGuide = () => {
  // Data for different career paths
  const careerPaths = [
    {
      title: 'Software Engineering',
      description: `Software engineers design, develop, and maintain software applications and systems. They may work on various stages of the software development lifecycle, including requirements gathering, coding, testing, and deployment.`,
      skills: [
        'Proficiency in programming languages (such as Java, Python, or JavaScript)',
        'Knowledge of software development methodologies (e.g., Agile, Scrum)',
        'Understanding of data structures and algorithms',
        'Problem-solving abilities'
      ],
      opportunities: [
        'Software engineer',
        'Full-stack developer',
        'Front-end developer',
        'Back-end developer',
        'Mobile app developer'
      ]
    },
    {
      title: 'Data Science',
      description: `Data scientists analyze large datasets to extract insights and make data-driven decisions. They use statistical techniques, machine learning algorithms, and data visualization tools to uncover patterns and trends in data.`,
      skills: [
        'Proficiency in programming languages (e.g., Python, R, SQL)',
        'Knowledge of data analysis and machine learning techniques',
        'Familiarity with data visualization tools (e.g., Tableau, Matplotlib)',
        'Strong analytical and problem-solving skills'
      ],
      opportunities: [
        'Data scientist',
        'Data analyst',
        'Machine learning engineer',
        'Business intelligence analyst'
      ]
    },
    {
      title: 'Cybersecurity',
      description: `Cybersecurity professionals protect computer systems, networks, and data from cyber threats and attacks. They develop security measures, monitor for suspicious activity, and respond to security incidents.`,
      skills: [
        'Knowledge of cybersecurity principles and best practices',
        'Familiarity with security tools and technologies',
        'Understanding of networking protocols and operating systems',
        'Ability to analyze and respond to security incidents'
      ],
      opportunities: [
        'Cybersecurity analyst',
        'Penetration tester',
        'Security architect',
        'Security consultant',
        'Ethical hacker'
      ]
    },
    {
      title: 'User Experience (UX) Design',
      description: `UX designers create intuitive and user-friendly interfaces for software applications and websites. They conduct user research, develop wireframes and prototypes, and collaborate with developers to implement design solutions.`,
      skills: [
        'Understanding of user-centered design principles',
        'Proficiency in design tools (e.g., Adobe XD, Sketch)',
        'Knowledge of interaction design and information architecture',
        'Strong communication and collaboration skills'
      ],
      opportunities: [
        'UX designer',
        'UI designer',
        'Interaction designer',
        'Usability analyst'
      ]
    },
    {
      title: 'Machine Learning',
      description: `Machine learning engineers develop algorithms and models that enable computers to learn from data and make predictions or decisions without explicit programming. They apply techniques such as supervised learning, unsupervised learning, and reinforcement learning.`,
      skills: [
        'Proficiency in programming languages (e.g., Python, TensorFlow, PyTorch)',
        'Knowledge of machine learning algorithms and techniques',
        'Experience with data preprocessing and model evaluation',
        'Strong mathematical and analytical skills'
      ],
      opportunities: [
        'Machine learning engineer',
        'Data scientist',
        'Research scientist',
        'AI engineer'
      ]
    },
    {
      title: 'Systems Analysis',
      description: `Systems analysts evaluate and optimize IT systems and infrastructure to improve efficiency, performance, and user satisfaction. They analyze user requirements, design system solutions, and coordinate with stakeholders to implement changes.`,
      skills: [
        'Understanding of business processes and requirements gathering techniques',
        'Knowledge of system design and modeling tools',
        'Familiarity with database management systems and software development methodologies',
        'Strong problem-solving and communication skills'
      ],
      opportunities: [
        'Systems analyst',
        'Business analyst',
        'IT consultant',
        'Project manager'
      ]
    },
    {
    title: 'Artificial Intelligence (AI)',
      description: `AI professionals develop and deploy intelligent systems and applications that mimic human cognitive functions. They work on machine learning algorithms, natural language processing, computer vision, and other AI technologies.`,
      skills: [
        'Proficiency in programming languages like Python, R, or Java',
        'Knowledge of machine learning algorithms, techniques, and frameworks (e.g., TensorFlow, PyTorch)',
        'Understanding of data preprocessing, feature engineering, and model evaluation',
        'Familiarity with deep learning architectures and neural networks',
        'Ability to work with large datasets and perform data analysis',
        'Strong problem-solving and mathematical skills'
      ],
      opportunities: [
        'Machine Learning Engineer',
        'Data Scientist',
        'AI Researcher',
        'Natural Language Processing (NLP) Engineer',
        'Computer Vision Engineer',
        'AI Consultant',
        'Robotics Engineer'
      ]
    },
    {
        title: 'User Experience (UX) Design',
        description: `UX designers focus on creating intuitive and user-friendly experiences for digital products and services. They conduct user research, design wireframes and prototypes, and collaborate with developers to ensure a seamless user experience.`,
        skills: [
          'Proficiency in design tools such as Sketch, Adobe XD, or Figma',
          'Understanding of user-centered design principles and methodologies',
          'Ability to conduct user research, interviews, and usability testing',
          'Knowledge of interaction design, information architecture, and visual design',
          'Strong communication and collaboration skills',
          'Empathy for users and the ability to advocate for their needs'
        ],
        opportunities: [
          'UX Designer',
          'Interaction Designer',
          'UI Designer',
          'Usability Analyst',
          'Product Designer',
          'UX Researcher',
          'Information Architect'
        ]
      },
      {
        title: 'Game Development',
        description: `Game developers create video games for various platforms, including consoles, PCs, and mobile devices. They design game mechanics, develop game engines, create assets, and implement gameplay features to deliver immersive gaming experiences.`,
        skills: [
          'Proficiency in programming languages such as C++, C#, or Java',
          'Knowledge of game development engines like Unity or Unreal Engine',
          'Experience with game design principles and mechanics',
          'Understanding of graphics programming and 3D modeling',
          'Ability to optimize game performance and memory usage',
          'Strong problem-solving and creativity skills'
        ],
        opportunities: [
          'Game Developer',
          'Gameplay Programmer',
          'Game Designer',
          'Game Artist',
          'Game Tester',
          'Technical Director'
        ]
      },
      {
      title: 'Software Quality Assurance (QA)',
      description: `QA engineers ensure the quality and reliability of software products by testing and identifying defects or issues. They develop test plans, execute test cases, and collaborate with development teams to resolve bugs and improve product quality.`,
      skills: [
        'Knowledge of software testing methodologies and techniques',
        'Experience with test automation tools like Selenium or Appium',
        'Understanding of software development lifecycle (SDLC) and agile methodologies',
        'Ability to write clear and concise bug reports',
        'Strong attention to detail and problem-solving skills',
        'Effective communication and teamwork abilities'
      ],
      opportunities: [
        'QA Engineer',
        'Test Automation Engineer',
        'Quality Assurance Analyst',
        'Software Tester',
        'QA Lead',
        'Release Manager'
      ]
    },
    {
        title: 'Cloud Computing',
        description: `Cloud computing professionals design, implement, and manage cloud-based infrastructure and services. They leverage cloud platforms to enable scalability, flexibility, and cost efficiency for businesses' IT operations and applications.`,
        skills: [
          'Knowledge of cloud computing platforms like AWS, Azure, or Google Cloud Platform',
          'Experience with cloud services such as IaaS, PaaS, and SaaS',
          'Proficiency in scripting languages like Python or PowerShell',
          'Understanding of virtualization, containerization, and microservices architecture',
          'Ability to deploy and manage cloud resources securely and efficiently',
          'Strong problem-solving and troubleshooting skills'
        ],
        opportunities: [
          'Cloud Solutions Architect',
          'Cloud Engineer',
          'Cloud Administrator',
          'DevOps Engineer',
          'Cloud Security Specialist',
          'Cloud Consultant'
        ]
      }
  ];

  return (
    <div className="unique-container">
      <h1 className='unique-heading'>Career Explorations Guide</h1>

      {/* Render career paths */}
      {careerPaths.map((path, index) => (
        <div key={index} className="unique-section">
          <h2 className='unique-section-heading'>{path.title}</h2>
          <div className="unique-li-resource">
            <p className='unique-resource-p'>{path.description}</p>
            <h3>Skills:</h3>
            <ul>
              {path.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul><br />
            <h3>Career Opportunities:</h3>
            <ul>
              {path.opportunities.map((opportunity, idx) => (
                <li key={idx}>{opportunity}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CareerExplorationsGuide;
