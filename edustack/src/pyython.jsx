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
            title: "Python Basics",
            description: "Master the fundamentals of Python including variables, data types, operators, and control flow statements. Build a strong foundation for your Python journey.",
            resources: [
                {text: "Python.org Official Tutorial", url: "https://docs.python.org/3/tutorial/index.html"},
                {text: "Codecademy Python Course", url: "https://www.codecademy.com/learn/learn-python-3"}
            ]
        },
        {
            title: "Object-Oriented Programming (OOP)",
            description: "Dive deep into the principles of Object-Oriented Programming (OOP) in Python. Learn about classes, objects, inheritance, and polymorphism, and discover how to apply OOP concepts in your projects.",
            resources: [
                {text: "Real Python OOP Tutorial", url: "https://realpython.com/python3-object-oriented-programming/"},
                {text: "GeeksforGeeks Python OOP Concepts", url: "https://www.geeksforgeeks.org/object-oriented-programming-in-python-set-1-class-and-its-members/"}
            ]
        },
        {
            title: "Web Development with Python",
            description: "Embark on a journey to build dynamic web applications using Python. Explore popular frameworks like Flask and Django, and learn how to create powerful web applications from scratch.",
            resources: [
                {text: "Flask Official Documentation", url: "https://flask.palletsprojects.com/en/2.0.x/"},
                {text: "Django Official Documentation", url: "https://docs.djangoproject.com/en/3.2/"}
            ]
        },
        {
            title: "Data Analysis and Visualization",
            description: "Unleash the power of Python for data analysis and visualization. Learn to manipulate and analyze data with libraries like Pandas and NumPy, and create insightful visualizations using Matplotlib.",
            resources: [
                {text: "Pandas User Guide", url: "https://pandas.pydata.org/docs/user_guide/index.html"},
                {text: "NumPy Documentation", url: "https://numpy.org/doc/stable/"},
                {text: "Matplotlib Tutorials", url: "https://matplotlib.org/stable/tutorials/index.html"}
            ]
        },
        {
            title: "Machine Learning and Artificial Intelligence",
            description: "Delve into the fascinating world of machine learning and artificial intelligence with Python. Explore libraries such as scikit-learn, TensorFlow, and PyTorch to build and train intelligent systems.",
            resources: [
                {text: "scikit-learn Documentation", url: "https://scikit-learn.org/stable/user_guide.html"},
                {text: "TensorFlow Tutorials", url: "https://www.tensorflow.org/tutorials"},
                {text: "PyTorch Documentation", url: "https://pytorch.org/docs/stable/index.html"}
            ]
        },
        {
            title: "Database Management",
            description: "Learn how to interact with databases using Python. Explore libraries like SQLAlchemy and psycopg2 to connect to various database systems and perform data operations.",
            resources: [
                {text: "SQLAlchemy Documentation", url: "https://docs.sqlalchemy.org/en/21/"},
                {text: "psycopg2 Documentation", url: "https://www.psycopg.org/docs/usage.html"}
            ]
        },
        {
            title: "Testing in Python",
            description: "Master the art of testing in Python development. Learn about the importance of testing and dive into frameworks like pytest to write comprehensive test suites for your projects.",
            resources: [
                {text: "pytest Documentation", url: "https://docs.pytest.org/en/6.2.x/"},
                {text: "Real Python pytest Tutorial", url: "https://realpython.com/python-testing/"}
            ]
        },
        {
            title: "Deployment and DevOps",
            description: "Explore deployment options for Python applications and learn about DevOps practices. Deploy your applications using platforms like Heroku and gain insights into continuous integration and deployment.",
            resources: [
                {text: "Heroku Dev Center", url: "https://devcenter.heroku.com/categories/python-support"},
                {text: "Real Python DevOps Tutorial", url: "https://realpython.com/python-continuous-integration/"}
            ]
        },
        {
            title: "Microservices with Python",
            description: "Discover the world of microservices architecture with Python. Learn to build scalable and resilient microservices using frameworks like Flask and explore deployment strategies for microservices-based applications.",
            resources: [
                {text: "Microservices with Python - Manning", url: "https://www.manning.com/books/microservices-in-python"},
                {text: "Building Microservices with Python - Real Python", url: "https://realpython.com/courses/building-microservices-python/"}
            ]
        },
        {
            title: "Cybersecurity and Ethical Hacking with Python",
            description: "Explore cybersecurity concepts and learn how to use Python for ethical hacking. Dive into topics like penetration testing, network scanning, and vulnerability assessment.",
            resources: [
                {text: "Black Hat Python: Python Programming for Hackers and Pentesters", url: "https://www.amazon.com/Black-Hat-Python-Programming-Pentesters/dp/1593275900"},
                {text: "Ethical Hacking with Python - Udemy", url: "https://www.udemy.com/course/learn-python-and-ethical-hacking-from-scratch/"}
            ]
        },
        {
            title: "Game Development with Python",
            description: "Embark on a thrilling journey into game development with Python. Explore libraries like Pygame and learn to create captivating games from simple 2D adventures to complex simulations.",
            resources: [
                {text: "Pygame Documentation", url: "https://www.pygame.org/docs/"},
                {text: "Real Python Game Development Tutorial", url: "https://realpython.com/python-pygame-primer/"}
            ]
        },
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Python
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>
Python is a user-friendly, high-level programming language known for its simplicity and readability. It supports multiple programming paradigms and has a vast ecosystem of libraries and frameworks, making it suitable for various applications such as web development, data analysis, machine learning, and automation.</p>
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
