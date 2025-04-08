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
            title: 'HTML & CSS Fundamentals',
            description: 'Understanding basic HTML tags and CSS properties is crucial for web development. HTML provides the structure of web pages, while CSS controls their appearance and layout. Mastering fundamental concepts like flexbox and grid enables developers to create responsive and visually appealing designs. Explore further with resources like MDN Web Docs for HTML and CSS, as well as interactive tutorials like Flexbox Froggy and Grid Garden.',
            resources: [
                { text: 'MDN Web Docs - HTML', url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
                { text: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { text: 'Flexbox Froggy - A game for learning CSS flexbox', url: 'https://flexboxfroggy.com/' },
                { text: 'Grid Garden - A game for learning CSS grid', url: 'https://cssgridgarden.com/' }
            ]
        },
        {
            title: 'JavaScript Basics',
            description: 'JavaScript is the backbone of interactive web development. Learning variables, data types, and control flow constructs lays the foundation for building dynamic web applications. Understanding DOM manipulation is essential for creating interactive user interfaces. Dive deeper into JavaScript with resources like MDN Web Docs, JavaScript.info, and Eloquent JavaScript, which offer comprehensive tutorials and guides for beginners and advanced learners alike.',
            resources: [
                { text: 'MDN Web Docs - JavaScript', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
                { text: 'JavaScript.info - Modern JavaScript Tutorial', url: 'https://javascript.info/' },
                { text: 'Eloquent JavaScript - Free book on JavaScript', url: 'https://eloquentjavascript.net/' }
            ]
        },
        {
            title: 'Introduction to React',
            description: 'React revolutionized frontend development by introducing a component-based architecture. Learning JSX syntax and the concepts of components, props, state, and lifecycle methods is fundamental to mastering React. Its virtual DOM and one-way data flow make building complex UIs more manageable. Explore further with resources like the React Official Documentation, Codecademy\'s Learn React course, and React For Beginners, which provide comprehensive tutorials and projects to reinforce your understanding.',
            resources: [
                { text: 'React Official Documentation', url: 'https://reactjs.org/docs/getting-started.html' },
                { text: 'Codecademy - Learn React', url: 'https://www.codecademy.com/learn/react-101' },
                { text: 'React For Beginners - Free React Course', url: 'https://reactforbeginners.com/' }
            ]
        },
        {
            title: 'Handling Events in React',
            description: 'Event handling is an integral part of React development. Understanding how to manage events efficiently ensures responsive and interactive user experiences. Proper event handling improves code maintainability and readability. Explore further with resources like the React Official Documentation on Handling Events, FreeCodeCamp tutorials, and React Event Handling tutorials from Tutorialspoint.',
            resources: [
                { text: 'React Official Documentation - Handling Events', url: 'https://reactjs.org/docs/handling-events.html' },
                { text: 'Handling Events in React - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/react-events/' },
                { text: 'React Event Handling - Tutorialspoint', url: 'https://www.tutorialspoint.com/reactjs/reactjs_events.htm' }
            ]
        },
        {
            title: 'Lists and Keys in React',
            description: 'Rendering lists of components efficiently is essential for building dynamic UIs in React. Keys play a vital role in identifying elements within lists and optimizing rendering performance. Mastering list rendering and key usage enhances application performance and user experience. Explore further with resources like the React Official Documentation on Lists and Keys, DigitalOcean tutorials, and React Lists and Keys tutorials from Tutorialspoint.',
            resources: [
                { text: 'React Official Documentation - Lists and Keys', url: 'https://reactjs.org/docs/lists-and-keys.html' },
                { text: 'Rendering Lists in React - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/react-rendering-elements#rendering-lists' },
                { text: 'React Lists and Keys - Tutorialspoint', url: 'https://www.tutorialspoint.com/reactjs/reactjs_lists_and_keys.htm' }
            ]
        },
        {
            title: 'React Router',
            description: 'Single-page applications often require routing to navigate between different views. React Router provides a declarative way to handle client-side routing in React applications. With features like nested routes and route parameters, React Router enables developers to create dynamic and intuitive navigation experiences. Explore further with resources like the React Router Official Documentation, FreeCodeCamp tutorials, and React Router v4 tutorials from CSS-Tricks.',
            resources: [
                { text: 'React Router Official Documentation', url: 'https://reactrouter.com/web/guides/quick-start' },
                { text: 'React Router Tutorial - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/react-router-complete-guide/' },
                { text: 'React Router v4 Tutorial - CSS-Tricks', url: 'https://css-tricks.com/react-router-4/' }
            ]
        },
        {
            title: 'Forms in React',
            description: 'Forms are a fundamental part of web development, and React provides powerful tools for handling form input. Understanding controlled and uncontrolled components, along with form validation techniques, is essential for building robust and user-friendly forms in React. Explore further with resources like the React Official Documentation on Forms, W3Schools tutorials, and React Forms tutorials from Tutorialspoint.',
            resources: [
                { text: 'React Official Documentation - Forms', url: 'https://reactjs.org/docs/forms.html' },
                { text: 'React Forms - W3Schools', url: 'https://www.w3schools.com/react/react_forms.asp' },
                { text: 'React Forms Tutorial - Tutorialspoint', url: 'https://www.tutorialspoint.com/reactjs/reactjs_forms.htm' }
            ]
        },
        {
            title: 'Component Composition in React',
            description: 'Reusable component patterns. Container vs. Presentational components.',
            resources: [
                { text: 'React Component Composition - React Official Documentation', url: 'https://reactjs.org/docs/composition.html' },
                { text: 'Container Components vs. Presentational Components - Medium', url: 'https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0' },
                { text: 'Component Composition in React - Medium', url: 'https://medium.com/@kylpo/component-composition-with-react-a7591af6b0e8' }
            ]
        },
        {
            title: 'State Management with Context API in React',
            description: 'Managing state at a higher level. Context vs. Redux comparison.',
            resources: [
                { text: 'React Context API - React Official Documentation', url: 'https://reactjs.org/docs/context.html' },
                { text: 'Using the Context API in React - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/react-using-context-api' },
                { text: 'React Context API vs Redux - CSS-Tricks', url: 'https://css-tricks.com/redux-vs-reacts-context-api/' }
            ]
        },
        {
            title: 'React Hooks',
            description: 'Understanding useState, useEffect, useContext, etc. Refactoring class components to functional components with hooks.',
            resources: [
                { text: 'React Hooks - React Official Documentation', url: 'https://reactjs.org/docs/hooks-intro.html' },
                { text: 'Introduction to React Hooks - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/introduction-to-react-hooks' },
                { text: 'React Hooks Tutorial - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/react-hooks-tutorial-learn-by-building-b90ec4db2b8e/' }
            ]
        },
        {
            title: 'Advanced State Management with Redux in React',
            description: 'Redux fundamentals. Asynchronous actions with Redux Thunk or Redux Saga.',
            resources: [
                { text: 'Redux Official Documentation', url: 'https://redux.js.org/' },
                { text: 'Redux Tutorial - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/a-beginners-guide-to-redux-1bed184e6a4b/' },
                { text: 'Asynchronous Actions in Redux - Redux Official Docs', url: 'https://redux.js.org/advanced/async-actions' }
            ]
        },
        {
            title: 'Server-side Rendering (SSR) with React',
            description: 'Implementing SSR with React. Benefits and challenges of SSR.',
            resources: [
                { text: 'Server Rendering - React Official Documentation', url: 'https://reactjs.org/docs/react-dom-server.html' },
                { text: 'Introduction to Server-Side Rendering - DigitalOcean', url: 'https://www.digitalocean.com/community/tutorials/react-server-side-rendering' },
                { text: 'React SSR with Next.js - Next.js Official Documentation', url: 'https://nextjs.org/docs/basic-features/pages' }
            ]
        },
        {
            title: 'Performance Optimization in React',
            description: 'Memoization techniques. Code-splitting and lazy loading. Performance auditing tools.',
            resources: [
                { text: 'Optimizing Performance - React Official Documentation', url: 'https://reactjs.org/docs/optimizing-performance.html' },
                { text: 'Performance Optimization Techniques - Medium', url: 'https://medium.com/@jsmanifest/react-performance-optimization-101-9e3d29afbf72' },
                { text: 'Performance Auditing Tools - Google Developers', url: 'https://developers.google.com/web/tools/lighthouse/' }
            ]
        },
        {
            title: 'Testing React Applications',
            description: 'Writing unit tests with Jest and React Testing Library. Testing Redux-connected components.',
            resources: [
                { text: 'Testing React Apps - React Official Documentation', url: 'https://reactjs.org/docs/testing.html' },
                { text: 'Testing React Apps - Jest Official Documentation', url: 'https://jestjs.io/docs/en/tutorial-react' },
                { text: 'Testing React Components - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/testing-react-hooks/' }
            ]
        },
        {
            title: 'Server-side Integration with React',
            description: 'Integrating React with backend frameworks like Express or Django. Authentication and authorization.',
            resources: [
                { text: 'Integrating React with Node.js - Medium', url: 'https://medium.com/@bryantheastronaut/react-getting-started-the-mern-stack-tutorial-feat-es6-de1a2886be50' },
                { text: 'React and Django Integration Guide - Simple is Better Than Complex', url: 'https://simpleisbetterthancomplex.com/tutorial/2018/03/12/how-to-extend-django-user-model.html' },
                { text: 'React and Express Integration - Scotch.io', url: 'https://scotch.io/tutorials/react-universal-with-next-js-server-side-react' }
            ]
        },
        {
            title: 'Advanced React Patterns',
            description: 'Higher-order components. Render props. Compound components.',
            resources: [
                { text: 'Advanced React Patterns - React Official Documentation', url: 'https://reactjs.org/docs/jsx-in-depth.html' },
                { text: 'React Patterns - RWieruch', url: 'https://www.robinwieruch.de/react-components-patterns/' },
                { text: 'React Patterns - Kent C. Dodds', url: 'https://kentcdodds.com/blog' }
            ]
        },
        {
            title: 'TypeScript with React',
            description: 'Adding TypeScript to React projects. Type safety in React components.',
            resources: [
                { text: 'TypeScript Official Documentation', url: 'https://www.typescriptlang.org/docs/handbook/react.html' },
                { text: 'TypeScript with React - FreeCodeCamp', url: 'https://www.freecodecamp.org/news/learn-typescript-with-react/' },
                { text: 'TypeScript in React - Medium', url: 'https://medium.com/@rossbulat/typescript-with-react-e688edf752c2' }
            ]
        },
        {
            title: 'GraphQL with React',
            description: 'Using Apollo Client for GraphQL integration. Querying and mutating data with GraphQL.',
            resources: [
                { text: 'GraphQL Official Documentation', url: 'https://graphql.org/learn/' },
                { text: 'Apollo Client - Official Documentation', url: 'https://www.apollographql.com/docs/react/' },
                { text: 'GraphQL with React - HowToGraphQL', url: 'https://www.howtographql.com/react-apollo/0-introduction/' }
            ]
        },
        {
            title: 'Progressive Web Apps (PWAs) with React',
            description: 'Building PWAs with React. Offline support and caching strategies.',
            resources: [
                { text: 'PWA Guide - Google Developers', url: 'https://developers.google.com/web/progressive-web-apps' },
                { text: 'Building PWAs with React - Medium', url: 'https://medium.com/@addyosmani/progressive-web-apps-with-react-js-part-i-introduction-50679aef2b12' },
                { text: 'PWAs with React - CRA Docs', url: 'https://create-react-app.dev/docs/making-a-progressive-web-app/' }
            ]
        },
        {
            title: 'Micro Frontends with React',
            description: 'Implementing Micro Frontends architecture with React.',
            resources: [
                { text: 'Micro Frontends - Martin Fowler', url: 'https://martinfowler.com/articles/micro-frontends.html' },
                { text: 'Micro Frontends with React - Micro Frontends', url: 'https://micro-frontends.org/' },
                { text: 'React Micro Frontends - Medium', url: 'https://medium.com/swlh/micro-frontends-and-react-3d09c3a11f0b' }
            ]
        },
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    React JS
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>React.js, often referred to simply as React, is a popular JavaScript library for building user interfaces. Developed by Facebook, React enables developers to create dynamic and interactive web applications with ease. At its core, React follows a component-based architecture, where UIs are composed of small, reusable components. This approach promotes modularization, making it easier to manage and maintain complex UIs. React uses a virtual DOM (Document Object Model) to efficiently update the UI, resulting in faster rendering and improved performance.</p>
                        <p>One of the key features of React is its declarative syntax, which allows developers to describe how the UI should look based on the application's state, rather than imperatively manipulating the DOM. This makes it easier to reason about and maintain code, leading to more maintainable and scalable applications.</p>
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
