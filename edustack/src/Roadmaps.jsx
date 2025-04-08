import React from 'react';
import './STYLES/Roadmaps.css';

const RoadmapsPage = () => {
  return (
    <div className="roadmaps-container">
      <section className="roadmaps-section">
        <div className="roadmap-wrapper">
          <div className='roadmap-heading'><p>Role-based Roadmaps</p></div>
          <div className="roadmap">
            <div className="roadmap-grid-wrapper">
              <div className="roadmap-grid">
                <a href="/frontend" rel="noopener noreferrer"><span>Frontend</span></a>
                <a href="/backend" rel="noopener noreferrer"><span>Backend</span></a>
                <a href="/fullstack" rel="noopener noreferrer"><span>Full-Stack</span></a>
                <a href="/devops" rel="noopener noreferrer"><span>DevOps</span></a>
                <a href="/data-analyst" rel="noopener noreferrer"><span>Data Analyst</span></a>
                <a href="/ai-data-scientist" rel="noopener noreferrer"><span>AI and Data Scientist</span></a>
                <a href="/security-engineer" rel="noopener noreferrer"><span>Security Engineer</span></a>
                <a href="/mobile-developer" rel="noopener noreferrer"><span>Mobile Developer</span></a>
                <a href="/game-developer" rel="noopener noreferrer"><span>Game Developer</span></a>
                <a href="/cloud-engineer" rel="noopener noreferrer"><span>Cloud Engineer</span></a>
                <a href="/Softwarearchitect" rel="noopener noreferrer"><span>Software Architect</span></a>
                <a href="/Cybersecurity" rel="noopener noreferrer"><span>Cyber Security</span></a>
              </div>
            </div>
          </div>
        </div>

        <div className="roadmap-wrapper">
          <div className='roadmap-heading'><p>Skill-based Roadmaps</p></div>
          <div className="roadmap">
            <div className="roadmap-grid-wrapper">
              <div className="roadmap-grid">
                <a href="/computer-science" rel="noopener noreferrer"><span>Computer Science</span></a>
                <a href="/react" rel="noopener noreferrer"><span>React</span></a>
                <a href="/java" rel="noopener noreferrer"><span>Java</span></a>
                <a href="/node-js" rel="noopener noreferrer"><span>Node.js</span></a>
                <a href="/javascript" rel="noopener noreferrer"><span>JavaScript</span></a>
                <a href="/python" rel="noopener noreferrer"><span>Python</span></a>
                <a href="/html-css" rel="noopener noreferrer"><span>HTML/CSS</span></a>
                <a href="/sql" rel="noopener noreferrer"><span>SQL</span></a>
                <a href="/MongoDB" rel="noopener noreferrer"><span>MongoDB</span></a>
                <a href="/aws" rel="noopener noreferrer"><span>AWS</span></a>
                <a href="/sysdesign" rel="noopener noreferrer"><span>System Design</span></a>
                <a href="/C++" rel="noopener noreferrer"><span>C++</span></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="explore">
        <section className="academic-roadmaps-section">
          <div className="academic-roadmap-wrapper">
            <div className='academic-roadmap-heading'><p>Academic Roadmaps</p></div>
            <div className="academic-roadmap">
              <div className="academic-roadmap-grid-wrapper">
                <div className="academic-roadmap-grid">
                  <a href="/first-year" rel="noopener noreferrer"><span>First Year</span></a>
                  <a href="/second-year" rel="noopener noreferrer"><span>Second Year</span></a>
                  <a href="/third-year" rel="noopener noreferrer"><span>Third Year</span></a>
                  <a href="/fourth-year" rel="noopener noreferrer"><span>Fourth Year</span></a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

export default RoadmapsPage;
