import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function Roadmap() {
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const [showComputerScienceContent, setShowComputerScienceContent] = useState(false);

    const showContent = (index) => {
        setSelectedContentIndex(index);
        setShowComputerScienceContent(false); // Close computer science content when clicking on other sections
    };

    const toggleComputerScienceContent = () => {
        setShowComputerScienceContent(!showComputerScienceContent);
        setSelectedContentIndex(null); // Close other content when clicking on computer science section
    };

    const contentData = [
        {
            title: 'Introduction to Computer Science',
            description: 'An introductory course covering the fundamental concepts of computer science, including algorithms, data structures, programming languages, and problem-solving techniques. Topics may include computational thinking, algorithm analysis, and basic programming principles.',
            resources: [
                { text: 'Harvard CS50', url: 'https://online-learning.harvard.edu/course/cs50-introduction-computer-science' },
                { text: 'Coursera - Introduction to Computer Science and Programming Using Python', url: 'https://www.coursera.org/learn/python' },
            ]
        },
        {
            title: 'Data Structures and Algorithms',
            description: 'Explore the fundamental data structures (arrays, linked lists, trees, graphs, etc.) and algorithms (sorting, searching, hashing, etc.) used to solve real-world problems efficiently. Topics may include time complexity analysis, recursion, and dynamic programming.',
            resources: [
                { text: 'MIT OpenCourseWare - Introduction to Algorithms', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/' },
                { text: 'GeeksforGeeks - Data Structures', url: 'https://www.geeksforgeeks.org/data-structures/' },
            ]
        },
        {
            title: 'Computer Networks',
            description: 'Study the principles and protocols used in computer networks, including TCP/IP, routing, switching, and network security. Topics may include network architecture, OSI model, IP addressing, and network administration.',
            resources: [
                { text: 'Stanford CS144 - Introduction to Computer Networking', url: 'https://online.stanford.edu/courses/soe-ycscs144-introduction-computer-networking' },
                { text: 'Coursera - Computer Networking', url: 'https://www.coursera.org/specializations/computer-networking' },
            ]
        },
        {
            title: 'Operating Systems',
            description: 'Explore the concepts and principles of operating systems, including process management, memory management, file systems, and concurrency. Topics may include process synchronization, deadlock handling, memory allocation, and virtualization.',
            resources: [
                { text: 'MIT OpenCourseWare - Operating Systems', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-828-operating-system-engineering-fall-2006/' },
                { text: 'Coursera - Operating Systems and You: Becoming a Power User', url: 'https://www.coursera.org/learn/os-power-user' },
            ]
        },
        {
            title: 'Databases',
            description: 'Learn about database management systems, including relational databases, SQL, normalization, and database design. Topics may include database modeling, transaction management, database security, and NoSQL databases.',
            resources: [
                { text: 'Stanford Online - Databases: Self-paced Course', url: 'https://online.stanford.edu/courses/soe-ycs0007-databases' },
                { text: 'Coursera - Introduction to Databases', url: 'https://www.coursera.org/learn/intro-to-database' },
            ]
        },
        {
            title: 'Software Engineering',
            description: 'Study the principles and practices of software development, including requirements analysis, software design, testing, and maintenance. Topics may include software development methodologies, agile practices, software quality assurance, and software project management.',
            resources: [
                { text: 'Coursera - Software Engineering Fundamentals', url: 'https://www.coursera.org/specializations/software-engineering' },
                { text: 'IEEE Software Engineering Body of Knowledge (SWEBOK)', url: 'https://www.computer.org/education/bodies-of-knowledge/software-engineering' },
            ]
        },
        {
            title: 'Artificial Intelligence',
            description: 'Explore the principles and techniques used in artificial intelligence, including machine learning, natural language processing, and computer vision. Topics may include search algorithms, neural networks, deep learning, and AI ethics.',
            resources: [
                { text: 'Stanford CS221 - Artificial Intelligence: Principles and Techniques', url: 'https://online.stanford.edu/courses/soe-ycs0003-artificial-intelligence' },
                { text: 'Coursera - Machine Learning', url: 'https://www.coursera.org/learn/machine-learning' },
            ]
        },
        {
            title: 'Web Development',
            description: 'Learn about web technologies such as HTML, CSS, JavaScript, and frameworks like React and Angular for building dynamic web applications. Topics may include front-end development, back-end development, web APIs, and responsive design.',
            resources: [
                { text: 'MDN Web Docs - Web Development', url: 'https://developer.mozilla.org/en-US/docs/Learn' },
                { text: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' },
            ]
        },
        {
            title: 'Cybersecurity',
            description: 'Study the principles and techniques used to secure computer systems and networks from cyber threats and attacks. Topics may include cryptography, network security, ethical hacking, and cybersecurity laws and regulations.',
            resources: [
                { text: 'Cybrary - Cybersecurity Fundamentals', url: 'https://www.cybrary.it/course/cybersecurity-fundamentals/' },
                { text: 'Coursera - Introduction to Cyber Security', url: 'https://www.coursera.org/learn/intro-cyber-security' },
            ]
        },
        {
            title: 'Computer Graphics',
            description: 'Explore the principles and algorithms used to generate and manipulate images and visual content in computer graphics applications. Topics may include raster graphics, vector graphics, rendering techniques, and 3D modeling.',
            resources: [
                { text: 'OpenGL - Official Website', url: 'https://www.opengl.org/' },
                { text: 'Coursera - Computer Graphics', url: 'https://www.coursera.org/learn/computer-graphics' },
            ]
        },
        // Add more topics with detailed descriptions as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleComputerScienceContent}>
                        Computer Science
                    </div>
                    {showComputerScienceContent && (
                        <div className="frontend-content">
                            <p>The computer science covers a wide range of topics essential for understanding and building software systems. It includes programming, algorithms, data structures, computer architecture, and more.</p>
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
