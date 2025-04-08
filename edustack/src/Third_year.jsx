import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function ThirdYearRoadmap() {
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
            title: 'Advanced Data Structures and Algorithms',
            description: 'Dive deeper into advanced data structures such as segment trees, Fenwick trees, persistent data structures, and advanced graph algorithms like minimum spanning trees, maximum flow, and matching algorithms. Explore algorithmic techniques for solving complex problems efficiently, including approximation algorithms, randomized algorithms, and online algorithms. Study advanced topics in algorithm design and analysis, such as amortized analysis, competitive analysis, and complexity theory. Work on challenging problem sets and participate in programming contests to hone your algorithmic skills.',
            resources: [
                { title: 'Advanced Data Structures and Algorithms - Coursera', link: 'https://www.coursera.org/specializations/data-structures-algorithms' },
                { title: 'Introduction to Algorithms - MIT OpenCourseWare', link: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/' }
            ]
        },
        {
            title: 'Database Systems',
            description: 'Deepen your understanding of database systems by studying topics such as database architecture, query optimization, transaction management, and database security. Learn advanced SQL techniques for data manipulation, querying, and optimization. Explore distributed databases, cloud databases, and big data technologies for handling large-scale data and scalable applications. Work on real-world database projects to gain practical experience in designing and implementing database solutions.',
            resources: [
                { title: 'Database Systems: The Complete Book', link: 'https://www.db-book.com/db7/' },
                { title: 'SQLZoo', link: 'https://sqlzoo.net/' }
            ]
        },
        {
            title: 'Operating Systems',
            description: 'Study the design principles and functionalities of modern operating systems, including process management, memory management, file systems, and I/O systems. Learn about concurrency and synchronization techniques, including locks, semaphores, and monitors. Explore operating system virtualization, including virtual memory, virtual machines, and containerization. Work on hands-on projects to implement basic operating system functionalities and understand the internals of operating system kernels.',
            resources: [
                { title: 'Operating Systems: Three Easy Pieces', link: 'https://pages.cs.wisc.edu/~remzi/OSTEP/' },
                { title: 'Linux Kernel Development', link: 'https://www.amazon.com/Linux-Kernel-Development-Robert-Love/dp/0672329468' }
            ]
        },
        {
            title: 'Computer Networks',
            description: 'Learn about the architecture, protocols, and standards of computer networks, including the OSI model, TCP/IP stack, and network security. Study advanced topics such as routing algorithms, congestion control, quality of service, and network management. Explore emerging technologies like software-defined networking (SDN), network function virtualization (NFV), and Internet of Things (IoT). Work on network simulation and emulation projects to gain practical experience in network design, configuration, and troubleshooting.',
            resources: [
                { title: 'Computer Networking: A Top-Down Approach', link: 'https://www.pearson.com/us/higher-education/program/Kurose-Computer-Networking-A-Top-Down-Approach-8th-Edition/PGM335260.html' },
                { title: 'Wireshark - Network Protocol Analyzer', link: 'https://www.wireshark.org/' }
            ]
        },
        {
            title: 'Software Engineering',
            description: 'Explore software development methodologies such as agile, scrum, and DevOps, and learn about software project management, requirements engineering, and software quality assurance. Study software design principles, design patterns, and architectural styles for building scalable and maintainable software systems. Learn about software testing techniques, including unit testing, integration testing, and system testing. Work on team-based software projects to experience the full software development lifecycle, from requirements analysis to deployment and maintenance.',
            resources: [
                { title: 'Clean Code: A Handbook of Agile Software Craftsmanship', link: 'https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882' },
                { title: 'Software Engineering - Coursera', link:'https://www.coursera.org/specializations/software-engineering' }
            ]
        },
        {
            title: 'Elective Courses and Specializations',
            description: 'Take elective courses or pursue specializations based on your interests and career goals, such as machine learning, artificial intelligence, cybersecurity, or web development. Dive deeper into specific areas of computer science and engineering through advanced courses, seminars, workshops, and research projects. Explore interdisciplinary fields like bioinformatics, computational finance, or computer-aided design (CAD) to broaden your skill set and knowledge base.',
            resources: [
                { title: 'edX', link: 'https://www.edx.org/' },
                { title: 'Coursera', link: 'https://www.coursera.org/' }
            ]
        },
        {
            title: 'Project Work and Internship',
            description: 'Undertake a major project that integrates multiple aspects of computer science and engineering, such as software development, data analysis, or system design. Seek internships at leading tech companies, research institutions, or startups to gain practical experience and apply your skills in real-world settings. Network with professionals in the industry, attend tech conferences and workshops, and participate in hackathons and coding competitions to expand your professional network and stay updated with the latest trends and technologies.',
            resources: [
                { title: 'GitHub', link: 'https://github.com/' },
                { title: 'LinkedIn', link: 'https://www.linkedin.com/' }
            ]
        },
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Third Year
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

export default ThirdYearRoadmap;

