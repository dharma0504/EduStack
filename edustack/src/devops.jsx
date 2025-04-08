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
            title: 'CSS',
            description: 'Understand CSS selectors, properties, and styling techniques. Learn about CSS layouts, positioning, and responsive design.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'W3Schools CSS Tutorial', url: 'https://www.w3schools.com/css/' },
                { text: 'MDN Web Docs - CSS', url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
                { text: 'CSS-Tricks', url: 'https://css-tricks.com/' }
            ]
        },
        {
            title: 'Configuration Management',
            description: 'Learn about configuration management tools like Ansible, Puppet, or Chef. Understand infrastructure automation, configuration drift management, and idempotent configuration.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Ansible Documentation', url: 'https://docs.ansible.com/' },
                { text: 'Puppet Documentation', url: 'https://puppet.com/docs/' },
                { text: 'Chef Documentation', url: 'https://learn.chef.io/docs' },
            ]
        },
        {
            title: 'Version Control and Collaboration',
            description: 'Master version control systems like Git or Mercurial for source code management. Learn about branching strategies, code review processes, and collaborative workflows.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Pro Git Book', url: 'https://git-scm.com/book/en/v2' },
                { text: 'Atlassian Git Tutorial', url: 'https://www.atlassian.com/git/tutorials' },
                { text: 'GitHub Learning Lab', url: 'https://lab.github.com/' },
            ]
        },
        {
            title: 'CI/CD',
            description: 'Understand Continuous Integration (CI) and Continuous Deployment (CD) principles. Learn about tools like Jenkins, GitLab CI/CD, and GitHub Actions.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Jenkins Official Documentation', url: 'https://www.jenkins.io/doc/' },
                { text: 'GitLab CI/CD Docs', url: 'https://docs.gitlab.com/ee/ci/' },
                { text: 'GitHub Actions Documentation', url: 'https://docs.github.com/en/actions' },
                { text: 'CircleCI Docs', url: 'https://circleci.com/docs/' },
            ]
        },
        {
            title: 'Containerization',
            description: 'Learn about containerization using Docker. Understand Docker basics, container orchestration with Kubernetes, and container management platforms like Docker Swarm.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Docker Documentation', url: 'https://docs.docker.com/' },
                { text: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/' },
                { text: 'Docker Swarm Documentation', url: 'https://docs.docker.com/engine/swarm/' },
                { text: 'Podman Documentation', url: 'https://podman.io/getting-started/' },
            ]
        },
        {
            title: 'Infrastructure as Code (IaC)',
            description: 'Explore Infrastructure as Code concepts using tools like Terraform, AWS CloudFormation, or Azure Resource Manager (ARM) templates. Learn to automate infrastructure provisioning and management.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Terraform Documentation', url: 'https://learn.hashicorp.com/collections/terraform/aws-get-started' },
                { text: 'AWS CloudFormation Docs', url: 'https://docs.aws.amazon.com/cloudformation/' },
                { text: 'Azure Resource Manager Docs', url: 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/' },
            ]
        },
        {
            title: 'Monitoring and Logging',
            description: 'Learn about monitoring tools like Prometheus, Grafana, and ELK stack for logging and analytics. Understand system observability and performance monitoring.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Prometheus Documentation', url: 'https://prometheus.io/docs/' },
                { text: 'Grafana Documentation', url: 'https://grafana.com/docs/' },
                { text: 'ELK Stack (Elasticsearch, Logstash, Kibana) Documentation', url: 'https://www.elastic.co/what-is/elk-stack' },
            ]
        },
        {
            title: 'Security and Compliance',
            description: 'Explore DevSecOps practices for integrating security into DevOps pipelines. Learn about security scanning tools, vulnerability management, and compliance automation.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'OWASP - Open Web Application Security Project', url: 'https://owasp.org/' },
                { text: 'Snyk - Security Testing & Open Source Security', url: 'https://snyk.io/' },
                { text: 'HashiCorp Vault Documentation', url: 'https://www.vaultproject.io/docs' },
            ]
        },
        {
            title: 'Cloud Platforms',
            description: 'Gain proficiency in cloud platforms like AWS, Azure, or Google Cloud Platform (GCP). Learn about cloud services, serverless computing, and cloud-native architectures.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
                { text: 'Azure Documentation', url: 'https://docs.microsoft.com/en-us/azure/' },
                { text: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs' },
            ]
        },
        {
            title: 'Collaboration and Communication',
            description: 'Understand collaboration tools like Slack, Microsoft Teams, or Discord for team communication. Learn about version control with Git and Git workflows.',
            line: 'Visit the following resources to learn more:',
            resources: [
                { text: 'Slack Help Center', url: 'https://slack.com/help' },
                { text: 'Microsoft Teams Documentation', url: 'https://learn.microsoft.com/en-us/microsoftteams/' },
                { text: 'GitHub Learning Lab', url: 'https://lab.github.com/' },
            ]
        },
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        DevOps
                    </div>
                    {showFrontendContent && (
                        <div className="frontend-content">
                            <p>DevOps is a collaborative approach that merges software development (Dev) with IT operations (Ops), aiming to automate and streamline the software delivery process. It emphasizes continuous integration, continuous delivery (CI/CD), automation, and close collaboration between development and operations teams to enhance software quality, speed up deployment cycles, and improve overall efficiency.






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
