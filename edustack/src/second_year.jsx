import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function SecondYearRoadmap() {
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
            title: 'Advanced Topics in DSA',
            description: 'Explore advanced data structures such as AVL trees, B-trees, tries, and advanced graph algorithms like Dijkstra\'s algorithm, Floyd-Warshall algorithm, and network flow algorithms. Study dynamic programming techniques for solving optimization problems efficiently. Learn about randomized algorithms, string algorithms, and computational geometry. Practice implementing these algorithms and data structures in various programming languages.',
            resources: [
                { title: 'GeeksforGeeks - Data Structures', link: 'https://www.geeksforgeeks.org/data-structures/' },
                { title: 'GeeksforGeeks - Algorithms', link: 'https://www.geeksforgeeks.org/fundamentals-of-algorithms/' },
                { title: 'Coursera - Algorithms Specialization by Stanford University', link: 'https://www.coursera.org/specializations/algorithms' }
            ]
        },
        {
            title: 'Designing and Analysis of Algorithms',
            description: 'Deepen your understanding of algorithmic paradigms such as divide and conquer, greedy algorithms, and dynamic programming. Study advanced algorithm design techniques like approximation algorithms, randomized algorithms, and online algorithms. Analyze the time and space complexity of algorithms using mathematical tools such as Big O notation, recurrence relations, and asymptotic analysis. Explore applications of algorithms in diverse fields such as computational biology, cryptography, and computer vision.',
            resources: [
                { title: 'Coursera - Algorithms by Princeton University', link: 'https://www.coursera.org/learn/algorithms-part1' },
                { title: 'MIT OpenCourseWare - Introduction to Algorithms', link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/' }
            ]
        },
        {
            title: 'Front-End Development',
            description: 'Master advanced concepts in HTML5, CSS3, and modern JavaScript frameworks like React.js. Learn about responsive web design, CSS preprocessors like Sass or Less, and front-end build tools like Webpack. Understand the principles of web accessibility, performance optimization, and cross-browser compatibility. Explore advanced topics such as state management with Redux, asynchronous programming with async/await, and server-side rendering with Next.js.',
            resources: [
                { title: 'MDN Web Docs - HTML', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { title: 'MDN Web Docs - CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { title: 'MDN Web Docs - JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { title: 'React Documentation', link: 'https://reactjs.org/docs/getting-started.html' },
                { title: 'Vue.js Documentation', link: 'https://vuejs.org/v2/guide/' }
            ]
        },
        {
            title: 'Back-End Development',
            description: 'Deepen your understanding of server-side programming with PHP, focusing on topics like object-oriented programming, database interactions, and security best practices. Gain proficiency in SQL by learning advanced querying techniques, transaction management, and database administration. Explore NoSQL databases like MongoDB or Firebase for handling unstructured data and scalable applications. Study server-side frameworks like Laravel (for PHP) or Express.js (for Node.js) for building robust and scalable web applications.',
            resources: [
                { title: 'PHP Documentation', link: 'https://www.php.net/manual/en/' },
                { title: 'W3Schools - SQL Tutorial', link: 'https://www.w3schools.com/sql/' },
                { title: 'MongoDB Documentation', link: 'https://docs.mongodb.com/' },
                { title: 'Firebase Documentation', link: 'https://firebase.google.com/docs' }
            ]
        },
        {
            title: 'Database Management Systems (DBMS)',
            description: 'Study Database Management Systems (DBMS) to understand fundamental concepts such as data modeling, relational database design, and database normalization. Learn SQL (Structured Query Language) for querying and manipulating data in relational databases. Explore advanced topics including database transactions, indexing, concurrency control, and database security. Gain practical experience by designing and implementing database systems for real-world applications.',
            resources: [
                { title: 'GeeksforGeeks - DBMS', link: 'https://www.geeksforgeeks.org/dbms/' },
                { title: 'W3Schools - SQL Tutorial', link: 'https://www.w3schools.com/sql/' },
                { title: 'Database Systems: The Complete Book', link: 'https://www.db-book.com/db7/index.html' }
            ]
        },
        {
            title: 'Project Work',
            description: 'Choose a project that challenges you to apply your knowledge and skills in a practical setting. Define clear project goals, requirements, and milestones, and follow an iterative development process. Collaborate with team members to distribute tasks, manage version control using Git, and conduct regular code reviews. Document your project thoroughly, including design decisions, implementation details, and user documentation. Present your project to peers, mentors, or potential employers to receive feedback and showcase your achievements.',
            resources: [
                { title: 'GitHub - Version Control with Git', link: 'https://guides.github.com/introduction/git-handbook/' },
                { title: 'GitHub - GitHub Guides',
                link: 'https://guides.github.com/' },
                { title: 'Markdown Guide', link: 'https://www.markdownguide.org/' }
            ]
        },
        {
            title: 'Internship',
            description: 'Seek internships at tech companies, startups, or research labs to gain hands-on experience in a professional work environment. Apply your theoretical knowledge to real-world problems, collaborate with experienced developers, and contribute to meaningful projects. Take initiative, ask questions, and seek mentorship to maximize your learning and professional growth during the internship. Network with professionals in the industry, attend company events, and explore different career paths within technology.',
            resources: [
                { title: 'LinkedIn Learning - Prepare for an Internship', link: 'https://www.linkedin.com/learning/preparing-for-an-internship' },
                { title: 'Glassdoor - Internship Search', link: 'https://www.glassdoor.com/index.htm' },
                { title: 'Indeed - Internship Opportunities', link: 'https://www.indeed.com/q-Internship-jobs.html' }
            ]
        }
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Second Year
                    </div>
                </div>
            </div>

            <div id="roadmapContainer" className={selectedContentIndex !== null ? 'roadmap-show' : ''} onClick={() => setSelectedContentIndex(null)}>
                <div id="roadmapContent">
                    {selectedContentIndex !== null && (
                        <div>
                            <h1>{contentData[selectedContentIndex].title}</h1><br />
                            <p>{contentData[selectedContentIndex].description}</p><br /><br />
                            <p>Visit the following resources to learn more:</p><br />
                            <ul>
                                {contentData[selectedContentIndex].resources.map((resource, index) => (
                                    <li key={index}><a href={resource.link} target="_blank" rel="noopener noreferrer">{resource.title}</a></li>
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

export default SecondYearRoadmap;

