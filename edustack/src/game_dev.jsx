import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function Roadmap() {
    // State for managing selected content index and frontend content visibility
    const [selectedContentIndex, setSelectedContentIndex] = useState(null);
    const [showFrontendContent, setShowFrontendContent] = useState(false);

    // Function to show content based on index
    const showContent = (index) => {
        setSelectedContentIndex(index);
        setShowFrontendContent(false); // Close frontend content when clicking on other sections
    };

    // Function to toggle frontend content visibility
    const toggleFrontendContent = () => {
        setShowFrontendContent(!showFrontendContent);
        setSelectedContentIndex(null); // Close other content when clicking on frontend section
    };

    // Data for game development roadmap
    const contentData = [
        {
            title: 'Game Design Principles',
            description: 'Understand the fundamentals of game design, including mechanics, dynamics, and aesthetics. Learn about player experience and engagement strategies.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Game Design Basics - A Primer', url: 'https://www.gamasutra.com/blogs/AdrianCrook/20130422/190373/Game_Design_Basics__A_Primer.php' },
                { text: 'Game Design Fundamentals', url: 'https://learn.unity.com/tutorial/game-design-fundamentals' },
                { text: 'Game Design Theory and Practice', url: 'https://www.coursera.org/learn/game-design-theory' }
            ]
        },
        {
            title: 'Game Development Tools',
            description: 'Explore popular game development tools and engines such as Unity, Unreal Engine, and Godot. Learn about asset creation, scripting, and game optimization.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Unity Learn - Game Development Tutorials', url: 'https://learn.unity.com/' },
                { text: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/en-US/GettingStarted/index.html' },
                { text: 'Godot Engine Tutorials', url: 'https://docs.godotengine.org/en/stable/getting_started/step_by_step/index.html' }
            ]
        },
        {
            title: 'Game Programming',
            description: 'Master game programming concepts using languages like C#, C++, or GDScript. Understand game logic, AI development, physics simulations, and multiplayer networking.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Unity Scripting API Documentation', url: 'https://docs.unity.com/ScriptReference/' },
                { text: 'Unreal Engine C++ Programming Guide', url: 'https://docs.unrealengine.com/en-US/Programming/index.html' },
                { text: 'Godot Engine Scripting Tutorials', url: 'https://docs.godotengine.org/en/stable/getting_started/scripting/gdscript/gdscript_basics.html' }
            ]
        },
        {
            title: 'Game Art and Animation',
            description: 'Learn about game art creation, including 2D and 3D graphics, character design, animations, and visual effects. Explore tools like Photoshop, Blender, and Maya for asset creation.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Blender Beginner Tutorial Series', url: 'https://www.blender.org/support/tutorials/' },
                { text: 'Maya Learning Resources', url: 'https://learn.autodesk.com/' },
                { text: '2D Game Art for Beginners', url: 'https://www.udemy.com/course/2d-game-art-for-beginners/' }
            ]
        },
        {
            title: 'Game Sound and Music',
            description: 'Understand the importance of sound design and music in games. Learn about audio editing, sound effects creation, music composition, and implementing audio in game engines.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Game Audio Implementation Guide', url: 'https://www.gdcvault.com/play/1015668/Interactive-Music-Implementation-in-Uncharted' },
                { text: 'Audio Editing and Sound Design Basics', url: 'https://www.audiorecording.me/' },
                { text: 'Creating Game Music and Sound Effects', url: 'https://www.udemy.com/course/game-audio/' }
            ]
        },
        {
            title: 'Game Testing and Quality Assurance',
            description: 'Learn about game testing methodologies, bug tracking, regression testing, and ensuring overall game quality. Explore tools and techniques for automated testing and user feedback.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Game Testing Fundamentals', url: 'https://www.gamasutra.com/blogs/AdrianCrook/20130619/194978/Game_Testing_Fundamentals.php' },
                { text: 'Introduction to Game QA Testing', url: 'https://www.udemy.com/course/introduction-to-game-qa-testing/' },
                { text: 'Bug Tracking and Management Tools', url: 'https://www.gamasutra.com/blogs/AlessandroCarbonari/20210309/378646/Introduction_to_bug_tracking_and_management_tools_in_game_testing.php' }
            ]
        },
        {
            title: 'Game Monetization Strategies',
            description: 'Explore different monetization models for games, including free-to-play, in-app purchases, subscriptions, and advertising. Learn about player retention and maximizing revenue.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Game Monetization Best Practices', url: 'https://www.gamasutra.com/blogs/DavidGalindo/20200106/357372/Game_Monetization_Best_Practices_2020.php' },
                { text: 'Introduction to In-Game Advertising', url: 'https://www.udemy.com/course/game-monetization/' },
                { text: 'Designing Effective Monetization Strategies', url: 'https://www.gdcvault.com/play/1025448/Designing-Monetization-Strategies-to-Keep' }
            ]
        },
        {
            title: 'Game Publishing and Distribution',
            description: 'Learn about the process of game publishing, including platform requirements, marketing strategies, app store optimization (ASO), and reaching global audiences.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Indie Game Publishing Guide', url: 'https://www.indiegamepublishing.com/' },
                { text: 'App Store Optimization (ASO) Basics', url: 'https://www.apptamin.com/blog/app-store-optimization/' },
                { text: 'Marketing Your Game Effectively', url: 'https://www.gamasutra.com/blogs/KevinBerry/20180626/320912/Marketing_Your_Game_Effectively.php' }
            ]
        },
        {
            title: 'Game Development Frameworks and Engines',
            description: 'Explore popular game development frameworks and engines such as Unity, Unreal Engine, Godot, and Phaser. Learn about scripting languages, asset integration, and cross-platform development.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Unity Learn - Game Development Tutorials', url: 'https://learn.unity.com/' },
                { text: 'Unreal Engine Documentation', url: 'https://docs.unrealengine.com/en-US/InteractiveExperiences/UE4Fundamentals/index.html' },
                { text: 'Godot Engine Tutorials and Resources', url: 'https://docs.godotengine.org/en/stable/tutorials/index.html' }
            ]
        },
        {
            title: 'Game AI and Machine Learning',
            description: 'Dive into artificial intelligence (AI) for games, including pathfinding algorithms, behavior trees, decision-making systems, and machine learning applications. Learn how AI enhances gameplay and NPC interactions.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Game AI Pro: Collected Wisdom of Game AI Professionals', url: 'https://www.gameaipro.com/' },
                { text: 'Machine Learning for Games - Coursera Course', url: 'https://www.coursera.org/specializations/machine-learning-games' },
                { text: 'Unity ML-Agents Toolkit', url: 'https://unity.com/solutions/machine-learning-agents' }
            ]
        },
        // Add more content items as needed
        
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Game Developer
                    </div>
                    {showFrontendContent && (
                        <div className="frontend-content">
                            <p>
Game developers create interactive digital experiences through the integration of art, design, programming, and audio elements, crafting immersive worlds and engaging gameplay. They often work collaboratively in teams to bring diverse ideas to life, utilizing specialized tools and technologies to create entertaining and memorable gaming experiences.</p>
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
