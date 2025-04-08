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
            title: 'Introduction to C++',
            description: 'Learn the basics of C++ programming language including syntax, data types, variables, operators, and control flow.',
            resources: [
                { text: 'C++ Tutorial - Learn C++', url: 'https://www.learn-cpp.org/' },
                { text: 'cplusplus.com - C++ Language Tutorial', url: 'http://www.cplusplus.com/doc/tutorial/' },
                { text: 'GeeksforGeeks - C++ Programming Language', url: 'https://www.geeksforgeeks.org/c-plus-plus/' }
            ]
        },
        {
            title: 'Object-Oriented Programming (OOP) in C++',
            description: 'Understand the principles of object-oriented programming in C++, including classes, objects, inheritance, polymorphism, and encapsulation.',
            resources: [
                { text: 'GeeksforGeeks - Object Oriented Programming in C++', url: 'https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-cpp/' },
                { text: 'C++ Object-Oriented Programming - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_object_oriented.htm' },
                { text: 'OOP in C++ - Programiz', url: 'https://www.programiz.com/cpp-programming/object-oriented-programming' }
            ]
        },
        {
            title: 'STL (Standard Template Library)',
            description: 'Explore the STL in C++, including containers (vectors, lists, maps, etc.), algorithms, iterators, and function objects.',
            resources: [
                { text: 'STL Tutorial - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/the-c-standard-template-library-stl/' },
                { text: 'STL Containers - C++ Reference', url: 'https://en.cppreference.com/w/cpp/container' },
                { text: 'STL Algorithms - C++ Reference', url: 'https://en.cppreference.com/w/cpp/algorithm' }
            ]
        },
        {
            title: 'Memory Management in C++',
            description: 'Learn about memory management in C++, including stack vs heap, dynamic memory allocation (new/delete), smart pointers (unique_ptr, shared_ptr), and memory leaks.',
            resources: [
                { text: 'Memory Management in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/memory-management-in-cpp/' },
                { text: 'C++ Memory Management - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_memory_management.htm' },
                { text: 'Smart Pointers - ModernesCpp.com', url: 'https://www.modernescpp.com/index.php/c-core-guidelines-smart-pointers' }
            ]
        },
        {
            title: 'Exception Handling',
            description: 'Understand exception handling in C++, including try-catch blocks, throwing and catching exceptions, standard exception classes, and best practices.',
            resources: [
                { text: 'Exception Handling in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/exception-handling-c/' },
                { text: 'C++ Exception Handling - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_exceptions_handling.htm' },
                { text: 'C++ Exceptions - Programiz', url: 'https://www.programiz.com/cpp-programming/exceptions' }
            ]
        },
        {
            title: 'File Handling',
            description: 'Learn how to work with files in C++, including file streams (ifstream, ofstream), reading and writing files, error handling, and file manipulation.',
            resources: [
                { text: 'File Handling in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/file-handling-c-classes/' },
                { text: 'C++ File Handling - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_files_streams.htm' },
                { text: 'File Input/Output in C++ - Programiz', url: 'https://www.programiz.com/cpp-programming/files-streams' }
            ]
        },
        {
            title: 'Templates and Generic Programming',
            description: 'Understand templates in C++, including function templates, class templates, template specialization, and generic programming.',
            resources: [
                { text: 'Templates in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/templates-cpp/' },
                { text: 'C++ Templates - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_templates.htm' },
                { text: 'Template Metaprogramming - C++ Reference', url: 'https://en.cppreference.com/w/cpp/language/template_metaprogramming' }
            ]
        },
        {
            title: 'Concurrency and Multithreading',
            description: 'Learn about concurrency and multithreading in C++, including thread creation, synchronization mechanisms (mutexes, condition variables), atomic operations, and thread pools.',
            resources: [
                { text: 'Concurrency in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/concurrency-in-cpp/' },
                { text: 'C++ Multithreading - Tutorialspoint', url: 'https://www.tutorialspoint.com/cplusplus/cpp_multithreading.htm' },
                { text: 'Concurrency - C++ Reference', url: 'https://en.cppreference.com/w/cpp/thread' }
            ]
        },
        {
            title: 'Debugging and Testing',
            description: 'Explore debugging techniques in C++, including using debuggers (GDB), logging, assertions, unit testing frameworks (Google Test), and code coverage tools.',
            resources: [
                { text: 'Debugging in C++ - GeeksforGeeks', url: 'https://www.geeksforgeeks.org/debugging-in-c/' },
                { text: 'Unit Testing with Google Test - Google Developers', url: 'https://google.github.io/googletest/primer.html' },
                { text: 'Code Coverage with GCC - GCC Wiki', url: 'https://gcc.gnu.org/onlinedocs/gcc/Gcov.html' }
            ]
        },
        {
            title: 'Best Practices and Advanced Topics',
            description: 'Learn advanced C++ topics and best practices, including move semantics, lambda expressions, design patterns (singleton, factory, observer), and modern C++ features.',
            resources: [
                { text: 'Modern C++ Features - Cppreference.com', url: 'https://en.cppreference.com/w/cpp/feature_test' },
                { text: 'C++ Core Guidelines - GitHub', url: 'https://github.com/isocpp/CppCoreGuidelines/blob/master/CppCoreGuidelines.md' },
                { text: 'C++ Best Practices - GitLab', url: 'https://about.gitlab.com/handbook/engineering/languages/cpp/#best-practices' }
            ]
        }         // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    C++
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>
                        C++ is a versatile and powerful programming language derived from C. It supports both procedural and object-oriented programming paradigms, offering features like classes, inheritance, polymorphism, and templates. C++ is known for its efficiency, making it popular in systems programming, game development, and high-performance computing. It provides low-level control over memory management and hardware resources while offering high-level abstractions for rapid development.
                        </p>
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
