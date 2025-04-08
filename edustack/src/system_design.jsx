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
            title: 'Understanding System Design Fundamentals',
            description: 'Learn about the key principles and concepts of system design, including scalability, availability, reliability, performance, and fault tolerance.',
            resources: [
                { text: 'System Design Primer - GitHub', url: 'https://github.com/donnemartin/system-design-primer' },
                { text: 'High Scalability', url: 'http://highscalability.com/' },
                { text: 'Designing Data-Intensive Applications by Martin Kleppmann', url: 'https://dataintensive.net/' }
            ]
        },
        {
            title: 'Designing Distributed Systems',
            description: 'Explore the challenges and best practices for designing distributed systems, including distributed databases, caching, messaging queues, and load balancing.',
            resources: [
                { text: 'Distributed Systems for Fun and Profit', url: 'http://book.mixu.net/distsys/single-page.html' },
                { text: 'Designing Data-Intensive Applications by Martin Kleppmann', url: 'https://dataintensive.net/' },
                { text: 'Distributed Systems Principles and Paradigms by Andrew S. Tanenbaum', url: 'https://www.pearson.com/us/higher-education/program/Tanenbaum-Distributed-Systems-Principles-and-Paradigms/PGM335429.html' }
            ]
        },
        {
            title: 'Architectural Patterns and Styles',
            description: 'Learn about different architectural patterns and styles, such as client-server, microservices, monolithic, event-driven, and serverless architectures.',
            resources: [
                { text: 'Microservices Patterns by Chris Richardson', url: 'https://www.manning.com/books/microservices-patterns' },
                { text: 'Building Microservices by Sam Newman', url: 'https://samnewman.io/books/building_microservices/' },
                { text: 'Serverless Architectures on AWS by Peter Sbarski', url: 'https://www.manning.com/books/serverless-architectures-on-aws' }
            ]
        },
        {
            title: 'Database Design and Management',
            description: 'Understand database design principles, relational and NoSQL databases, data modeling, indexing, sharding, replication, and consistency models.',
            resources: [
                { text: 'Designing Data-Intensive Applications by Martin Kleppmann', url: 'https://dataintensive.net/' },
                { text: 'SQL Database Design', url: 'https://www.sqlservertutorial.net/sql-server-basics/sql-server-database-design/' },
                { text: 'MongoDB Documentation', url: 'https://docs.mongodb.com/' }
            ]
        },
        {
            title: 'Caching Strategies',
            description: 'Explore caching techniques to improve performance, including in-memory caching, distributed caching, CDN caching, and cache eviction policies.',
            resources: [
                { text: 'Caching: The Good, the Bad, and the Ugly', url: 'https://www.infoq.com/articles/cache-what-you-need-to-know/' },
                { text: 'Redis Documentation', url: 'https://redis.io/documentation' },
                { text: 'Memcached Documentation', url: 'https://memcached.org/' }
            ]
        },
        {
            title: 'API Design and Management',
            description: 'Learn about API design principles, RESTful APIs, GraphQL, API gateways, versioning, authentication, rate limiting, and monitoring.',
            resources: [
                { text: 'RESTful API Design Best Practices', url: 'https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design' },
                { text: 'GraphQL Documentation', url: 'https://graphql.org/learn/' },
                { text: 'API Gateway Documentation', url: 'https://docs.aws.amazon.com/apigateway/index.html' }
            ]
        },
        {
            title: 'Message Queuing and Event Sourcing',
            description: 'Understand message queuing systems, event-driven architectures, pub/sub patterns, message brokers, and event sourcing.',
            resources: [
                { text: 'Apache Kafka Documentation', url: 'https://kafka.apache.org/documentation/' },
                { text: 'RabbitMQ Documentation', url: 'https://www.rabbitmq.com/documentation.html' },
                { text: 'Event Sourcing and CQRS', url: 'https://martinfowler.com/eaaDev/EventSourcing.html' }
            ]
        },
        {
            title: 'Scalability and Performance Optimization',
            description: 'Learn about techniques for scaling systems horizontally and vertically, optimizing performance, identifying bottlenecks, and conducting load testing.',
            resources: [
                { text: 'Scalability for Dummies', url: 'https://www.lecloud.net/post/7295452622/scalability-for-dummies-part-1-clones' },
                { text: 'Performance Testing in the Continuous Delivery Pipeline', url: 'https://www.thoughtworks.com/continuous-delivery/performance-testing' },
                { text: 'JMeter Documentation', url: 'https://jmeter.apache.org/usermanual/index.html' }
            ]
        },
        {
            title: 'Security and Compliance',
            description: 'Explore security best practices, encryption, authentication, authorization, identity management, compliance standards, and security audits.',
            resources: [
                { text: 'OWASP Top Ten Web Application Security Risks', url: 'https://owasp.org/www-project-top-ten/' },
                { text: 'AWS Security Best Practices', url: 'https://docs.aws.amazon.com/whitepapers/latest/aws-overview/security-best-practices.html' },
                { text: 'Azure Security Documentation', url: 'https://docs.microsoft.com/en-us/azure/security/fundamentals/' }
            ]
        },
        {
            title: 'Monitoring and Alerting',
            description: 'Learn about monitoring tools, metrics, logging, centralized logging, anomaly detection, dashboards, and alerting systems.',
            resources: [
                { text: 'Prometheus Documentation', url: 'https://prometheus.io/docs/' },
                { text: 'Grafana Documentation', url: 'https://grafana.com/docs/grafana/latest/' },
                { text: 'ELK Stack Documentation', url: 'https://www.elastic.co/guide/index.html' }
            ]
        }         // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    System Design
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>
System design is the process of creating high-level architectural designs for complex software systems that meet specific requirements such as scalability, reliability, and performance. It involves breaking down a system into smaller components and defining how these components interact with each other to achieve the desired functionality. System design typically includes designing the system's architecture, data storage and retrieval mechanisms, communication protocols, and handling of concurrency and scalability challenges. It also involves selecting appropriate technologies, frameworks, and design patterns to implement the system efficiently. System design is crucial for building scalable and maintainable software systems that can handle large volumes of traffic and user interactions effectively</p>
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
