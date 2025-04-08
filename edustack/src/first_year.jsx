import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function FirstYearRoadmap() {
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
            title: 'Setup your laptop with Linux',
            description: 'Installing Linux on your laptop exposes you to a Unix-like environment, commonly used in software development.',
        },
        {
            title: 'Procedural Programming Language (like C)',
            description: 'Start with a procedural programming language like C. Learn the syntax, basic concepts, and principles of programming.',
        },
        {
            title: 'Data Structures and Algorithms (DSA)',
            description: 'Dive into data structures and algorithms. Understand fundamental data structures like arrays, linked lists, stacks, queues, trees, and graphs.',
        },
        {
            title: 'Basics of Object-Oriented Programming (OOP)',
            description: 'Familiarize yourself with the basics of Object-Oriented Programming. Learn about classes, objects, inheritance, polymorphism, encapsulation, and abstraction.',
        },
        {
            title: 'Object-Oriented Language (like C++)',
            description: 'Once you grasp the fundamentals of procedural programming and OOP concepts, move on to an object-oriented language like C++.',
        },
        {
            title: 'Project',
            description: 'Work on a small project that integrates the concepts you\'ve learned so far. Focus on applying your knowledge of procedural programming, data structures, algorithms, and OOP principles in a real-world scenario.',
        },
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        First Year
                    </div>
                </div>
            </div>

            <div id="roadmapContainer" className={selectedContentIndex !== null ? 'roadmap-show' : ''} onClick={() => setSelectedContentIndex(null)}>
                <div id="roadmapContent">
                    {selectedContentIndex !== null && (
                        <div>
                            <h1>{contentData[selectedContentIndex].title}</h1><br />
                            <p>{contentData[selectedContentIndex].description}</p><br /><br />
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

export default FirstYearRoadmap;
