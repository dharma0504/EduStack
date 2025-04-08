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
            title: 'Java Basics',
            description: 'Learn the fundamentals of Java programming language, including variables, data types, operators, control flow statements (if-else, loops), and basic input/output operations.',
            resources: [
                { text: 'Java Documentation - Oracle', url: 'https://docs.oracle.com/en/java/javase/17/' },
                { text: 'Java Tutorial - W3Schools', url: 'https://www.w3schools.com/java/' },
                { text: 'Java Programming - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/java/' }
            ]
        },
        {
            title: 'Object-Oriented Programming (OOP)',
            description: 'Understand the principles of object-oriented programming such as classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
            resources: [
                { text: 'Object-Oriented Programming in Java - Tutorialspoint', url: 'https://www.tutorialspoint.com/java/java_object_oriented.htm' },
                { text: 'Java OOP Concepts - Oracle', url: 'https://docs.oracle.com/javase/tutorial/java/concepts/' },
                { text: 'Object-Oriented Programming - Baeldung', url: 'https://www.baeldung.com/java-object-oriented-programming' }
            ]
        },
        {
            title: 'Collections Framework',
            description: 'Explore the Java Collections Framework, which provides a set of interfaces and classes for managing and manipulating collections of objects.',
            resources: [
                { text: 'Java Collections Framework - Oracle', url: 'https://docs.oracle.com/javase/8/docs/technotes/guides/collections/overview.html' },
                { text: 'Collections Framework in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/collections-in-java-2/' },
                { text: 'Java Collections - Baeldung', url: 'https://www.baeldung.com/java-collections' }
            ]
        },
        {
            title: 'Exception Handling',
            description: 'Learn how to handle exceptions in Java using try-catch blocks, throw, throws, and finally. Understand checked and unchecked exceptions.',
            resources: [
                { text: 'Java Exception Handling - Oracle', url: 'https://docs.oracle.com/javase/tutorial/essential/exceptions/' },
                { text: 'Exception Handling in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/exceptions-in-java/' },
                { text: 'Java Exceptions - Baeldung', url: 'https://www.baeldung.com/java-exceptions' }
            ]
        },
        {
            title: 'Multithreading and Concurrency',
            description: 'Explore multithreading and concurrency concepts in Java, including threads, synchronization, locks, and concurrent data structures.',
            resources: [
                { text: 'Java Multithreading - Oracle', url: 'https://docs.oracle.com/javase/tutorial/essential/concurrency/' },
                { text: 'Multithreading in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/multithreading-in-java/' },
                { text: 'Java Concurrency - Baeldung', url: 'https://www.baeldung.com/java-concurrency' }
            ]
        },
        {
            title: 'Input-Output (I/O) Operations',
            description: 'Understand how to perform input and output operations in Java, including file handling, streams, serialization, and deserialization.',
            resources: [
                { text: 'Java I/O Tutorial - Oracle', url: 'https://docs.oracle.com/javase/tutorial/essential/io/' },
                { text: 'Input-Output in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/io-streams-in-java/' },
                { text: 'Java I/O - Baeldung', url: 'https://www.baeldung.com/java-io' }
            ]
        },
        {
            title: 'Java Database Connectivity (JDBC)',
            description: 'Learn how to connect Java applications to relational databases using JDBC, execute SQL queries, and handle database transactions.',
            resources: [
                { text: 'Java Database Connectivity (JDBC) - Oracle', url: 'https://docs.oracle.com/javase/tutorial/jdbc/' },
                { text: 'JDBC Tutorial - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/jdbc-java-database-connectivity/' },
                { text: 'JDBC in Java - Baeldung', url: 'https://www.baeldung.com/java-jdbc' }
            ]
        },
        {
            title: 'Java Generics',
            description: 'Understand generics in Java, which allow you to create classes, interfaces, and methods that operate on objects of specified types.',
            resources: [
                { text: 'Java Generics - Oracle', url: 'https://docs.oracle.com/javase/tutorial/java/generics/' },
                { text: 'Generics in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/generics-in-java/' },
                { text: 'Java Generics - Baeldung', url: 'https://www.baeldung.com/java-generics' }
            ]
        },
        {
            title: 'Java Annotations',
            description: 'Explore Java annotations, which provide metadata about the program and can be used for various purposes such as compiler instructions, code analysis, and runtime processing.',
            resources: [
                { text: 'Java Annotations - Oracle', url: 'https://docs.oracle.com/javase/tutorial/java/annotations/' },
                { text: 'Annotations in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/annotations-in-java/' },
                { text: 'Java Annotations - Baeldung', url: 'https://www.baeldung.com/java-annotations' }
            ]
        },
        {
            title: 'Java Streams API',
            description: 'Learn about the Java Streams API introduced in Java 8, which provides a functional approach to process collections of objects.',
            resources: [
                { text: 'Java Stream API - Oracle', url: 'https://docs.oracle.com/javase/8/docs/api/java/util/stream/package-summary.html' },
                { text: 'Java Streams API Tutorial - Baeldung', url: 'https://www.baeldung.com/java-stream' },
                { text: 'Streams in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/stream-in-java/' }
            ]
        },
        {
            title: 'Unit Testing with JUnit',
            description: 'Learn how to write unit tests for Java applications using JUnit, a popular testing framework for Java.',
            resources: [
                { text: 'JUnit 5 User Guide - GitHub', url: 'https://junit.org/junit5/docs/current/user-guide/' },
                { text: 'JUnit Tutorial - Baeldung', url: 'https://www.baeldung.com/junit' },
                { text: 'Unit Testing in Java - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/unit-testing-java-junit/' }
            ]
        },
        {
            title: 'Build Automation with Maven',
            description: 'Understand how to manage Java projects and automate the build process using Apache Maven, a powerful build automation tool for Java projects.',
            resources: [
                { text: 'Apache Maven - Official Website', url: 'https://maven.apache.org/' },
                { text: 'Maven Tutorial - Baeldung', url: 'https://www.baeldung.com/maven' },
                { text: 'Maven in 5 Minutes - GitHub', url: 'https://maven.apache.org/guides/getting-started/maven-in-five-minutes.html' }
            ]
        },
        {
            title: 'Java EE (Enterprise Edition)',
            description: 'Explore Java EE, a set of specifications and APIs for building enterprise applications in Java. Learn about Servlets, JSP, JPA, EJB, and other Java EE technologies.',
            resources: [
                { text: 'Java EE Documentation - Oracle', url: 'https://javaee.github.io/javaee-spec/' },
                { text: 'Java EE Tutorial - JournalDev', url: 'https://www.journaldev.com/java/java-ee-tutorial' },
                { text: 'Java EE Overview - Baeldung', url: 'https://www.baeldung.com/java-ee-overview' }
            ]
        },         // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    JAVA
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>Java is a versatile, object-oriented programming language known for its portability and robustness. With its "Write Once, Run Anywhere" philosophy, Java allows developers to write code once and run it on any platform without recompilation. Its object-oriented nature promotes modular and reusable code, while automatic memory management via garbage collection ensures efficient resource utilization.</p>
                        <p>Widely used in web development, mobile app development, enterprise applications, and big data processing, Java's extensive ecosystem of libraries and frameworks makes it a popular choice for various applications.</p>
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
