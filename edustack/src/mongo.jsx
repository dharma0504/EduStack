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
            title: 'Introduction to MongoDB',
            description: 'Understand the basics of MongoDB, including its architecture, data model, and document-oriented approach.',
            resources: [
                { text: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'MongoDB University', url: 'https://university.mongodb.com/' },
                { text: 'MongoDB Manual', url: 'https://docs.mongodb.com/manual/' }
            ]
        },
        {
            title: 'CRUD Operations in MongoDB',
            description: 'Learn how to perform Create, Read, Update, and Delete operations in MongoDB using the MongoDB shell and drivers for various programming languages.',
            resources: [
                { text: 'CRUD Operations in MongoDB - MongoDB Manual', url: 'https://docs.mongodb.com/manual/crud/' },
                { text: 'MongoDB Shell Quick Reference', url: 'https://docs.mongodb.com/manual/reference/mongo-shell/' },
                { text: 'MongoDB Drivers', url: 'https://docs.mongodb.com/drivers/' }
            ]
        },
        {
            title: 'Schema Design and Data Modeling',
            description: 'Explore best practices for designing schemas and modeling data in MongoDB. Understand when to embed documents and when to reference other documents.',
            resources: [
                { text: 'Data Modeling Introduction - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/data-modeling-introduction/' },
                { text: 'Schema Design Patterns - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/applications/data-models-relationships/' },
                { text: 'MongoDB Compass', url: 'https://www.mongodb.com/products/compass' }
            ]
        },
        {
            title: 'Indexes and Performance Optimization',
            description: 'Learn about MongoDB indexes and how to use them to improve query performance. Explore strategies for optimizing MongoDB performance.',
            resources: [
                { text: 'Indexing Strategies - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/indexes/' },
                { text: 'Performance Best Practices - MongoDB Manual', url: 'https://docs.mongodb.com/manual/administration/optimization/' },
                { text: 'Exploring Performance with the Database Profiler - MongoDB Manual', url: 'https://docs.mongodb.com/manual/tutorial/manage-the-database-profiler/' }
            ]
        },
        {
            title: 'Aggregation Framework',
            description: 'Master the MongoDB Aggregation Framework for performing complex data aggregation tasks, including grouping, sorting, and data transformation.',
            resources: [
                { text: 'Aggregation Pipeline - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/aggregation-pipeline/' },
                { text: 'Aggregation Examples - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/tutorial/aggregation-examples/' },
                { text: 'Aggregation Cheat Sheet - MongoDB University', url: 'https://university.mongodb.com/mercury/M001/2019_March/handouts/M001_Aggregation_CheatSheet_March2019.pdf' }
            ]
        },
        {
            title: 'Transactions and Atomicity',
            description: 'Understand transactions in MongoDB and how they provide support for atomic operations across multiple documents.',
            resources: [
                { text: 'Transactions and Concurrency - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/transactions/' },
                { text: 'Transactions in MongoDB - MongoDB University', url: 'https://university.mongodb.com/mercury/M001/2019_March/handouts/M001_Transactions_CheatSheet_March2019.pdf' }
            ]
        },
        {
            title: 'Security and Authentication',
            description: 'Learn how to secure your MongoDB deployment, including authentication mechanisms, access control, and encryption.',
            resources: [
                { text: 'Security Checklist - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/administration/security-checklist/' },
                { text: 'Authentication - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/authentication/' },
                { text: 'Encryption at Rest - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/security-encryption-at-rest/' }
            ]
        },
        {
            title: 'Scaling and High Availability',
            description: 'Explore strategies for scaling MongoDB deployments and ensuring high availability, including sharding, replication, and monitoring.',
            resources: [
                { text: 'Sharding - MongoDB Manual', url: 'https://docs.mongodb.com/manual/sharding/' },
                { text: 'Replication - MongoDB Manual', url: 'https://docs.mongodb.com/manual/replication/' },
                { text: 'Monitoring - MongoDB Manual', url: 'https://docs.mongodb.com/manual/administration/monitoring/' }
            ]
        },
        {
            title: 'Backup and Disaster Recovery',
            description: 'Learn about backup strategies and disaster recovery planning to ensure the safety and integrity of your MongoDB data.',
            resources: [
                { text: 'Backup and Restore - MongoDB Manual', url: 'https://docs.mongodb.com/manual/core/backups/' },
                { text: 'Disaster Recovery - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/administration/backup-and-restore/' }
            ]
        },
        {
            title: 'Geospatial Queries',
            description: 'Explore MongoDB\'s support for geospatial data and learn how to perform geospatial queries for location-based applications.',
            resources: [
                { text: 'Geospatial Queries - MongoDB Manual', url: 'https://docs.mongodb.com/manual/geospatial-queries/' },
                { text: 'Geospatial Indexes - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/core/geospatial-indexes/' }
            ]
        },
        {
            title: 'Change Streams',
            description: 'Understand how change streams in MongoDB allow you to listen for changes in data in real-time, enabling reactive applications.',
            resources: [
                { text: 'Change Streams - MongoDB Manual', url: 'https://docs.mongodb.com/manual/changeStreams/' },
                { text: 'Change Streams with Node.js - MongoDB Documentation', url: 'https://docs.mongodb.com/manual/changeStreams/#change-streams-and-node-js' }
            ]
        },
        {
            title: 'MongoDB Atlas',
            description: 'Learn about MongoDB\'s fully managed cloud database service, MongoDB Atlas, and how to deploy, manage, and scale MongoDB clusters in the cloud.',
            resources: [
                { text: 'MongoDB Atlas Documentation', url: 'https://docs.atlas.mongodb.com/' },
                { text: 'MongoDB Atlas Quick Start Guide', url: 'https://docs.atlas.mongodb.com/getting-started/' }
            ]
        },
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Mongo DB
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>MongoDB is a popular NoSQL database management system known for its flexibility, scalability, and performance. Unlike traditional relational databases, MongoDB stores data in flexible, JSON-like documents, making it well-suited for handling unstructured or semi-structured data. It uses a flexible schema design, allowing developers to easily iterate and adapt their data models as their application evolves. MongoDB supports various data models, including key-value pairs, arrays, and nested documents, enabling complex data structures to be stored efficiently. It is widely used in modern web development, microservices architectures, and big data applications due to its ease of use, horizontal scalability, and support for distributed data storage and processing.</p>
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
