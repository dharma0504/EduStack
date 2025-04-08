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
            title: 'Statistics',
            description: 'Understand basic statistical concepts such as mean, median, mode, standard deviation, and variance. Learn about probability distributions, hypothesis testing, and regression analysis.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Khan Academy - Statistics and Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
                { text: 'Coursera - Statistics with R Specialization', url: 'https://www.coursera.org/specializations/statistics' },
                { text: 'edX - Introduction to Probability and Statistics', url: 'https://www.edx.org/course/introduction-to-probability-and-statistics-2' },
                { text: 'DataCamp - Intro to Statistics in Python', url: 'https://learn.datacamp.com/courses/introduction-to-statistics-in-python' },
                { text: 'Statistical Learning (Book)', url: 'https://www.statlearning.com/' },
                { text: 'Udacity - Intro to Descriptive Statistics', url: 'https://www.udacity.com/course/intro-to-descriptive-statistics--ud827' },
            ]
        },
        {
            title: 'Data Wrangling',
            description: 'Learn how to clean, transform, and manipulate data. Understand data formats, missing data handling, data imputation, and merging datasets.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'DataCamp - Data Manipulation with pandas', url: 'https://www.datacamp.com/courses/data-manipulation-with-pandas' },
                { text: 'Coursera - Data Cleaning and Analysis with Python', url: 'https://www.coursera.org/learn/data-cleaning' },
                { text: 'Kaggle - Data Cleaning Challenge', url: 'https://www.kaggle.com/learn/data-cleaning' },
                { text: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
                { text: 'Data Wrangling with Python (Book)', url: 'https://www.apress.com/gp/book/9781484253544' },
            ]
        },
        {
            title: 'Data Visualization',
            description: 'Learn how to create meaningful and effective visualizations using tools like Matplotlib, Seaborn, Plotly, and Tableau. Understand chart types, color schemes, and best practices for presenting data visually.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'DataCamp - Data Visualization with Matplotlib', url: 'https://www.datacamp.com/courses/data-visualization-with-matplotlib' },
                { text: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/' },
                { text: 'Plotly Express Documentation', url: 'https://plotly.com/python/plotly-express/' },
                { text: 'Tableau Public', url: 'https://public.tableau.com/en-us/s/gallery' },
                { text: 'The Data Visualization Catalogue', url: 'https://datavizcatalogue.com/' },
            ]
        },
        {
            title: 'SQL',
            description: 'Master SQL for data querying and manipulation. Learn about database design, SQL syntax, joins, subqueries, and common SQL functions.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Khan Academy - SQL', url: 'https://www.khanacademy.org/computing/computer-programming/sql' },
                { text: 'Codecademy - Learn SQL', url: 'https://www.codecademy.com/learn/learn-sql' },
                { text: 'W3Schools SQL Tutorial', url: 'https://www.w3schools.com/sql/' },
                { text: 'SQL for Data Science (Book)', url: 'https://www.oreilly.com/library/view/sql-for-data/9781492057627/' },
            ]
        },
        {
            title: 'Machine Learning',
            description: 'Explore machine learning algorithms and techniques for data analysis and prediction. Learn about supervised and unsupervised learning, model evaluation, feature engineering, and model deployment.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Coursera - Machine Learning', url: 'https://www.coursera.org/learn/machine-learning' },
                { text: 'Kaggle - Machine Learning Courses', url: 'https://www.kaggle.com/learn/overview' },
                { text: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/documentation.html' },
                { text: 'Deep Learning Specialization (Coursera)', url: 'https://www.coursera.org/specializations/deep-learning' },
            ]
        },
        {
            title: 'Data Ethics',
            description: 'Understand the ethical considerations and responsibilities associated with handling data. Learn about data privacy, bias detection, fairness in algorithms, and ethical decision-making.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Data Ethics and Privacy (Coursera)', url: 'https://www.coursera.org/learn/data-ethics' },
                { text: 'The Ethical Data Scientist (Book)', url: 'https://www.apress.com/gp/book/9781484253544' },
                { text: 'IEEE Code of Ethics for AI and Autonomous Systems', url: 'https://ethicsinaction.ieee.org/' },
                { text: 'Data Science for Social Good', url: 'https://dssg.uchicago.edu/' },
            ]
        },
        {
            title: 'Data Storytelling',
            description: 'Learn how to communicate insights effectively through storytelling. Understand narrative structures, visualization storytelling, and audience engagement strategies.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Storytelling with Data (Book)', url: 'http://www.storytellingwithdata.com/' },
                { text: 'Data Storytelling Workshop (Coursera)', url: 'https://www.coursera.org/learn/data-storytelling' },
                { text: 'Nightingale (Data Visualization Society Publication)', url: 'https://medium.com/nightingale' },
                { text: 'Visualising Data (Blog)', url: 'https://www.visualisingdata.com/' },
            ]
        },
        {
            title: 'Big Data Technologies',
            description: 'Explore tools and technologies for handling big data. Learn about distributed computing, Hadoop, Spark, NoSQL databases, and cloud platforms for big data processing.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Hadoop Documentation', url: 'https://hadoop.apache.org/docs/' },
                { text: 'Apache Spark Documentation', url: 'https://spark.apache.org/docs/latest/' },
                { text: 'MongoDB University', url: 'https://university.mongodb.com/' },
                { text: 'Google Cloud Big Data and Machine Learning', url: 'https://cloud.google.com/products/big-data' },
            ]
        },
        {
            title: 'Data Governance',
            description: 'Understand data governance frameworks, policies, and practices. Learn about data quality, metadata management, data lineage, and compliance requirements.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Data Governance Institute', url: 'https://www.datagovernance.com/' },
                { text: 'Data Governance Best Practices (Book)', url: 'https://www.amazon.com/Data-Governance-Business-Processes-Impacts/dp/0124142931' },
                { text: 'Data Governance Conference', url: 'https://www.dataversity.net/data-governance-conference/' },
                { text: 'Data Governance Framework (Gartner)', url: 'https://www.gartner.com/en/information-technology/glossary/data-governance-framework' },
            ]
        },
        {
            title: 'Data Science Projects',
            description: 'Work on real-world data science projects to apply your skills. Build predictive models, conduct exploratory data analysis, and communicate findings effectively.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Kaggle Datasets', url: 'https://www.kaggle.com/datasets' },
                { text: 'DrivenData', url: 'https://www.drivendata.org/' },
                { text: 'GitHub - Awesome Data Science Projects', url: 'https://github.com/okulbilisim/awesome-datascience-projects' },
                { text: 'Data Science Portfolio Projects (Medium)', url: 'https://medium.com/datadriveninvestor/10-data-science-portfolio-project-ideas-8e4e366f960e' },
            ]
        },
        {
            title: 'Data Science Careers',
            description: 'Explore career paths in data science and related fields. Learn about job roles, industry trends, networking strategies, and professional development opportunities.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'Data Science Career Guide (Springboard)', url: 'https://www.springboard.com/blog/data-science/data-science-career-guide/' },
                { text: 'LinkedIn - Data Science Jobs', url: 'https://www.linkedin.com/jobs/data-science-jobs/' },
                { text: 'Glassdoor - Data Analyst Jobs', url: 'https://www.glassdoor.com/Job/data-analyst-jobs-SRCH_KO0,12.htm' },
                { text: 'Data Science Conferences', url: 'https://www.kdnuggets.com/data-science-conferences' },
            ]
        },
        {
            title: 'Continuous Learning',
            description: 'Stay updated with the latest tools, technologies, and trends in data analysis. Engage in online courses, workshops, and communities to enhance your skills and knowledge.',
            line:'Visit the following resources to learn more:',
            resources: [
                { text: 'DataCamp - Data Science Courses', url: 'https://www.datacamp.com/' },
                { text: 'Coursera - Data Science Specializations', url: 'https://www.coursera.org/browse/data-science' },
                { text: 'Udacity - Data Science Nanodegree', url: 'https://www.udacity.com/course/data-scientist-nanodegree--nd025' },
                { text: 'Towards Data Science (Medium Publication)', url: 'https://towardsdatascience.com/' },
            ]
        },
        // Add more content items as needed
    ];

    return (
        <div>
            <div className="frontend-container">
                <div className="frontend-section">
                    <div className="frontend-header" onClick={toggleFrontendContent}>
                        Data Analyst
                    </div>
                    {showContent && (
                        <div className="frontend-content">
                            <p>Data analysts are professionals who collect, clean, and analyze large datasets to derive insights and support decision-making. They use statistical and analytical tools to identify trends, patterns, and correlations within data, helping businesses optimize processes and make data-driven decisions.</p>
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
