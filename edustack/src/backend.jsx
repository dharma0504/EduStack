import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function Roadmap() {
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const [showBackendContent, setShowBackendContent] = useState(false);

    const showContent = (index) => {
        setSelectedContentIndex(index);
        setShowBackendContent(false); // Close backend content when clicking on other sections
    };

    const toggleBackendContent = () => {
        setShowBackendContent(!showBackendContent);
        setSelectedContentIndex(null); // Close other content when clicking on backend section
    };

    const contentData = [
        {
            title: 'Node.js',
            description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. It allows you to run JavaScript code on the server-side, enabling the development of scalable and high-performance web applications.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Node.js Documentation', url: 'https://nodejs.org/en/docs/' },
                { text: 'Node.js Tutorial - W3Schools', url: 'https://www.w3schools.com/nodejs/' },
                { text: 'Node.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=fBNz5xF-Kx4' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Express.js',
            description: 'Express.js is a minimalist web framework for Node.js. It provides a robust set of features for building web and mobile applications, including routing, middleware support, and template engines.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Express.js Documentation', url: 'https://expressjs.com/' },
                { text: 'Express.js Tutorial - MDN Web Docs', url: 'https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs' },
                { text: 'Express.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=L72fhGm1tfE' },
                // Add more resources as needed
            ]
        },
        {
            title: 'MongoDB',
            description: 'MongoDB is a NoSQL database that stores data in flexible, JSON-like documents. It is widely used in modern web development for its scalability, performance, and ease of use.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'MongoDB Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'MongoDB University', url: 'https://university.mongodb.com/' },
                { text: 'MongoDB Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=-56x56UppqQ' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Django',
            description: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. It follows the Model-View-Template (MVT) architecture and provides tools for building secure and scalable web applications.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Django Documentation', url: 'https://docs.djangoproject.com/en/3.2/' },
                { text: 'Django Girls Tutorial', url: 'https://tutorial.djangogirls.org/' },
                { text: 'Django Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=F5mRW0jo-U4' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Ruby on Rails',
            description: 'Ruby on Rails, often simply Rails, is a server-side web application framework written in Ruby. It follows the Model-View-Controller (MVC) pattern and emphasizes convention over configuration, making it efficient for building web applications.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Ruby on Rails Guides', url: 'https://guides.rubyonrails.org/' },
                { text: 'Rails Tutorial by Michael Hartl', url: 'https://www.railstutorial.org/book' },
                { text: 'Ruby on Rails Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=pPy0GQJLZUM' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Spring Boot',
            description: 'Spring Boot is an open-source Java-based framework used to create microservices and stand-alone production-ready applications. It provides a simplified approach to Java development by auto-configuring many aspects of the application.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Spring Boot Documentation', url: 'https://docs.spring.io/spring-boot/docs/current/reference/html/' },
                { text: 'Spring Boot Tutorial - Baeldung', url: 'https://www.baeldung.com/spring-boot' },
                { text: 'Spring Boot Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=vtPkZShrvXQ' },
                // Add more resources as needed
            ]
        },
        {
            title: 'ASP.NET Core',
            description: 'ASP.NET Core is a cross-platform, high-performance framework for building modern, cloud-based, internet-connected applications. It supports multiple programming languages and integrates seamlessly with popular development tools.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'ASP.NET Core Documentation', url: 'https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0' },
                { text: 'ASP.NET Core Tutorial - Microsoft Learn', url: 'https://learn.microsoft.com/en-us/aspnet/core/?view=aspnetcore-6.0' },
                { text: 'ASP.NET Core Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=C5cnZ-gZy2I' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Flask',
            description: 'Flask is a lightweight Python web framework that provides tools and libraries for building web applications quickly and efficiently. It follows the Model-View-Controller (MVC) pattern and is known for its simplicity and flexibility.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Flask Documentation', url: 'https://flask.palletsprojects.com/en/2.1.x/' },
                { text: 'Flask Mega-Tutorial by Miguel Grinberg', url: 'https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-i-hello-world' },
                { text: 'Flask Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=Z1RJmh_OqeA' },
                // Add more resources as needed
            ]
        },
        {
            title: 'GraphQL',
            description: 'GraphQL is a query language for APIs and a runtime for executing those queries. It provides a more efficient and flexible alternative to REST APIs by allowing clients to request only the data they need.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'GraphQL Documentation', url: 'https://graphql.org/' },
                { text: 'GraphQL Tutorial - HowToGraphQL', url: 'https://www.howtographql.com/' },
                { text: 'GraphQL Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=ZQL7tL2S0oQ' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Laravel',
            description: 'Laravel is a PHP web framework used for building web applications following the Model-View-Controller (MVC) architectural pattern. It provides expressive syntax and a variety of tools for rapid application development.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Laravel Documentation', url: 'https://laravel.com/docs/8.x' },
                { text: 'Laravel Tutorial - Laracasts', url: 'https://laracasts.com/series/laravel-8-from-scratch' },
                { text: 'Laravel Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=MFh0Fd7BsjE' },
                // Add more resources as needed
            ]
        },
        // Add more backend technologies as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleBackendContent}>
                        Backend
                    </div>
                    {showBackendContent && (
                        <div className="frontend-content">
                            <p>Backend development involves the server-side logic of a web application. It includes handling data storage, processing requests, and managing user authentication and authorization.</p>
                            <p>Popular backend technologies include Node.js for server-side JavaScript, Express.js for building web APIs, and databases like MongoDB for data storage.</p>
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
