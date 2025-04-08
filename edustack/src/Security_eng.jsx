import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function Roadmap() {
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const [showFrontendContent, setShowFrontendContent] = useState(false);

    const showContent = (index) => {
        setSelectedContentIndex(index);
        setShowFrontendContent(false); // Close frontend content when clicking on other sections
    };

    const toggleFrontendContent = () => {
        setShowFrontendContent(!showFrontendContent);
        setSelectedContentIndex(null); // Close other content when clicking on frontend section
    };

    const contentData = [
        // Define your content data here
        {
            title: 'HTML',
            description: 'HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
                { text: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { text: 'HTML for Beginners The easy way', url: 'https://www.codecademy.com/learn/learn-html' }
            ]
        },
        {
            title: 'CSS',
            description: 'Understand CSS selectors, properties, and styling techniques. Learn about CSS layouts, positioning, and responsive design.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/' },
                { text: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' }
            ]
        },
        {
            title: 'JavaScript',
            description: 'Learn JavaScript for frontend interactivity and dynamic content. Explore DOM manipulation, event handling, and asynchronous programming.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'JavaScript.info', url: 'https://javascript.info/' }
            ]
        },
        {
            title: 'React',
            description: 'Master React for building interactive user interfaces. Understand component-based architecture, state management, and modern React features.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'React Official Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
                { text: 'React Tutorial by Codecademy', url: 'https://www.codecademy.com/learn/react-101' }
            ]
        },
        {
            title: 'Node.js',
            description: 'Learn Node.js for backend development. Explore server-side JavaScript, asynchronous programming, and building RESTful APIs.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Node.js Official Documentation', url: 'https://nodejs.org/en/docs/' },
                { text: 'The Complete Node.js Developer Course', url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course/' }
            ]
        },
        {
            title: 'Express.js',
            description: 'Master Express.js for building scalable web applications. Learn about middleware, routing, and integrating with databases like MongoDB.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Express.js Official Documentation', url: 'https://expressjs.com/' },
                { text: 'Express.js Crash Course by Traversy Media', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE' }
            ]
        },
        {
            title: 'MongoDB',
            description: 'Explore MongoDB for NoSQL database management. Learn about CRUD operations, schema design, and Mongoose for Node.js integration.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/manual/' },
                { text: 'MongoDB University', url: 'https://university.mongodb.com/' }
            ]
        },
        {
            title: 'Authentication & Authorization',
            description: 'Understand authentication mechanisms like OAuth, JWT, and integrating with Passport.js for secure user authentication and access control.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'OAuth 2.0 Documentation', url: 'https://oauth.net/2/' },
                { text: 'JWT.io Introduction', url: 'https://jwt.io/introduction/' },
                { text: 'Passport.js Documentation', url: 'http://www.passportjs.org/docs/' }
            ]
        },
        {
            title: 'Web Security Best Practices',
            description: 'Learn about OWASP Top 10 vulnerabilities, secure coding practices, HTTPS implementation, and web application security testing.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'OWASP Top 10', url: 'https://owasp.org/www-project-top-ten/' },
                { text: 'Web Security Basics by Google', url: 'https://developers.google.com/web/fundamentals/security' }
            ]
        },
        {
            title: 'Deployment & DevOps',
            description: 'Explore containerization with Docker, CI/CD pipelines with Jenkins, and infrastructure automation with tools like Ansible for secure deployments.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Docker Documentation', url: 'https://docs.docker.com/' },
                { text: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/' },
                { text: 'Ansible Documentation', url: 'https://docs.ansible.com/' }
            ]
        },
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Security Engineer
                    </div>
                    {showFrontendContent && (
                        <div className="frontend-content">
                           <p>Security engineers design and implement measures to safeguard systems and data, including analyzing threats, developing security protocols, and conducting vulnerability assessments. They collaborate with teams to ensure compliance with industry standards and respond effectively to security incidents.</p>
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
