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
            title: 'Cybersecurity Fundamentals',
            description: 'Understand the basics of cybersecurity, including threat landscape, security principles, and common attack vectors.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Cybersecurity Essentials (Cisco)', url: 'https://www.netacad.com/courses/security/cybersecurity-essentials' },
                { text: 'Cybersecurity Fundamentals (Coursera)', url: 'https://www.coursera.org/specializations/cyber-security-fundamentals' },
                { text: 'Introduction to Cybersecurity (edX)', url: 'https://www.edx.org/course/introduction-to-cyber-security-2' },
            ]
        },
        {
            title: 'Network Security',
            description: 'Learn about network security protocols, firewalls, VPNs, and secure network design principles.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Network Security Fundamentals (Pluralsight)', url: 'https://www.pluralsight.com/courses/network-security-fundamentals' },
                { text: 'CCNA Security (Cisco)', url: 'https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/associate/ccna-security.html' },
                { text: 'Network Security (edX)', url: 'https://www.edx.org/learn/network-security' },
            ]
        },
        {
            title: 'Web Application Security',
            description: 'Explore web application vulnerabilities, secure coding practices, and web security best practices.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Web Application Security (Pluralsight)', url: 'https://www.pluralsight.com/courses/web-application-security' },
                { text: 'OWASP Top 10 (OWASP)', url: 'https://owasp.org/www-project-top-ten/' },
                { text: 'Secure Coding (Coursera)', url: 'https://www.coursera.org/specializations/secure-coding-practices' },
            ]
        },
        {
            title: 'Incident Response',
            description: 'Learn about incident response frameworks, threat detection, incident handling, and recovery strategies.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Incident Response Fundamentals (SANS)', url: 'https://www.sans.org/cyber-security-courses/incident-response-fundamentals/' },
                { text: 'Cyber Incident Response (edX)', url: 'https://www.edx.org/course/cyber-incident-response' },
                { text: 'Incident Response (Pluralsight)', url: 'https://www.pluralsight.com/courses/incident-response' },
            ]
        },
        {
            title: 'Security Risk Management',
            description: 'Learn about risk assessment, threat modeling, security controls, and risk mitigation strategies.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Risk Management (ISC)²', url: 'https://www.isc2.org/Training/Cybersecurity-Risk-Management' },
                { text: 'Risk Management Framework (NIST)', url: 'https://csrc.nist.gov/publications/detail/sp/800-37/rev-2/final' },
                { text: 'Risk Management (Coursera)', url: 'https://www.coursera.org/specializations/cyber-security-risk-management' },
            ]
        },
        {
            title: 'Cloud Security',
            description: 'Explore cloud security principles, secure cloud architecture, data protection, and cloud compliance.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Cloud Security Fundamentals (Pluralsight)', url: 'https://www.pluralsight.com/courses/cloud-security-fundamentals' },
                { text: 'AWS Cloud Security (AWS Training)', url: 'https://aws.amazon.com/training/course-descriptions/security-fundamentals/' },
                { text: 'Azure Security Fundamentals (Microsoft Learn)', url: 'https://learn.microsoft.com/en-us/training/azure-fundamentals-security' },
            ]
        },
        {
            title: 'Mobile Security',
            description: 'Understand mobile security threats, secure mobile app development, mobile device management, and BYOD policies.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Mobile Security Fundamentals (SANS)', url: 'https://www.sans.org/cyber-security-courses/mobile-device-security/' },
                { text: 'Secure Mobile Development (OWASP)', url: 'https://owasp.org/www-project-mobile/' },
                { text: 'Mobile Security (Coursera)', url: 'https://www.coursera.org/specializations/mobile-security' },
            ]
        },
        {
            title: 'IoT Security',
            description: 'Explore IoT security challenges, secure IoT device design, communication protocols, and IoT security standards.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'IoT Security Fundamentals (Pluralsight)', url: 'https://www.pluralsight.com/courses/iot-security-fundamentals' },
                { text: 'IoT Security (SANS)', url: 'https://www.sans.org/cyber-security-courses/internet-things-security/' },
                { text: 'IoT Security (edX)', url: 'https://www.edx.org/professional-certificate/iot-security' },
            ]
        },
        {
            title: 'Ethical Hacking',
            description: 'Learn about penetration testing, ethical hacking techniques, vulnerability assessment, and security testing tools.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Certified Ethical Hacker (CEH)', url: 'https://www.eccouncil.org/programs/certified-ethical-hacker-ceh/' },
                { text: 'Ethical Hacking (Udemy)', url: 'https://www.udemy.com/topic/ethical-hacking/' },
                { text: 'Ethical Hacking (Coursera)', url: 'https://www.coursera.org/specializations/ethical-hacking' },
            ]
        },
        {
            title: 'Cybersecurity Career Paths',
            description: 'Explore various cybersecurity career paths, certifications, skills development, and job roles in the industry.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Cybersecurity Career Paths (Cybrary)', url: 'https://www.cybrary.it/' },
                { text: 'Cybersecurity Certifications Guide (Infosec)', url: 'https://www.infosecinstitute.com/courses/cybersecurity-certification-guide/' },
                { text: 'Cybersecurity Jobs (Indeed)', url: 'https://www.indeed.com/q-Cyber-Security-jobs.html' },
            ]
        },
    ];
    

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Cyber Security
                </div>
                {showContent && (
                    <div className="frontend-content">
                        <p>Cybersecurity encompasses strategies and technologies aimed at protecting digital systems, networks, and data from unauthorized access, attacks, and vulnerabilities. It involves a range of practices such as risk management, threat detection, incident response, and secure development to safeguard against cyber threats and ensure data integrity, confidentiality, and availability.






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
