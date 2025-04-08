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
            title: 'Basics of JavaScript',
            description: 'Learn the fundamentals of JavaScript including variables, data types, operators, and control flow.',
            resources: [
                { text: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'JavaScript.info - Modern JavaScript Tutorial', url: 'https://javascript.info/' },
                { text: 'Eloquent JavaScript - Free book on JavaScript', url: 'https://eloquentjavascript.net/' }
            ]
        },
        {
            title: 'DOM Manipulation',
            description: 'Understand how to manipulate the Document Object Model (DOM) using JavaScript to interact with web pages.',
            resources: [
                { text: 'MDN Web Docs - DOM', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model' },
                { text: 'DOM Enlightenment - Free book on DOM manipulation', url: 'http://domenlightenment.com/' },
                { text: 'Traversing the DOM - Codecademy', url: 'https://www.codecademy.com/learn/traversing-the-dom' }
            ]
        },
        {
            title: 'ES6+ Features',
            description: 'Explore modern JavaScript features introduced in ECMAScript 6 and later versions such as arrow functions, classes, and destructuring.',
            resources: [
                { text: 'Exploring ES6 - Free book on ES6 features', url: 'https://exploringjs.com/es6/' },
                { text: 'Understanding ECMAScript 6 - Medium', url: 'https://medium.com/javascript-in-plain-english/understanding-ecmascript-6-1add11e2a4e2' },
                { text: 'ES6 Features - ES6-Features.org', url: 'https://es6-features.org/' }
            ]
        },
        {
            title: 'Asynchronous JavaScript',
            description: 'Master asynchronous programming in JavaScript using callbacks, promises, and async/await for handling asynchronous operations.',
            resources: [
                { text: 'Asynchronous JavaScript - MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous' },
                { text: 'JavaScript Promises - JavaScript.info', url: 'https://javascript.info/promise-basics' },
                { text: 'Async/Await - JavaScript.info', url: 'https://javascript.info/async-await' }
            ]
        },
        {
            title: 'Functional Programming',
            description: 'Learn functional programming concepts in JavaScript such as higher-order functions, map, filter, and reduce.',
            resources: [
                { text: 'Functional-Light JavaScript - Free book on functional programming', url: 'https://github.com/getify/Functional-Light-JS' },
                { text: 'Functional Programming Principles - Medium', url: 'https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0' },
                { text: 'Functional Programming in JavaScript - FunFunFunction (YouTube)', url: 'https://www.youtube.com/watch?v=BMUiFMZr7vk' }
            ]
        },
        {
            title: 'Client-Side Frameworks',
            description: 'Explore popular client-side frameworks/libraries like React.js, Vue.js, or Angular for building dynamic user interfaces.',
            resources: [
                { text: 'React Official Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
                { text: 'Vue.js Official Documentation', url: 'https://vuejs.org/v2/guide/' },
                { text: 'Angular Official Documentation', url: 'https://angular.io/docs' }
            ]
        },
        {
            title: 'Module Bundlers',
            description: 'Understand module bundlers like Webpack or Parcel.js for bundling JavaScript files and managing dependencies.',
            resources: [
                { text: 'Webpack Official Documentation', url: 'https://webpack.js.org/' },
                { text: 'Parcel.js Official Documentation', url: 'https://v2.parceljs.org/' },
                { text: 'Introduction to Webpack - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/what-is-webpack-and-how-does-it-work/ ' }
            ]
        },
        {
            title: 'Testing JavaScript Applications',
            description: 'Learn about different testing frameworks and libraries like Jest, Mocha, and Jasmine for testing JavaScript code.',
            resources: [
                { text: 'Jest Official Documentation', url: 'https://jestjs.io/docs/getting-started' },
                { text: 'Mocha Official Documentation', url: 'https://mochajs.org/' },
                { text: 'Jasmine Official Documentation', url: 'https://jasmine.github.io/' }
            ]
        },
        {
            title: 'Server-Side JavaScript',
            description: 'Explore server-side JavaScript environments like Node.js for building scalable and performant backend applications.',
            resources: [
                { text: 'Node.js Official Documentation', url: 'https://nodejs.org/en/docs/' },
                { text: 'Express.js Official Documentation', url: 'https://expressjs.com/' },
                { text: 'Building RESTful APIs with Node.js - Medium', url: 'https://medium.com/@onejohi/building-a-simple-rest-api-with-nodejs-and-express-da6273ed7ca9' }
            ]
        },
        {
            title: 'Database Integration',
            description: 'Learn how to integrate databases like MongoDB, MySQL, or PostgreSQL with Node.js applications for data storage and retrieval.',
            resources: [
                { text: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'MySQL Official Documentation', url: 'https://dev.mysql.com/doc/' },
                { text: 'PostgreSQL Official Documentation', url: 'https://www.postgresql.org/docs/' }
            ]
        },
        {
            title: 'Authentication and Authorization',
            description: 'Implement user authentication and authorization in JavaScript applications using libraries like Passport.js or JSON Web Tokens (JWT).',
            resources: [
                { text: 'Passport.js Official Documentation', url: 'http://www.passportjs.org/docs/' },
                { text: 'JSON Web Tokens (JWT) Official Website', url: 'https://jwt.io/' },
                { text: 'Authentication and Authorization with Node.js - Medium', url: 'https://medium.com/swlh/json-web-token-jwt-the-right-way-of-implementing-authentication-in-your-app-9d10689a7f5c' }
            ]
        },
        {
            title: 'Error Handling',
            description: 'Learn best practices for error handling in JavaScript applications including try/catch blocks, error logging, and error middleware.',
            resources: [
                { text: 'Error Handling in Node.js - Medium', url: 'https://medium.com/@gordonnl/error-handling-in-node-js-using-error-objects-ab8ab7646f10' },
                { text: 'Error Handling Best Practices - Airbrake', url: 'https://airbrake.io/blog/javascript/javascript-error-handling-best-practices' },
                { text: 'Express Error Handling - Express.js Official Documentation', url: 'https://expressjs.com/en/guide/error-handling.html' }
            ]
        },
        {
            title: 'Deployment and DevOps',
            description: 'Learn how to deploy JavaScript applications to production environments and set up continuous integration and deployment (CI/CD) pipelines.',
            resources: [
                { text: 'Deploying Node.js Apps - Heroku Dev Center', url: 'https://devcenter.heroku.com/categories/nodejs-support' },
                { text: 'CI/CD with GitHub Actions - GitHub Docs', url: 'https://docs.github.com/en/actions/guides/building-and-testing-nodejs-or-python' },
                { text: 'AWS DevOps Blog', url: 'https://aws.amazon.com/blogs/devops/' }
            ]
        }
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Javacript
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>JavaScript, often abbreviated as JS, is a versatile and dynamic programming language primarily used for building interactive and dynamic web pages. Developed by Netscape in the mid-1990s, JavaScript has evolved into a powerful language that runs on both the client and server sides of web development. It enables developers to add interactivity, manipulate DOM elements, handle events, and create dynamic content on web pages.</p>
                        <p>JavaScript is essential for front-end web development, where it works alongside HTML and CSS to create engaging user interfaces. Additionally, with the advent of Node.js, JavaScript can now be used for server-side programming, enabling full-stack development with a single language. JavaScript has a vast ecosystem of libraries and frameworks, including React, Angular, and Vue.js, which further extend its capabilities for building complex web applications.</p>
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
