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
            title: "HTML Basics",
            description: "Start your journey into web development by mastering the fundamentals of HTML (Hypertext Markup Language). Learn about HTML tags, elements, attributes, and semantic markup to create well-structured web pages.",
            resources: [
                { text: "MDN Web Docs - HTML", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
                { text: "HTML Tutorial - W3Schools", url: "https://www.w3schools.com/html/" },
                { text: "HTML Crash Course for Absolute Beginners - Traversy Media", url: "https://www.youtube.com/watch?v=UB1O30fR-EE" }
            ]
        },
        {
            title: "CSS Fundamentals",
            description: "Dive into Cascading Style Sheets (CSS) to enhance the appearance of your HTML documents. Learn about CSS selectors, properties, values, and the box model to style web pages and create visually appealing layouts.",
            resources: [
                { text: "MDN Web Docs - CSS", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
                { text: "CSS Tutorial - W3Schools", url: "https://www.w3schools.com/css/" },
                { text: "CSS Crash Course for Absolute Beginners - Traversy Media", url: "https://www.youtube.com/watch?v=yfoY53QXEnI" }
            ]
        },
        {
            title: "Responsive Web Design",
            description: "Learn how to create websites that adapt to various screen sizes and devices using responsive web design techniques. Explore media queries, flexible grids, and fluid layouts to build responsive and mobile-friendly web pages.",
            resources: [
                { text: "Responsive Web Design Basics - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" },
                { text: "Responsive Web Design Tutorial - FreeCodeCamp", url: "https://www.freecodecamp.org/news/how-to-build-a-responsive-website-from-scratch/" },
                { text: "Flexbox Froggy - A game for learning CSS flexbox", url: "https://flexboxfroggy.com/" },
                { text: "Grid Garden - A game for learning CSS grid", url: "https://cssgridgarden.com/" }
            ]
        },
        {
            title: "CSS Preprocessors",
            description: "Explore CSS preprocessors like Sass (Syntactically Awesome Stylesheets) and Less to enhance your CSS workflow. Learn about variables, mixins, nesting, and other advanced features to streamline your styling process.",
            resources: [
                { text: "Sass Documentation", url: "https://sass-lang.com/documentation" },
                { text: "Less Documentation", url: "http://lesscss.org/" },
                { text: "Getting Started with Sass - Traversy Media", url: "https://www.youtube.com/watch?v=nu5mdN2JIwM" }
            ]
        },
        {
            title: "CSS Frameworks",
            description: "Discover popular CSS frameworks like Bootstrap and Tailwind CSS to expedite the process of building responsive and visually appealing websites. Learn how to leverage pre-designed components and utility classes to create stunning web interfaces.",
            resources: [
                { text: "Bootstrap Documentation", url: "https://getbootstrap.com/docs/5.1/getting-started/introduction/" },
                { text: "Tailwind CSS Documentation", url: "https://tailwindcss.com/docs" },
                { text: "Bootstrap Crash Course - Traversy Media", url: "https://www.youtube.com/watch?v=4sosXZsdy-s" }
            ]
        },
        {
            title: "CSS Architecture",
            description: "Explore methodologies and best practices for organizing and structuring your CSS codebase. Learn about BEM (Block Element Modifier), SMACSS (Scalable and Modular Architecture for CSS), and other approaches to maintainable and scalable CSS.",
            resources: [
                { text: "BEM Methodology", url: "http://getbem.com/introduction/" },
                { text: "SMACSS - Scalable and Modular Architecture for CSS", url: "https://smacss.com/" },
                { text: "CSS Architecture for Modern JavaScript Applications - Medium", url: "https://medium.com/@bdc/css-architecture-for-modern-javascript-applications-4b763aec08b5" }
            ]
        },
        {
            title: "CSS Animation and Effects",
            description: "Add interactivity and visual appeal to your websites with CSS animations and effects. Learn how to create transitions, keyframe animations, and advanced effects to enhance user experience.",
            resources: [
                { text: "CSS Animations - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations" },
                { text: "Animating CSS properties - CSS-Tricks", url: "https://css-tricks.com/almanac/properties/a/animation/" },
                { text: "Advanced CSS Animation Techniques - FreeCodeCamp", url: "https://www.freecodecamp.org/news/css-animation-tutorial-learn-css-animation-on-the-web/" }
            ]
        },
        {
            title: "CSS Methodologies",
            description: "Discover CSS methodologies and approaches for writing scalable, maintainable, and modular CSS code. Learn about methodologies like OOCSS (Object-Oriented CSS), Atomic CSS, and more.",
            resources: [
                { text: "OOCSS - Object-Oriented CSS", url: "https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/" },
                { text: "Atomic CSS", url: "https://acss.io/" },
                { text: "Understanding CSS Methodologies - SitePoint", url: "https://www.sitepoint.com/css-methodologies/" }
            ]
        },
        {
            title: "CSS Grid Layout",
            description: "Master CSS Grid Layout, a powerful two-dimensional layout system for creating grid-based designs in CSS. Learn how to create complex grid layouts with ease and build responsive web designs.",
            resources: [
                { text: "CSS Grid Layout - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout" },
                { text: "A Complete Guide to Grid - CSS-Tricks", url: "https://css-tricks.com/snippets/css/complete-guide-grid/" },
                { text: "Learn CSS Grid - Scrimba", url: "https://scrimba.com/learn/cssgrid" }
            ]
        },
        {
            title: "CSS Flexbox",
            description: "Explore CSS Flexbox, a layout model that allows you to design flexible and efficient layouts. Learn how to create responsive layouts, align content, and distribute space along a single axis or two axes.",
            resources: [
                { text: "CSS Flexible Box Layout - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout" },
                { text: "A Complete Guide to Flexbox - CSS-Tricks", url: "https://css-tricks.com/snippets/css/a-guide-to-flexbox/" },
                { text: "Flexbox Froggy - A game for learning CSS flexbox", url: "https://flexboxfroggy.com/" }
            ]
        },
        {
            title: "CSS Variables (Custom Properties)",
            description: "Discover CSS Variables, also known as Custom Properties, to define reusable values in your CSS code. Learn how to use variables for consistent styling, theming, and easier maintenance of your stylesheets.",
            resources: [
                { text: "CSS Variables - MDN Web Docs", url: "https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties" },
                { text: "Understanding CSS Variables - FreeCodeCamp", url: "https://www.freecodecamp.org/news/css-variables-explained-with-5-examples-84adaffaa5bd/" },
                { text: "Using CSS Variables - CSS-Tricks", url: "https://css-tricks.com/difference-between-types-of-css-variables/" }
            ]
        }
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    HTML CSS
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>HTML (Hypertext Markup Language) and CSS (Cascading Style Sheets) are the building blocks of web development. HTML provides the structure and content of web pages, defining elements like headings, paragraphs, links, and images. CSS, on the other hand, controls the presentation and styling of HTML elements, allowing developers to customize the layout, colors, fonts, and other visual aspects of a webpage. Together, HTML and CSS form the foundation of the front-end development process, enabling developers to create visually appealing and user-friendly websites and web applications.</p>
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
