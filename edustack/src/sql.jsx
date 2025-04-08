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
            title: 'SQL Basics',
            description: 'Start by learning the fundamentals of SQL (Structured Query Language). Understand SQL syntax, data types, and basic queries for data retrieval and manipulation.',
            resources: [
                { text: 'SQL Tutorial - W3Schools', url: 'https://www.w3schools.com/sql/' },
                { text: 'SQLCourse - Interactive SQL Tutorial', url: 'https://www.sqlcourse.com/' },
                { text: 'SQLZoo - Interactive SQL Tutorial', url: 'https://sqlzoo.net/' }
            ]
        },
        {
            title: 'Database Design',
            description: 'Learn about relational database concepts and principles. Understand entity-relationship modeling (ER modeling), normalization, and database design best practices.',
            resources: [
                { text: 'Database Design Basics - W3Schools', url: 'https://www.w3schools.com/sql/sql_create_table.asp' },
                { text: 'Database Design for Mere Mortals - Book by Michael J. Hernandez', url: 'https://www.amazon.com/Database-Design-Mere-Mortals-Hands/dp/0321884493' },
                { text: 'ER Diagram Tutorial - Lucidchart', url: 'https://www.lucidchart.com/pages/er-diagrams' }
            ]
        },
        {
            title: 'Data Manipulation',
            description: 'Dive deeper into SQL with advanced techniques for data manipulation. Learn about joins, subqueries, aggregations, and conditional logic to query and transform data effectively.',
            resources: [
                { text: 'SQL Joins Explained - Coding Horror', url: 'https://blog.codinghorror.com/a-visual-explanation-of-sql-joins/' },
                { text: 'SQL Subqueries - Tutorialspoint', url: 'https://www.tutorialspoint.com/sql/sql-sub-queries.htm' },
                { text: 'SQL Aggregate Functions - W3Schools', url: 'https://www.w3schools.com/sql/sql_functions.asp' }
            ]
        },
        {
            title: 'Data Definition',
            description: 'Explore SQL commands for defining and managing database structures. Learn about creating tables, altering schemas, and enforcing data integrity with constraints.',
            resources: [
                { text: 'SQL CREATE TABLE Statement - Tutorialspoint', url: 'https://www.tutorialspoint.com/sql/sql-create-table.htm' },
                { text: 'SQL ALTER TABLE Statement - W3Schools', url: 'https://www.w3schools.com/sql/sql_alter.asp' },
                { text: 'SQL Constraints - SQLShack', url: 'https://www.sqlshack.com/sql-server-constraints/' }
            ]
        },
        {
            title: 'Data Control',
            description: 'Understand SQL commands for managing access to data. Learn about user privileges, roles, and permissions to control who can view, modify, or delete data in a database.',
            resources: [
                { text: 'SQL GRANT and REVOKE Commands - Tutorialspoint', url: 'https://www.tutorialspoint.com/sql/sql-grant-revoke.htm' },
                { text: 'Managing Users and Roles - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/dbseg/managing-users.html' },
                { text: 'Database Security Best Practices - SQLServerCentral', url: 'https://www.sqlservercentral.com/articles/database-security-best-practices' }
            ]
        },
        {
            title: 'Transactions and Concurrency Control',
            description: 'Learn about transactions and concurrency control mechanisms in SQL databases. Understand transaction isolation levels, locking strategies, and techniques for ensuring data consistency.',
            resources: [
                { text: 'SQL Transactions - Tutorialspoint', url: 'https://www.tutorialspoint.com/sql/sql-transactions.htm' },
                { text: 'Concurrency Control in SQL Databases - DatabaseJournal', url: 'https://www.databasejournal.com/features/mssql/concurrency-control-in-sql-server.html' },
                { text: 'Understanding SQL Server Locking - Redgate', url: 'https://www.red-gate.com/simple-talk/sql/sql-development/understanding-sql-server-locking/' }
            ]
        },
        {
            title: 'Indexes and Query Optimization',
            description: 'Explore techniques for optimizing SQL queries and improving database performance. Learn about indexes, query execution plans, and strategies for optimizing data retrieval.',
            resources: [
                { text: 'SQL Indexes - W3Schools', url: 'https://www.w3schools.com/sql/sql_indexes.asp' },
                { text: 'Understanding Execution Plans - Simple Talk', url: 'https://www.red-gate.com/simple-talk/sql/performance/execution-plan-basics/' },
                { text: 'SQL Performance Tuning - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/tgsql/sql_processing.html' }
            ]
        },
        {
            title: 'Views, Stored Procedures, and Functions',
            description: 'Learn how to create and use views, stored procedures, and functions in SQL databases. Understand their advantages, usage scenarios, and best practices for implementation.',
            resources: [
                { text: 'SQL Views - Tutorialspoint', url: 'https://www.tutorialspoint.com/sql/sql-views.htm' },
                { text: 'SQL Stored Procedures - W3Schools', url: 'https://www.w3schools.com/sql/sql_stored_procedures.asp' },
                { text: 'SQL Functions - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/dwhsg/sql-language-functions.html' }
            ]
        },
        {
            title: 'Database Administration',
            description: 'Gain expertise in database administration tasks such as backup and recovery, performance monitoring, and security management. Learn how to maintain database health and ensure data integrity.',
            resources: [
                { text: 'Database Backup and Recovery - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/backup.1.html' },
                { text: 'SQL Server Performance Monitoring - MSSQLTips', url: 'https://www.mssqltips.com/sql-server-tip-category/2/performance-monitoring/' },
                { text: 'Database Security Best Practices - SQLServerCentral', url: 'https://www.sqlservercentral.com/articles/database-security-best-practices' }
            ]
        },
        {
            title: 'Advanced SQL Topics',
            description: 'Explore advanced topics in SQL such as window functions, common table expressions (CTEs), and recursive queries. Dive deeper into the capabilities of SQL databases.',
            resources: [
                { text: 'SQL Window Functions - Mode Analytics', url: 'https://mode.com/sql-tutorial/sql-window-functions/' },
                { text: 'Common Table Expressions - SQLServerCentral', url: 'https://www.sqlservercentral.com/articles/introduction-to-common-table-expressions-ctes' },
                { text: 'Recursive Queries - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/sqlrf/Query-Execution.html#GUID-B14E169A-E71A-40F2-8372-74AD5D0AC543__APPENDIXD' }
            ]
        },
        {
            title: 'NoSQL Databases',
            description: 'Explore non-relational databases such as MongoDB, Cassandra, and Redis. Understand their differences from traditional SQL databases and learn how to use them for various use cases.',
            resources: [
                { text: 'MongoDB Official Documentation', url: 'https://docs.mongodb.com/' },
                { text: 'Cassandra Official Documentation', url: 'https://cassandra.apache.org/doc/latest/' },
                { text: 'Redis Official Documentation', url: 'https://redis.io/documentation' }
            ]
        },
        {
            title: 'Data Warehousing',
            description: 'Learn about data warehousing concepts and technologies such as star schema, snowflake schema, and Extract, Transform, Load (ETL) processes. Understand how to design and implement data warehouses.',
            resources: [
                { text: 'Data Warehousing Concepts - Oracle Documentation', url: 'https://docs.oracle.com/en/database/oracle/oracle-database/19/dwhsg/data-warehousing-concepts.html' },
                { text: 'Star Schema vs. Snowflake Schema - Vertabelo', url: 'https://vertabelo.com/blog/star-schema-vs-snowflake-schema/' },
                { text: 'ETL Process Overview - Talend', url: 'https://www.talend.com/resources/what-is-etl-process/' }
            ]
        },
        {
            title: 'Big Data Technologies',
            description: 'Explore big data technologies such as Hadoop, Spark, and Hive. Learn how to process and analyze large datasets using distributed computing frameworks.',
            resources: [
                { text: 'Hadoop Official Documentation', url: 'https://hadoop.apache.org/docs/' },
                { text: 'Apache Spark Official Documentation', url: 'https://spark.apache.org/docs/latest/' },
                { text: 'Apache Hive Official Documentation', url: 'https://hive.apache.org/' }
            ]
        }       // Add more content items as needed
    ];

    return (
    <div>
        <div className="frontend-container">
            <div className="frontend-section">
                <div className="frontend-header" onClick={toggleFrontendContent}>
                    SQL
                </div>
                {showFrontendContent && (
                    <div className="frontend-content">
                        <p>SQL (Structured Query Language) is a specialized language used for managing and manipulating relational databases. It allows developers to perform various operations such as querying data, inserting new records, updating existing data, and deleting records. SQL operates through a set of commands like SELECT, INSERT, UPDATE, DELETE, and others, which are used to interact with databases. It is essential for storing, retrieving, and managing data in relational database management systems (RDBMS) like MySQL, PostgreSQL, SQLite, Oracle, and Microsoft SQL Server. SQL is a fundamental skill for database administrators, data analysts, and software developers working with databases, making it a crucial component of data-centric applications.</p>
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
