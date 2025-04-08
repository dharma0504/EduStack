import React from 'react';
import "./STYLES/Guidesinfo.css";

const mockInternships = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Tech Innovations Inc.",
    location: "San Francisco, CA",
    description: "Join our team as a software engineering intern and work on cutting-edge projects.",
    link: "https://example.com/software-engineering-intern"
  },
  {
    id: 2,
    title: "Marketing Intern",
    company: "Growth Marketing Agency",
    location: "New York, NY",
    description: "Learn about digital marketing strategies and assist with marketing campaigns.",
    link: "https://example.com/marketing-intern"
  },
  {
    id: 3,
    title: "Data Science Intern",
    company: "Data Insights Co.",
    location: "Seattle, WA",
    description: "Apply your data science skills to real-world projects and gain valuable experience.",
    link: "https://example.com/data-science-intern"
  },
  {
    id: 4,
    title: "Product Management Intern",
    company: "InnovateX",
    location: "Boston, MA",
    description: "Assist with product development and strategy in a fast-paced startup environment.",
    link: "https://example.com/product-management-intern"
  },
  {
    id: 5,
    title: "Finance Intern",
    company: "Financial Solutions Inc.",
    location: "Chicago, IL",
    description: "Learn about financial analysis and assist with financial modeling projects.",
    link: "https://example.com/finance-intern"
  },
  {
    id: 6,
    title: "Human Resources Intern",
    company: "HR Solutions Ltd.",
    location: "Los Angeles, CA",
    description: "Gain hands-on experience in HR processes and employee relations.",
    link: "https://example.com/hr-intern"
  },
  {
    id: 7,
    title: "Graphic Design Intern",
    company: "Creative Designs Studio",
    location: "Austin, TX",
    description: "Work on creative design projects and assist with branding initiatives.",
    link: "https://example.com/graphic-design-intern"
  },
  {
    id: 8,
    title: "Software Quality Assurance Intern",
    company: "QA Innovations",
    location: "Denver, CO",
    description: "Learn about software testing methodologies and assist with QA processes.",
    link: "https://example.com/qa-intern"
  },
  {
    id: 9,
    title: "Social Media Intern",
    company: "Social Media Solutions Inc.",
    location: "Miami, FL",
    description: "Assist with social media management and content creation for various platforms.",
    link: "https://example.com/social-media-intern"
  },
  {
    id: 10,
    title: "Research Intern",
    company: "Research Labs",
    location: "Washington, D.C.",
    description: "Conduct research studies and assist with data collection and analysis.",
    link: "https://example.com/research-intern"
  }
];

const InternshipList = () => {
  return (
    <div className="unique-container">
      <h2 className="unique-heading">Internship Listings</h2>
      <ul className="unique-ul">
        {mockInternships.map(internship => (
          <li key={internship.id} className="unique-li-resource">
            <h3 className="unique-resource-h2">{internship.title}</h3>
            <p className="unique-resource-p">{internship.company}</p>
            <p className="unique-resource-p">{internship.location}</p>
            <p className="unique-resource-p">{internship.description}</p>
            <a href={internship.link} className="unique-resource-a" target="_blank" rel="noopener noreferrer">More info</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InternshipList;
