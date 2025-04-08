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
            title: "AWS Fundamentals",
            description: "Learn the basics of Amazon Web Services (AWS), including its global infrastructure, core services, and basic concepts such as regions, availability zones, and IAM (Identity and Access Management).",
            resources: [
                { text: "AWS Documentation", url: "https://docs.aws.amazon.com/index.html" },
                { text: "AWS Free Tier", url: "https://aws.amazon.com/free/" },
                { text: "AWS Well-Architected Framework", url: "https://aws.amazon.com/architecture/well-architected/" }
            ]
        },
        {
            title: "Compute Services",
            description: "Explore AWS compute services such as Amazon EC2 (Elastic Compute Cloud), AWS Lambda, AWS Elastic Beanstalk, and AWS Batch.",
            resources: [
                { text: "Amazon EC2 Documentation", url: "https://docs.aws.amazon.com/ec2/index.html" },
                { text: "AWS Lambda Documentation", url: "https://docs.aws.amazon.com/lambda/index.html" },
                { text: "AWS Elastic Beanstalk Documentation", url: "https://docs.aws.amazon.com/elasticbeanstalk/index.html" }
            ]
        },
        {
            title: "Storage Services",
            description: "Learn about AWS storage services including Amazon S3 (Simple Storage Service), Amazon EBS (Elastic Block Store), Amazon Glacier, and AWS Storage Gateway.",
            resources: [
                { text: "Amazon S3 Documentation", url: "https://docs.aws.amazon.com/s3/index.html" },
                { text: "Amazon EBS Documentation", url: "https://docs.aws.amazon.com/ebs/index.html" },
                { text: "Amazon Glacier Documentation", url: "https://docs.aws.amazon.com/amazonglacier/index.html" }
            ]
        },
        {
            title: "Database Services",
            description: "Discover AWS database services such as Amazon RDS (Relational Database Service), Amazon DynamoDB, Amazon Redshift, and Amazon Aurora.",
            resources: [
                { text: "Amazon RDS Documentation", url: "https://docs.aws.amazon.com/rds/index.html" },
                { text: "Amazon DynamoDB Documentation", url: "https://docs.aws.amazon.com/dynamodb/index.html" },
                { text: "Amazon Redshift Documentation", url: "https://docs.aws.amazon.com/redshift/index.html" }
            ]
        },
        {
            title: "Networking Services",
            description: "Understand AWS networking services including Amazon VPC (Virtual Private Cloud), Amazon Route 53, AWS Direct Connect, and Elastic Load Balancing.",
            resources: [
                { text: "Amazon VPC Documentation", url: "https://docs.aws.amazon.com/vpc/index.html" },
                { text: "Amazon Route 53 Documentation", url: "https://docs.aws.amazon.com/Route53/index.html" },
                { text: "AWS Direct Connect Documentation", url: "https://docs.aws.amazon.com/directconnect/index.html" }
            ]
        },
        {
            title: "Security & Identity Services",
            description: "Explore AWS security and identity services including IAM (Identity and Access Management), Amazon Cognito, AWS Certificate Manager, and AWS WAF (Web Application Firewall).",
            resources: [
                { text: "IAM Documentation", url: "https://docs.aws.amazon.com/IAM/index.html" },
                { text: "Amazon Cognito Documentation", url: "https://docs.aws.amazon.com/cognito/index.html" },
                { text: "AWS Certificate Manager Documentation", url: "https://docs.aws.amazon.com/acm/index.html" }
            ]
        },
        {
            title: "Management & Monitoring Services",
            description: "Learn about AWS management and monitoring services such as AWS CloudWatch, AWS CloudTrail, AWS Config, and AWS Systems Manager.",
            resources: [
                { text: "Amazon CloudWatch Documentation", url: "https://docs.aws.amazon.com/cloudwatch/index.html" },
                { text: "AWS CloudTrail Documentation", url: "https://docs.aws.amazon.com/cloudtrail/index.html" },
                { text: "AWS Config Documentation", url: "https://docs.aws.amazon.com/config/index.html" }
            ]
        },
        {
            title: "Deployment & Automation",
            description: "Discover AWS deployment and automation services including AWS CloudFormation, AWS CodeDeploy, AWS CodePipeline, and AWS OpsWorks.",
            resources: [
                { text: "AWS CloudFormation Documentation", url: "https://docs.aws.amazon.com/cloudformation/index.html" },
                { text: "AWS CodeDeploy Documentation", url: "https://docs.aws.amazon.com/codedeploy/index.html" },
                { text: "AWS CodePipeline Documentation", url: "https://docs.aws.amazon.com/codepipeline/index.html" }
            ]
        },
        {
            title: "Serverless Computing",
            description: "Explore serverless computing on AWS using services such as AWS Lambda, Amazon API Gateway, AWS Step Functions, and AWS SAM (Serverless Application Model).",
            resources: [
                { text: "AWS Lambda Documentation", url: "https://docs.aws.amazon.com/lambda/index.html" },
                { text: "Amazon API Gateway Documentation", url: "https://docs.aws.amazon.com/apigateway/index.html" },
                { text: "AWS Step Functions Documentation", url: "https://docs.aws.amazon.com/step-functions/index.html" }
            ]
        },
        {
            title: "AI & Machine Learning",
            description: "Learn about AWS AI and machine learning services including Amazon SageMaker, Amazon Rekognition, Amazon Comprehend, and AWS Deep Learning AMIs.",
            resources: [
                { text: "Amazon SageMaker Documentation", url: "https://docs.aws.amazon.com/sagemaker/index.html" },
                { text: "Amazon Rekognition Documentation", url: "https://docs.aws.amazon.com/rekognition/index.html" },
                { text: "Amazon Comprehend Documentation", url: "https://docs.aws.amazon.com/comprehend/index.html" }
            ]
        }         // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    AWS
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>AWS (Amazon Web Services) is a comprehensive cloud computing platform offered by Amazon.com. It provides a wide range of services, including computing power, storage solutions, database management, networking, machine learning, artificial intelligence, and more, all available on a pay-as-you-go basis. AWS enables businesses to build, deploy, and scale applications and services quickly and cost-effectively without the need to invest in physical infrastructure. With its global infrastructure spanning multiple regions and availability zones, AWS offers high availability, scalability, and reliability for applications and services hosted on its platform. It is widely used by businesses of all sizes, from startups to large enterprises, across various industries, making it one of the leading cloud computing providers in the world. </p>
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
