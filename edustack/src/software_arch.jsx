import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function Roadmap() {
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const [showArchitectContent, setShowArchitectContent] = useState(false);

    const showContent = (index) => {
        setSelectedContentIndex(index);
        setShowArchitectContent(false); // Close architect content when clicking on other sections
    };

    const toggleArchitectContent = () => {
        setShowArchitectContent(!showArchitectContent);
        setSelectedContentIndex(null); // Close other content when clicking on architect section
    };

    const contentData = [
        {
            title: 'Software Design Principles',
            description: 'Understand SOLID principles, design patterns, and architectural styles like MVC, MVVM, and microservices.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'SOLID Principles Explained', url: 'https://www.youtube.com/watch?v=TMuno5RZNeE' },
                { text: 'Design Patterns in Java', url: 'https://www.javatpoint.com/design-patterns-in-java' },
                { text: 'Microservices Architecture', url: 'https://microservices.io/' }
            ]
        },
        {
            title: 'System Architecture',
            description: 'Learn about scalable system design, cloud architecture, database management, and performance optimization.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Scalable System Design Patterns', url: 'https://www.educative.io/blog/scalable-system-design-patterns' },
                { text: 'AWS Certified Solutions Architect', url: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
                { text: 'Database Design Fundamentals', url: 'https://www.udemy.com/course/database-design/' }
            ]
        },
        {
            title: 'Cloud-Native Architecture',
            description: 'Learn about containerization with Docker, orchestration with Kubernetes, serverless computing, and cloud-native development practices.',
            line: 'Explore the following resources to learn more:',
            resources: [
                { text: 'Docker Documentation', url: 'https://docs.docker.com/' },
                { text: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/' },
                { text: 'AWS Serverless Computing', url: 'https://aws.amazon.com/serverless/' },
                // Add more cloud-native resources as needed
            ]
        },
        {
            title: 'Security Architecture',
            description: 'Understand authentication, authorization, encryption, and best practices for securing software systems and sensitive data.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'OWASP Secure Coding Practices', url: 'https://owasp.org/' },
                { text: 'NIST Cybersecurity Framework', url: 'https://www.nist.gov/cyberframework' },
                // Include more security resources and standards
            ]
        },
        {
            title: 'Data Architecture',
            description: 'Learn about data modeling, database design, data pipelines, data warehousing, and big data technologies.',
            line: 'Explore data architecture with these resources:',
            resources: [
                { text: 'Data Modeling Guide', url: 'https://www.essentialstrategies.com/publications/data_modeling_guide.php' },
                { text: 'Big Data Basics', url: 'https://www.oracle.com/big-data/guide/what-is-big-data.html' },
                // Include more data architecture resources
            ]
        },
        {
            title: 'Performance Optimization',
            description: 'Optimize software performance through profiling, caching strategies, load testing, and performance tuning techniques.',
            line: 'Enhance performance using these resources:',
            resources: [
                { text: 'Performance Testing Guide', url: 'https://www.softwaretestinghelp.com/performance-testing/' },
                { text: 'Web Performance Optimization', url: 'https://developers.google.com/web/fundamentals/performance' },
                // Add more performance optimization resources
            ]
        },
        {
            title: 'API Design and Management',
            description: 'Design RESTful APIs, implement API gateways, versioning, documentation, and API lifecycle management strategies.',
            line: 'Discover API design with these resources:',
            resources: [
                { text: 'REST API Design Guide', url: 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
                { text: 'API Management Basics', url: 'https://docs.microsoft.com/en-us/azure/api-management/' },
                // Include more API design and management resources
            ]
        },
        {
            title: 'Soft Skills for Architects',
            description: 'Develop communication, leadership, problem-solving, and stakeholder management skills crucial for software architects.',
            line: 'Enhance your soft skills with these resources:',
            resources: [
                { text: 'Communication Skills Guide', url: 'https://www.mindtools.com/pages/article/newCS_99.htm' },
                { text: 'Leadership Development', url: 'https://www.forbes.com/leadership-development/' },
                // Add more soft skills development resources
            ]
        },
        {
            title: 'Enterprise Architecture',
            description: 'Understand enterprise-level architecture, business processes, integration patterns, and aligning IT with business goals.',
            line: 'Explore enterprise architecture with these resources:',
            resources: [
                { text: 'Enterprise Architecture Overview', url: 'https://enterprisersproject.com/what-is-enterprise-architecture' },
                { text: 'TOGAF Framework', url: 'https://www.opengroup.org/togaf' },
                // Include more enterprise architecture resources
            ]
        },
        {
            title: 'Microservices Architecture',
            description: 'Design scalable and modular systems using microservices architecture principles, service discovery, and orchestration.',
            line: 'Learn about microservices with these resources:',
            resources: [
                { text: 'Microservices Basics', url: 'https://microservices.io/' },
                { text: 'Service Mesh Concepts', url: 'https://istio.io/latest/docs/concepts/what-is-istio/' },
                // Add more microservices architecture resources
            ]
        },
        {
            title: 'AI and Machine Learning',
            description: 'Explore AI/ML algorithms, integration into applications, data preprocessing, and model deployment strategies.',
            line: 'Dive into AI/ML with these resources:',
            resources: [
                { text: 'Machine Learning Crash Course', url: 'https://developers.google.com/machine-learning/crash-course' },
                { text: 'Deep Learning Specialization', url: 'https://www.deeplearning.ai/deep-learning-specialization/' },
                // Include more AI and machine learning resources
            ]
        },
        {
            title: 'Agile Methodologies',
            description: 'Implement agile practices, Scrum, Kanban, Agile project management tools, and Agile coaching techniques.',
            line: 'Master Agile methodologies with these resources:',
            resources: [
                { text: 'Scrum Guide', url: 'https://www.scrumguides.org/' },
                { text: 'Agile Manifesto', url: 'https://agilemanifesto.org/' },
                // Add more Agile methodology resources
            ]
        },
        {
            title: 'Cloud Governance and Compliance',
            description: 'Understand cloud governance models, compliance frameworks (e.g., GDPR, HIPAA), cloud security best practices, and audits.',
            line: 'Explore cloud governance with these resources:',
            resources: [
                { text: 'AWS Cloud Governance', url: 'https://aws.amazon.com/governance/' },
                { text: 'Azure Compliance', url: 'https://docs.microsoft.com/en-us/azure/governance/compliance' },
                // Include more cloud governance and compliance resources
            ]
        },
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleArchitectContent}>
                        Software Architect
                    </div>
                    {showArchitectContent && (
                        <div className="frontend-content">
                            <p>Software architects design and structure complex software systems, ensuring scalability, performance, and maintainability. They define the overall architecture, technologies, and frameworks used in a project.</p>
                            <p>Architects collaborate with stakeholders, developers, and other team members to create robust solutions that meet business requirements and adhere to best practices.</p>
                        </div>
                    )}
                </div>
            </div>

            <div id="roadmapContainer" className={selectedContentIndex !== null ? 'roadmap-show' : ''} onClick={() => setSelectedContentIndex(null)}>
                <div id="roadmapContent">
                    {selectedContentIndex !== null && (
                        <div>
                            <h1>{contentData[selectedContentIndex].title}</h1><br />
                            <p>{contentData[selectedContentIndex].description}</p><br /><br />
                            <p>{contentData[selectedContentIndex].line}</p><br /><br />
                            <ul>
                                {contentData[selectedContentIndex].resources.map((resource, index) => (
                                    <li key={index}><a href={resource.url} target="_blank" rel="noopener noreferrer">{resource.text}</a></li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Content HTML structure */}
            <div className="content-section timeline">
                {contentData.map((item, index) => (
                    <div key={index} className={`container ${index % 2 === 0 ? 'left' : 'right'}`} onClick={() => showContent(index)}>
                        <div className="content">
                            <h2>{item.title}</h2>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Roadmap;
