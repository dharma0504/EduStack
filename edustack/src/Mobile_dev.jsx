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
            title: 'Mobile App Development Basics',
            description: 'Understand the fundamentals of mobile app development, including mobile platforms, app architecture, and user interface design.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Developers - Mobile Web Development', url: 'https://developers.google.com/web/fundamentals' },
                { text: 'Apple Developer Documentation', url: 'https://developer.apple.com/documentation/' },
                { text: 'Android Developers Guide', url: 'https://developer.android.com/guide' },
                { text: 'Microsoft Learn - Mobile Development', url: 'https://learn.microsoft.com/en-us/mobile-development/' }
            ]
        },
        {
            title: 'Mobile UI/UX Design',
            description: 'Learn about mobile UI/UX design principles, responsive layouts, and usability testing for mobile applications.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'UX Planet - Mobile Design Principles', url: 'https://uxplanet.org/tagged/mobile-design' },
                { text: 'Nielsen Norman Group - Mobile Usability', url: 'https://www.nngroup.com/topic/mobile-usability/' },
                { text: 'Adobe XD Tutorials', url: 'https://www.adobe.com/products/xd/learn/mobile-app-design.html' }
            ]
        },
        {
            title: 'Mobile App Performance Optimization',
            description: 'Learn techniques for optimizing mobile app performance, including reducing load times, memory management, and battery efficiency.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Developers - Performance Best Practices', url: 'https://developer.android.com/topic/performance/best-practices' },
                { text: 'Apple Developer - Optimizing Your App', url: 'https://developer.apple.com/documentation/performance' },
                { text: 'Microsoft Docs - Performance Guidelines', url: 'https://docs.microsoft.com/en-us/dotnet/standard/optimization-guidelines' }
            ]
        },
        {
            title: 'Mobile App Security',
            description: 'Understand mobile app security concepts, including data encryption, secure authentication, and secure coding practices.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'OWASP Mobile Security Testing Guide', url: 'https://owasp.org/www-project-mobile-security-testing-guide/' },
                { text: 'Google Developers - Security Best Practices', url: 'https://developer.android.com/training/articles/security-tips' },
                { text: 'Apple Developer - Security Overview', url: 'https://developer.apple.com/documentation/security' }
            ]
        },
        {
            title: 'Cross-platform Mobile Development',
            description: 'Explore frameworks and tools for developing cross-platform mobile apps, including React Native, Flutter, and Xamarin.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'React Native Documentation', url: 'https://reactnative.dev/docs/getting-started' },
                { text: 'Flutter Documentation', url: 'https://flutter.dev/docs' },
                { text: 'Xamarin Documentation', url: 'https://docs.microsoft.com/en-us/xamarin/' }
            ]
        },
        {
            title: 'Mobile App Testing',
            description: 'Learn about mobile app testing strategies, including unit testing, integration testing, and end-to-end testing for mobile applications.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Developers - Testing Overview', url: 'https://developer.android.com/training/testing/start' },
                { text: 'Apple Developer - Testing and Debugging', url: 'https://developer.apple.com/documentation/xcode/testing_and_debugging' },
                { text: 'Microsoft Docs - Mobile App Testing', url: 'https://docs.microsoft.com/en-us/visualstudio/test/quickstart-mobile-testing' }
            ]
        },
        {
            title: 'Mobile App Deployment',
            description: 'Learn about deploying mobile apps to app stores, managing app updates, and app distribution strategies.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Play Console Help', url: 'https://support.google.com/googleplay/android-developer' },
                { text: 'Apple Developer - App Distribution Guide', url: 'https://developer.apple.com/documentation/appstoreconnectapi' },
                { text: 'Microsoft Store Documentation', url: 'https://docs.microsoft.com/en-us/windows/uwp/publish/' }
            ]
        },
        {
            title: 'Mobile App Monetization',
            description: 'Explore monetization strategies for mobile apps, including in-app purchases, subscriptions, and advertising.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Play Billing Documentation', url: 'https://developer.android.com/google/play/billing' },
                { text: 'Apple Developer - Monetization Overview', url: 'https://developer.apple.com/app-store/monetization/' },
                { text: 'Microsoft Advertising Documentation', url: 'https://docs.microsoft.com/en-us/advertising/' }
            ]
        },
        {
            title: 'Mobile App Analytics',
            description: 'Understand how to use analytics tools to track app performance, user engagement, and user behavior in mobile applications.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Google Analytics for Firebase', url: 'https://firebase.google.com/docs/analytics' },
                { text: 'Apple Developer - App Analytics', url: 'https://developer.apple.com/app-store/app-analytics/' },
                { text: 'Microsoft App Center Analytics', url: 'https://docs.microsoft.com/en-us/appcenter/analytics/' }
            ]
        },
        {
            title: 'Mobile AR/VR Development',
            description: 'Explore augmented reality (AR) and virtual reality (VR) development for mobile platforms using tools like ARKit, ARCore, and Unity.',
            line: 'Explore resources to learn more:',
            resources: [
                { text: 'Apple Developer - ARKit', url: 'https://developer.apple.com/augmented-reality/' },
                { text: 'Google Developers - ARCore', url: 'https://developers.google.com/ar' },
                { text: 'Unity Learn - VR Development', url: 'https://learn.unity.com/' }
            ]
        },
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Mobile Developer 
                    </div>
                    {showFrontendContent && (
                        <div className="frontend-content">
                            
<p>A mobile developer specializes in creating applications for smartphones, tablets, and other mobile devices, leveraging platforms like iOS, Android, and cross-platform frameworks for efficient and user-friendly experiences on the go. They are adept at designing responsive interfaces, optimizing performance, and integrating features such as geolocation, push notifications, and in-app purchases to deliver comprehensive mobile solutions.</p>
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
