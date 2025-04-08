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
            title: 'JavaScript Fundamentals',
            description: 'Solidify your understanding of JavaScript basics including variables, data types, functions, and control flow.',
            resources: [
                { text: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'JavaScript.info - Modern JavaScript Tutorial', url: 'https://javascript.info/' },
                { text: 'Eloquent JavaScript - Free book on JavaScript', url: 'https://eloquentjavascript.net/' }
            ]
        },
        {
            title: 'Node.js Basics',
            description: 'Get started with Node.js, learn about asynchronous programming, the event loop, and modules.',
            resources: [
                { text: 'Node.js Official Documentation', url: 'https://nodejs.org/en/docs/' },
                { text: 'Node.js Basics - W3Schools', url: 'https://www.w3schools.com/nodejs/' },
                { text: 'Node.js Tutorial - Mozilla', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction' }
            ]
        },
        {
            title: 'Node.js Modules',
            description: 'Understand how to use and create modules in Node.js, including built-in modules and npm packages.',
            resources: [
                { text: 'Node.js Modules - Node.js Official Documentation', url: 'https://nodejs.org/api/modules.html' },
                { text: 'NPM Documentation', url: 'https://docs.npmjs.com/' },
                { text: 'Creating and Using Modules in Node.js - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/nodejs-modules-overview' }
            ]
        },
        {
            title: 'Express.js Framework',
            description: 'Learn Express.js, a popular web application framework for Node.js, for building APIs and web apps.',
            resources: [
                { text: 'Express.js Official Documentation', url: 'https://expressjs.com/' },
                { text: 'Express.js Tutorial - Mozilla', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs' },
                { text: 'Express.js Crash Course - Traversy Media (YouTube)', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE' }
            ]
        },
        {
            title: 'Asynchronous JavaScript in Node.js',
            description: 'Master asynchronous programming patterns in Node.js using callbacks, promises, and async/await.',
            resources: [
                { text: 'Asynchronous Programming in JavaScript - MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous' },
                { text: 'Async/Await in JavaScript - JavaScript.info', url: 'https://javascript.info/async-await' },
                { text: 'Understanding Asynchronous JavaScript - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/understanding-asynchronous-javascript' }
            ]
        },
        {
            title: 'RESTful APIs with Node.js',
            description: 'Learn how to build RESTful APIs using Node.js and Express.js, including CRUD operations and middleware.',
            resources: [
                { text: 'RESTful API Design - Wikipedia', url: 'https://en.wikipedia.org/wiki/Representational_state_transfer' },
                { text: 'Building RESTful APIs with Express.js - Scotch.io', url: 'https://scotch.io/tutorials/build-a-restful-api-using-node-and-express-4' },
                { text: 'Creating a RESTful API with Node.js - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/nodejs-creating-restful-api' }
            ]
        },
        {
            title: 'Database Integration with Node.js',
            description: 'Integrate databases like MongoDB, MySQL, or PostgreSQL with Node.js applications using ORMs or raw drivers.',
            resources: [
                { text: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'Mongoose - MongoDB ODM for Node.js', url: 'https://mongoosejs.com/' },
                { text: 'Using MySQL with Node.js - MySQL Documentation', url: 'https://dev.mysql.com/doc/mysql-nodejs/en/' }
            ]
        },
        {
            title: 'Authentication and Authorization',
            description: 'Implement authentication and authorization in Node.js applications using libraries like Passport.js or JSON Web Tokens (JWT).',
            resources: [
                { text: 'Passport.js Official Documentation', url: 'http://www.passportjs.org/docs/' },
                { text: 'JWT.io - JSON Web Tokens', url: 'https://jwt.io/' },
                { text: 'Implementing Authentication in Node.js Apps - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs' }
            ]
        },
        {
            title: 'Real-time Web Applications with Socket.IO',
            description: 'Learn how to build real-time web applications using Socket.IO, a library for WebSocket communication in Node.js.',
            resources: [
                { text: 'Socket.IO Official Documentation', url: 'https://socket.io/docs/v4' },
                { text: 'Build Real-time Apps with WebSockets - Scotch.io', url: 'https://scotch.io/tutorials/build-a-real-time-chat-application-with-modulus-and-websockets' },
                { text: 'Creating a Chat Application with Socket.IO - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/how-to-create-a-web-server-in-node-js-with-the-http-module' }
            ]
        },
        {
            title: 'Node.js Security Best Practices',
            description: 'Learn about common security vulnerabilities in Node.js applications and best practices to mitigate them.',
            resources: [
                { text: 'Node.js Security Checklist - Sqreen Blog', url: 'https://blog.sqreen.com/node-js-security-checklist/' },
                { text: 'Secure Node.js RESTful APIs - Auth0 Blog', url: 'https://auth0.com/blog/node-js-security-best-practices/' },
                { text: 'Node.js Security Best Practices - OWASP', url: 'https://cheatsheetseries.owasp.org/cheatsheets/Nodejs_Security_Cheat_Sheet.html' }
            ]
        },
        {
            title: 'Performance Optimization in Node.js',
            description: 'Optimize the performance of Node.js applications by identifying and addressing performance bottlenecks.',
            resources: [
                { text: 'Node.js Performance Tips - RisingStack', url: 'https://blog.risingstack.com/node-js-performance-tips/' },
                { text: 'Node.js Performance Monitoring Tools - Scout', url: 'https://scoutapm.com/blog/nodejs-performance-tuning' },
                { text: 'Optimizing Node.js Applications - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorial_series/optimizing-node-js' }
            ]
        },         // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Node JS
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>Node.js is a powerful runtime environment for executing JavaScript code outside of a web browser. It allows developers to build scalable and high-performance applications using JavaScript on the server-side. Node.js uses an event-driven, non-blocking I/O model, which makes it lightweight and efficient for handling concurrent requests. It has a vibrant ecosystem of modules available through npm (Node Package Manager), enabling developers to easily integrate third-party libraries and frameworks into their applications.</p>
                        <p>Node.js is widely used for building web servers, APIs, real-time applications, and microservices due to its flexibility, performance, and ease of use.</p>
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
