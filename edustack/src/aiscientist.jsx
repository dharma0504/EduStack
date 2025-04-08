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
            title: 'Foundational Knowledge',
            description: 'Learn Python programming language. Understand essential libraries like NumPy, Pandas, and Matplotlib for data manipulation and visualization. Familiarize yourself with data structures, algorithms, and data cleaning techniques.',
            line:'Recommended resources:',
            resources: [
                { text: 'Python Documentation', url: 'https://docs.python.org/3/' },
                { text: 'NumPy Tutorial', url: 'https://numpy.org/doc/stable/user/quickstart.html' },
                { text: 'Pandas Documentation', url: 'https://pandas.pydata.org/docs/' },
                { text: 'Matplotlib Gallery', url: 'https://matplotlib.org/stable/gallery/index.html' },
                { text: 'Data Structures and Algorithms in Python', url: 'https://realpython.com/tutorials/data-structures/' },
            ]
        },
        {
            title: 'Statistics and Mathematics',
            description: 'Study probability and statistics concepts. Learn linear algebra and calculus fundamentals. Gain knowledge of statistical modeling techniques and hypothesis testing.',
            line:'Recommended resources:',
            resources: [
                { text: 'Khan Academy - Statistics and Probability', url: 'https://www.khanacademy.org/math/statistics-probability' },
                { text: '3Blue1Brown - Essence of Linear Algebra', url: 'https://www.youtube.com/playlist?list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab' },
                { text: 'MIT OpenCourseWare - Multivariable Calculus', url: 'https://ocw.mit.edu/courses/mathematics/18-02sc-multivariable-calculus-fall-2010/' },
                { text: 'Statistical Modeling: A Fresh Approach', url: 'https://bookdown.org/bbolker/statistical-modeling-tutorial/' },
            ]
        },
        {
            title: 'Machine Learning Fundamentals',
            description: 'Explore supervised learning algorithms such as linear regression, logistic regression, decision trees, and random forests. Understand unsupervised learning techniques like clustering (K-means, hierarchical clustering) and dimensionality reduction (PCA, t-SNE). Dive into model evaluation, validation techniques, and hyperparameter tuning.',
            line:'Recommended resources:',
            resources: [
                { text: 'Scikit-learn Documentation', url: 'https://scikit-learn.org/stable/user_guide.html' },
                { text: 'Coursera - Machine Learning by Andrew Ng', url: 'https://www.coursera.org/learn/machine-learning' },
                { text: 'Deep Learning Specialization on Coursera', url: 'https://www.coursera.org/specializations/deep-learning' },
                { text: 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow', url: 'https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/' },
            ]
        },
        {
            title: 'Deep Learning',
            description: 'Dive into neural networks, deep learning architectures (CNNs, RNNs, GANs), and advanced topics like transfer learning, reinforcement learning, and natural language processing (NLP). Explore deep learning frameworks such as TensorFlow and PyTorch.',
            line:'Recommended resources:',
            resources: [
                { text: 'TensorFlow Documentation', url: 'https://www.tensorflow.org/guide' },
                { text: 'PyTorch Documentation', url: 'https://pytorch.org/docs/stable/index.html' },
                { text: 'Deep Learning Specialization on Coursera', url: 'https://www.coursera.org/specializations/deep-learning' },
                { text: 'Fast.ai Practical Deep Learning for Coders', url: 'https://course.fast.ai/' },
            ]
        },
        {
            title: 'Big Data Technologies',
            description: 'Learn about big data processing frameworks like Apache Hadoop and Apache Spark. Understand distributed computing, data pipelines, and data storage solutions (HDFS, NoSQL databases). Gain knowledge of cloud platforms (AWS, Google Cloud, Azure) for scalable data processing.',
            line:'Recommended resources:',
            resources: [
                { text: 'Apache Hadoop Documentation', url: 'https://hadoop.apache.org/docs/stable/' },
                { text: 'Apache Spark Documentation', url: 'https://spark.apache.org/docs/latest/' },
                { text: 'Google Cloud Big Data and Machine Learning Fundamentals', url: 'https://cloud.google.com/training/data-ml-fundamentals' },
                { text: 'AWS Big Data Training', url: 'https://aws.amazon.com/training/course-descriptions/big-data/' },
            ]
        },
        {
            title: 'Data Visualization',
            description: 'Master data visualization techniques using tools like Matplotlib, Seaborn, Plotly, and Tableau. Understand best practices for creating insightful and interactive visualizations to communicate data-driven insights effectively.',
            line:'Recommended resources:',
            resources: [
                { text: 'Matplotlib Documentation', url: 'https://matplotlib.org/stable/contents.html' },
                { text: 'Seaborn Documentation', url: 'https://seaborn.pydata.org/' },
                { text: 'Plotly Documentation', url: 'https://plotly.com/python/' },
                { text: 'Tableau Learning Resources', url: 'https://www.tableau.com/learn/training' },
            ]
        },
        {
            title: 'Data Engineering',
            description: 'Become proficient in data engineering concepts such as ETL (Extract, Transform, Load), data warehousing, data modeling, and SQL. Familiarize yourself with database management systems (SQL and NoSQL), data lakes, and data integration techniques.',
            line:'Recommended resources:',
            resources: [
                { text: 'Mode SQL Tutorial', url: 'https://mode.com/sql-tutorial/' },
                { text: 'Google Cloud Data Engineering Training', url: 'https://cloud.google.com/training/data-engineering' },
                { text: 'Data Engineering on Coursera', url: 'https://www.coursera.org/specializations/google-cloud-data-engineering' },
                { text: 'Data Engineering Nanodegree on Udacity', url: 'https://www.udacity.com/course/data-engineer-nanodegree--nd027' },
            ]
        },
        {
            title: 'Advanced Analytics',
            description: 'Explore advanced analytics techniques such as predictive modeling, time series analysis, clustering, and anomaly detection. Learn about machine learning pipelines, feature engineering, and model deployment strategies.',
            line:'Recommended resources:',
            resources: [
                { text: 'Predictive Modeling in Python', url: 'https://towardsdatascience.com/predictive-modeling-in-python-a-hands-on-guide-for-beginners-700eafb3c4ee' },
                { text: 'Time Series Analysis Tutorial', url: 'https://www.machinelearningplus.com/time-series/time-series-analysis-python/' },
                { text: 'Clustering in Machine Learning', url: 'https://www.analyticsvidhya.com/blog/2021/05/a-complete-guide-to-clustering-algorithms-in-machine-learning/' },
                { text: 'Anomaly Detection Techniques', url: 'https://www.datasciencecentral.com/profiles/blogs/anomaly-detection-techniques-in-machine-learning' },
            ]
        },
        {
            title: 'AI Ethics and Responsible AI',
            description: 'Understand the ethical implications of AI and data science. Learn about fairness, transparency, accountability, and privacy concerns in AI models and algorithms. Explore frameworks and guidelines for developing responsible AI solutions.',
            line:'Recommended resources:',
            resources: [
                { text: 'AI Ethics: A Comprehensive Guide', url: 'https://www.ibm.com/cloud/learn/ai-ethics' },
                { text: 'Responsible AI Toolkit', url: 'https://www.microsoft.com/en-us/ai/responsible-ai-toolkit' },
                { text: 'Ethics in Data Science and Machine Learning', url: 'https://www.kdnuggets.com/2021/02/ethics-data-science-machine-learning.html' },
                { text: 'Fairness and Bias in Machine Learning', url: 'https://developers.google.com/machine-learning/fairness-overview' },
            ]
        },
        {
            title: 'Business Acumen',
            description: 'Develop business acumen by understanding industry domains, business processes, and key performance indicators (KPIs). Learn to translate data insights into actionable business strategies. Collaborate effectively with stakeholders and communicate data findings.',
            line:'Recommended resources:',
            resources: [
                { text: 'Business Analytics Certification on Coursera', url: 'https://www.coursera.org/specializations/business-analytics' },
                { text: 'Data Science for Business on edX', url: 'https://www.edx.org/professional-certificate/data-science-for-business' },
                { text: 'Harvard Business Review - Data and Analytics', url: 'https://hbr.org/topic/data-and-analytics' },
                { text: 'Data Science for Executives on Udacity', url: 'https://www.udacity.com/course/data-science-for-executives--ud943' },
            ]
        },
        {
            title: 'Continuous Learning and Professional Development',
            description: 'Embrace lifelong learning and stay updated with the latest trends, tools, and technologies in AI and data science. Participate in online courses, workshops, conferences, and community events. Network with peers and industry experts.',
            line:'Recommended resources:',
            resources: [
                { text: 'DataCamp - Data Science Courses', url: 'https://www.datacamp.com/' },
                { text: 'Kaggle - Data Science Competitions', url: 'https://www.kaggle.com/' },
                { text: 'Towards Data Science Blog', url: 'https://towardsdatascience.com/' },
                { text: 'Data Science Meetups and Conferences', url: 'https://www.meetup.com/topics/data-science/' },
            ]
        },
        {
            title: 'Portfolio Development',
            description: 'Build a strong portfolio showcasing your data science projects, including data analysis, machine learning models, data visualizations, and actionable insights. Highlight your skills, methodologies, and impact on business outcomes.',
            line:'Recommended resources:',
            resources: [
                { text: 'GitHub - Data Science Projects', url: 'https://github.com/search?q=data+science+projects' },
                { text: 'Portfolio Tips for Data Scientists', url: 'https://www.springboard.com/blog/data-science/data-science-portfolio/' },
                { text: 'Data Science Portfolios on Medium', url: 'https://medium.com/analytics-vidhya/7-data-science-portfolios-to-inspire-your-portfolio-journey-8a80148c9e05' },
                { text: 'Data Science Showcase Websites', url: 'https://www.analyticsvidhya.com/blog/2021/06/websites-for-data-science-portfolio-showcase/' },
            ]
        },
        {
            title: 'Career Advancement and Networking',
            description: 'Focus on career growth by seeking opportunities for mentorship, networking, and professional development. Join data science communities, attend career fairs, and engage with recruiters. Enhance your soft skills and leadership abilities.',
            line:'Recommended resources:',
            resources: [
                { text: 'LinkedIn Learning - Data Science Career Paths', url: 'https://www.linkedin.com/learning/paths/become-a-data-scientist' },
                { text: 'Data Science Conferences and Events', url: 'https://www.analyticsvidhya.com/blog/2021/03/top-data-science-conferences-and-events-to-attend-in-2021/' },
                { text: 'Data Science Job Boards', url: 'https://www.springboard.com/blog/data-science/data-science-job-boards/' },
                { text: 'Soft Skills for Data Scientists', url: 'https://towardsdatascience.com/5-essential-soft-skills-for-data-scientists-5b4c0d5e3019' },
            ]
        }
        
        // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    AI and Data Scientist 
                </div>
                {showContent && (
                    <div className="frontend-content">
                        <p>AI data scientists are experts in developing and implementing machine learning algorithms to derive insights from data. They possess a strong blend of technical skills, including programming and statistical modeling, along with domain expertise in artificial intelligence and data analysis.</p>
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
