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
            title: 'Cloud Basics',
            description: 'Understand the fundamentals of cloud computing, including deployment models, service models, and key concepts like scalability, elasticity, and virtualization.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Cloud Practitioner Essentials', url: 'https://www.aws.training/Details/Curriculum?id=60697' },
                { text: 'Microsoft Learn - Azure Fundamentals', url: 'https://learn.microsoft.com/en-us/azure/certification/learn/azure-fundamentals/' },
                { text: 'Google Cloud Fundamentals', url: 'https://cloud.google.com/training/cloud-infrastructure-fundamentals' },
                { text: 'IBM Cloud Essentials', url: 'https://www.ibm.com/cloud/learn/essentials' },
                { text: 'Cloud Computing Basics by Coursera', url: 'https://www.coursera.org/learn/cloud-computing-basics' },
            ]
        },
        {
            title: 'Cloud Platforms',
            description: 'Explore major cloud platforms like AWS, Azure, Google Cloud, and IBM Cloud. Learn about their services, pricing models, and best practices for deploying applications.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Documentation', url: 'https://docs.aws.amazon.com/' },
                { text: 'Microsoft Azure Documentation', url: 'https://docs.microsoft.com/en-us/azure/' },
                { text: 'Google Cloud Documentation', url: 'https://cloud.google.com/docs' },
                { text: 'IBM Cloud Documentation', url: 'https://www.ibm.com/cloud/learn/essentials' },
            ]
        },
        {
            title: 'Infrastructure as Code',
            description: 'Learn to automate infrastructure provisioning and management using tools like Terraform, AWS CloudFormation, Azure Resource Manager, and Google Cloud Deployment Manager.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Terraform Documentation', url: 'https://learn.hashicorp.com/terraform' },
                { text: 'AWS CloudFormation Documentation', url: 'https://docs.aws.amazon.com/cloudformation/' },
                { text: 'Azure Resource Manager Templates', url: 'https://docs.microsoft.com/en-us/azure/azure-resource-manager/templates/' },
                { text: 'Google Cloud Deployment Manager', url: 'https://cloud.google.com/deployment-manager/docs/' },
            ]
        },
        {
            title: 'Containerization and Orchestration',
            description: 'Explore container technologies like Docker and container orchestration platforms such as Kubernetes. Understand containerization benefits, microservices architecture, and deployment strategies.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Docker Documentation', url: 'https://docs.docker.com/' },
                { text: 'Kubernetes Documentation', url: 'https://kubernetes.io/docs/' },
                { text: 'Kubernetes Basics by Google Cloud', url: 'https://www.coursera.org/learn/google-kubernetes-engine' },
                { text: 'Docker and Kubernetes Essentials by Udemy', url: 'https://www.udemy.com/course/docker-and-kubernetes-the-complete-guide/' },
            ]
        },
        {
            title: 'Security and Compliance',
            description: 'Gain knowledge of cloud security best practices, identity and access management (IAM), encryption, network security, compliance standards, and security monitoring tools.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Security Best Practices', url: 'https://aws.amazon.com/security/security-best-practices/' },
                { text: 'Azure Security Center Documentation', url: 'https://docs.microsoft.com/en-us/azure/security-center/' },
                { text: 'Google Cloud Security Command Center', url: 'https://cloud.google.com/security-command-center/docs/quickstart' },
                { text: 'IBM Cloud Security', url: 'https://www.ibm.com/cloud/learn/security' },
            ]
        },
        {
            title: 'Serverless Computing',
            description: 'Explore serverless architectures using AWS Lambda, Azure Functions, Google Cloud Functions, and IBM Cloud Functions. Learn about event-driven programming, scalability, and cost optimization.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Lambda Documentation', url: 'https://docs.aws.amazon.com/lambda/' },
                { text: 'Azure Functions Documentation', url: 'https://docs.microsoft.com/en-us/azure/azure-functions/' },
                { text: 'Google Cloud Functions Documentation', url: 'https://cloud.google.com/functions/docs' },
                { text: 'IBM Cloud Functions Documentation', url: 'https://cloud.ibm.com/docs/openwhisk?topic=openwhisk-getting-started' },
            ]
        },
        {
            title: 'DevOps Practices',
            description: 'Understand DevOps principles, continuous integration (CI), continuous delivery/deployment (CD), infrastructure as code (IaC), monitoring, and collaboration tools like Git, Jenkins, Docker, and Terraform.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Git Documentation', url: 'https://git-scm.com/doc' },
                { text: 'Jenkins Documentation', url: 'https://www.jenkins.io/doc/' },
                { text: 'Docker Documentation', url: 'https://docs.docker.com/' },
                { text: 'Terraform Documentation', url: 'https://learn.hashicorp.com/terraform' },
            ]
        },
        {
            title: 'Big Data and Analytics',
            description: 'Explore cloud-based big data solutions using AWS, Azure, Google Cloud, or IBM Cloud. Learn about data lakes, data warehousing, analytics tools like Apache Spark, Hadoop, and cloud-native data services.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Big Data and Analytics', url: 'https://aws.amazon.com/big-data/' },
                { text: 'Azure Big Data Solutions', url: 'https://azure.microsoft.com/en-us/solutions/big-data/' },
                { text: 'Google Cloud Big Data', url: 'https://cloud.google.com/solutions/big-data' },
                { text: 'IBM Cloud Data and AI', url: 'https://www.ibm.com/cloud/learn/data-and-ai' },
            ]
        },
        {
            title: 'Machine Learning and AI',
            description: 'Gain knowledge of cloud-based machine learning services and frameworks like AWS SageMaker, Azure Machine Learning, Google Cloud AI Platform, and IBM Watson. Explore data preprocessing, model training, and deployment.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS SageMaker Documentation', url: 'https://docs.aws.amazon.com/sagemaker/' },
                { text: 'Azure Machine Learning Documentation', url: 'https://docs.microsoft.com/en-us/azure/machine-learning/' },
                { text: 'Google Cloud AI Platform Documentation', url: 'https://cloud.google.com/ai-platform/docs' },
                { text: 'IBM Watson AI Documentation', url: 'https://www.ibm.com/cloud/learn/watson' },
            ]
        },
        {
            title: 'Cloud Governance and Cost Management',
            description: 'Understand cloud governance best practices, cost optimization strategies, budgeting, resource tagging, compliance policies, and cloud cost management tools like AWS Cost Explorer, Azure Cost Management, and Google Cloud Billing.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'AWS Cost Management', url: 'https://aws.amazon.com/cost-management/' },
                { text: 'Azure Cost Management', url: 'https://azure.microsoft.com/en-us/features/cost-management/' },
                { text: 'Google Cloud Billing Documentation', url: 'https://cloud.google.com/billing/docs' },
                { text: 'IBM Cloud Cost Management', url: 'https://www.ibm.com/cloud/learn/cost-management' },
            ]
        },
        
        // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    Cloud Engineering
                </div>
                {showContent && (
                    <div className="frontend-content">
                        <p>Cloud engineering involves designing, building, and managing scalable and reliable cloud-based solutions. It requires expertise in cloud platforms, infrastructure automation, containerization, and security.</p>
                        <p>Cloud engineers collaborate with development and operations teams to optimize performance, cost-efficiency, and security of cloud environments.</p>
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
