import React, { useState } from 'react';
import './STYLES/frontend.css'; // Import your CSS file

function FourthYearRoadmap() {
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
            title: 'Advanced Topics in Machine Learning and Artificial Intelligence',
            description: 'Dive deeper into machine learning algorithms such as deep learning, reinforcement learning, and unsupervised learning. Explore advanced topics in artificial intelligence, including natural language processing, computer vision, and robotics. Study state-of-the-art research papers and participate in machine learning competitions to gain practical experience. Work on real-world projects applying machine learning and AI techniques to solve complex problems in various domains.',
            resources: [
                { title: 'Deep Learning Specialization - Coursera', link: 'https://www.coursera.org/specializations/deep-learning' },
                { title: 'CS231n: Convolutional Neural Networks for Visual Recognition - Stanford', link: 'http://cs231n.stanford.edu/' }
            ]
        },
        {
            title: 'Advanced Computer Vision and Image Processing',
            description: 'Explore advanced techniques in computer vision, such as object detection, image segmentation, and image classification. Study algorithms for feature extraction, feature matching, and geometric transformations. Learn about image processing techniques for enhancing and analyzing digital images. Work on projects involving real-world applications of computer vision, such as autonomous vehicles, medical imaging, and augmented reality.',
            resources: [
                { title: 'Computer Vision - Coursera', link: 'https://www.coursera.org/learn/computer-vision-basics' },
                { title: 'OpenCV Documentation', link: 'https://docs.opencv.org/' }
            ]
        },
        {
            title: 'Cloud Computing and Distributed Systems',
            description: 'Study cloud computing architectures, including Infrastructure as a Service (IaaS), Platform as a Service (PaaS), and Software as a Service (SaaS). Learn about distributed systems concepts such as scalability, fault tolerance, and consistency. Explore cloud platforms like Amazon Web Services (AWS), Microsoft Azure, and Google Cloud Platform (GCP). Work on projects involving the design and implementation of distributed systems and cloud-based applications.',
            resources: [
                { title: 'AWS Certified Solutions Architect - Associate', link: 'https://aws.amazon.com/certification/certified-solutions-architect-associate/' },
                { title: 'Google Cloud Platform Fundamentals - Coursera', link: 'https://www.coursera.org/learn/gcp-fundamentals' }
            ]
        },
        {
            title: 'Cybersecurity and Network Security',
            description: 'Deepen your understanding of cybersecurity threats, vulnerabilities, and countermeasures. Study cryptographic algorithms and protocols for securing data communication and storage. Learn about intrusion detection systems, firewalls, and secure coding practices. Work on hands-on projects to assess and enhance the security of computer networks, systems, and applications.',
            resources: [
                { title: 'Cybersecurity Specialization - Coursera', link: 'https://www.coursera.org/specializations/cyber-security' },
                { title: 'OWASP - Open Web Application Security Project', link: 'https://owasp.org/' }
            ]
        },
        {
            title: 'Software Development Lifecycle and DevOps',
            description: 'Explore advanced topics in software engineering, including continuous integration, continuous delivery, and continuous deployment (CI/CD). Learn about DevOps tools and practices for automating software development, testing, and deployment processes. Study containerization technologies like Docker and container orchestration platforms like Kubernetes. Work on projects to implement DevOps practices and tools in real-world software development environments.',
            resources: [
                { title: 'DevOps Engineering with Google Cloud - Coursera', link: 'https://www.coursera.org/specializations/automating-cloud-deployment' },
                { title: 'Kubernetes Documentation', link: 'https://kubernetes.io/docs/' }
            ]
        },
        {
            title: 'Final Year Projects',
            description: 'Undertake a final year project that demonstrates your proficiency in computer science and engineering. Choose a challenging project that integrates multiple technologies and addresses a significant problem or opportunity. Work in teams to plan, design, implement, and evaluate the project, following industry best practices and standards. Present your project to faculty, peers, and industry professionals to showcase your achievements and receive feedback.',
            resources: [
                { title: 'GitHub - Version Control', link: 'https://github.com/' },
                { title: 'IEEE Xplore - Research Papers', link: 'https://ieeexplore.ieee.org/' }
            ]
        },
        {
            title: 'Research',
            description: 'Engage in research activities to contribute to the advancement of knowledge in computer science and engineering. Collaborate with faculty members, research groups, or industry partners on cutting-edge research projects. Publish your research findings in academic journals, conferences, or technical reports. Develop critical thinking, problem-solving, and communication skills through research.',
            resources: [
                { title: 'Google Scholar', link: 'https://scholar.google.com/' },
                { title: 'ArXiv.org - e-Print archive', link: 'https://arxiv.org/' }
            ]
        },
        {
            title: 'Internship',
            description: 'Seek internships at top tech companies, research labs, or startups to gain industry experience and build your professional network. Apply your knowledge and skills in a real-world work environment, working on meaningful projects and tasks. Learn from experienced professionals, receive mentorship, and explore different career paths within the tech industry. Network with potential employers and establish connections for future job opportunities.',
            resources: [
                { title : 'LinkedIn - Professional Networking', link: 'https://www.linkedin.com/' },
                { title: 'Glassdoor - Job Search', link: 'https://www.glassdoor.com/index.htm' }
            ]
        },
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Fourth Year
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

export default FourthYearRoadmap;

