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
            title: 'HTML',
            description: 'HTML stands for HyperText Markup Language. It is used on the frontend and gives the structure to the webpage which you can style using CSS and make interactive using JavaScript.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools HTML Tutorial', url: 'https://www.w3schools.com/html/' },
                { text: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { text: 'HTML for Beginners The easy way', url: 'https://www.codecademy.com/learn/learn-html' },
                // Add more resources as needed
            ]
        },
        {
            title: 'CSS',
            description: 'Understand CSS selectors, properties, and styling techniques. Learn about CSS layouts, positioning, and responsive design.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/' },
                { text: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { text: 'CSS-Tricks', url: 'https://css-tricks.com/' },
                // Add more resources as needed
            ]
        },
        {
            title: 'JavaScript',
            description: 'JavaScript is a programming language used to make web pages interactive. It can update and change both HTML and CSS, handle events, and create animations.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools JavaScript Tutorial', url: 'https://www.w3schools.com/js/' },
                { text: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'JavaScript.info', url: 'https://javascript.info/' },
                // Add more resources as needed
            ]
        },
        {
            title: 'React',
            description: 'React is a JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called "components".',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'React Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
                { text: 'React Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/react-101' },
                { text: 'React Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=sBws8MSXN7A' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Angular',
            description: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Angular Documentation', url: 'https://angular.io/docs' },
                { text: 'Angular Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/learn-angular' },
                { text: 'Angular Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=_TLhUCjY9iA' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Vue.js',
            description: 'Vue.js is a progressive JavaScript framework for building user interfaces. It is designed to be incrementally adoptable and can be used for building single-page applications and more complex web interfaces.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Vue.js Documentation', url: 'https://vuejs.org/v2/guide/' },
                { text: 'Vue.js Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/learn-vue-js' },
                { text: 'Vue.js Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=4deVCNJq3qc' },
                // Add more resources as needed
            ]
        },
        {
            title: 'SASS/SCSS',
            description: 'Sass (Syntactically Awesome Style Sheets) is a preprocessor scripting language that is interpreted or compiled into Cascading Style Sheets (CSS). It adds power and elegance to the basic CSS language, allowing you to use variables, nesting, mixins, and more.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Sass Documentation', url: 'https://sass-lang.com/documentation' },
                { text: 'SCSS Basics - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/learn-sass-basics/' },
                { text: 'Sass Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/learn-sass' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Bootstrap',
            description: 'Bootstrap is a free and open-source CSS framework directed at responsive, mobile-first front-end web development. It contains CSS- and JavaScript-based design templates for typography, forms, buttons, navigation, and other interface components.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Bootstrap Documentation', url: 'https://getbootstrap.com/docs/5.1/getting-started/introduction/' },
                { text: 'Bootstrap Tutorial - W3Schools', url: 'https://www.w3schools.com/bootstrap/' },
                { text: 'Bootstrap 5 Tutorial - Codecademy', url: 'https://www.codecademy.com/learn/learn-bootstrap-5' },
                // Add more resources as needed
            ]
        },
        {
            title: 'Webpack',
            description: 'Webpack is a popular module bundler for JavaScript applications. It takes modules with dependencies and generates static assets representing those modules.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Webpack Documentation', url: 'https://webpack.js.org/concepts/' },
                { text: 'Webpack Guides - SurviveJS', url: 'https://survivejs.com/webpack/what-is-webpack/' },
                { text: 'Webpack Tutorial - YouTube', url: 'https://www.youtube.com/watch?v=MpGLUVbqoYQ' },
                // Add more resources as needed
            ]
        },
        {
            title: 'TypeScript',
            description: 'TypeScript is a superset of JavaScript that adds static typing to the language. It can help catch errors and improve code quality during development.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'TypeScript Documentation', url: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
                { text: 'TypeScript Course - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/typescript-tutorial-for-beginners-with-examples/' },
                { text: 'TypeScript in 5 Minutes - YouTube', url: 'https://www.youtube.com/watch?v=WBPrJSw7yQA' },
                // Add more resources as needed
            ]
        },
        {
            title: 'JQuery',
            description: 'jQuery is a fast, small, and feature-rich JavaScript library. It simplifies tasks like HTML document traversal and manipulation, event handling, animation, and Ajax interactions.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'jQuery Documentation', url: 'https://api.jquery.com/' },
                { text: 'jQuery Basics - W3Schools', url: 'https://www.w3schools.com/jquery/' },
                { text: 'jQuery Crash Course - YouTube', url: 'https://www.youtube.com/watch?v=BWXggB-T1jQ' },
                // Add more resources as needed
            ]
        },
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Frontend
                    </div>
                    {showFrontendContent && (
                        <div className="frontend-content">
                            <p>Frontend refers to the part of a website or application that users interact with directly. It involves designing and implementing the user interface, including layouts, forms, buttons, and other interactive elements.</p>
                            <p>Frontend development typically involves HTML, CSS, and JavaScript, along with frameworks and libraries like React, Angular, or Vue.js. Frontend developers focus on creating a seamless and engaging user experience across different devices and browsers.</p>
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
