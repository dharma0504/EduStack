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
        {
            title: 'HTML',
            description: 'HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
                { text: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { text: 'HTML for Beginners The easy way', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'Web Development Basics', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'Codecademy - Learn HTML', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'Interactive HTML Course', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'HTML Full Course for Beginners | Complete All-in-One Tutorial', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'HTML Full Course - Build a Website Tutorial', url: 'https://www.codecademy.com/learn/learn-html' },
                { text: 'HTML Tutorial for Beginners: HTML Crash Course', url: 'https://www.codecademy.com/learn/learn-html' }
            ]
        },
        {
            title: 'CSS',
            description: 'Understand CSS selectors, properties, and styling techniques. Learn about CSS layouts, positioning, and responsive design.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/' },
                { text: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { text: 'CSS-Tricks', url: 'https://css-tricks.com/' }
            ]
        },
        // Add more frontend technologies as needed

        // Backend Technologies
        {
            title: 'Node.js',
            description: 'Node.js is a runtime environment that allows you to run JavaScript code on the server side. It is commonly used for building scalable and fast backend applications.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
                { text: 'Node.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4' },
                { text: 'The Complete Node.js Developer Course', url: 'https://www.udemy.com/course/the-complete-nodejs-developer-course-2/' }
            ]
        },
        {
            title: 'Express.js',
            description: 'Express.js is a web application framework for Node.js. It simplifies the process of building APIs and web applications by providing a robust set of features and middleware.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Express.js Documentation', url: 'https://expressjs.com/' },
                { text: 'Express.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE' },
                { text: 'Learn Express - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/learn-express-js/' }
            ]
        },
        {
            title: 'React.js',
            description: 'React.js is a JavaScript library for building user interfaces. It allows you to create reusable UI components and manage the state of your application efficiently.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'React.js Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
                { text: 'React.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=sBws8MSXN7A' },
                // Additional React.js resources can be added here
            ]
        },
        {
            title: 'Vue.js',
            description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is known for its simplicity and ease of integration with other libraries and projects.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Vue.js Documentation', url: 'https://vuejs.org/v2/guide/' },
                { text: 'Vue.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=4deVCNJq3qc' },
                // Additional Vue.js resources can be added here
            ]
        },
        {
            title: 'Python',
            description: 'Python is a versatile and widely-used programming language. It is popular for web development, data analysis, artificial intelligence, and more.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Python Documentation', url: 'https://docs.python.org/3/' },
                { text: 'Python Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=rfscVS0vtbw' },
                // Additional Python resources can be added here
            ]
        },
        {
            title: 'Django',
            description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It simplifies the creation of complex web applications.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Django Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
                { text: 'Django Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4' },
                // Additional Django resources can be added here
            ]
        },
        {
            title: 'MySQL',
            description: 'MySQL is an open-source relational database management system. It is widely used for storing and managing structured data in various web applications.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'MySQL Documentation', url: 'https://dev.mysql.com/doc/' },
                { text: 'MySQL Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=9ylj9NR0Lcg' },
                // Additional MySQL resources can be added here
            ]
        },
        {
            title: 'MongoDB',
            description: 'MongoDB is a NoSQL database that provides high performance, scalability, and flexibility. It is commonly used in modern web applications for storing and managing unstructured data.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'MongoDB Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'MongoDB University - Free Courses', url: 'https://university.mongodb.com/' },
                // Additional MongoDB resources can be added here
            ]
        },
        

        // Add more backend technologies as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Full Stack
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>Full-stack development involves working on both the frontend and backend aspects of a web application. This includes handling client-side interfaces using technologies like HTML, CSS, and JavaScript for the frontend, while managing server-side logic, databases, and APIs with frameworks such as Node.js, Django, or Flask for the backend. Full-stack developers have a comprehensive understanding of the entire web development process, from user interface design to server management, enabling them to create functional and scalable applications from start to finish.</p>
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
