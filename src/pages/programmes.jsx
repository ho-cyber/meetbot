// pages/programmes.tsx
import React from 'react';
import './programmes.css';

const Programmes = () => {
  return (
    <div className="container">
      {/* Sidebar */}
      <div className="sidebar">
        <h1>Programmes</h1>
        <div className="sidebar-item">Maths Programmes</div>
        <div className="sidebar-item">Science Programmes</div>
        <div className="sidebar-item">Combined Programmes</div>
      </div>

      {/* Main Content */}
      <div className="content">
        <h1 className="title">Our Programmes</h1>
        <p className="description">
          Explore the intricacies of Maths and Science through our carefully curated programmes designed to enhance your understanding and skills.
        </p>

        <div className="card-grid">
          {/* Maths Programmes Card */}
          <div className="card">
            <h2>Maths Programmes</h2>
            <p>Sharpen your mathematical skills with our focused programs:</p>
            <ul>
              <li>Mathematics for Beginners</li>
              <li>Statistics and Data Analysis</li>
            </ul>
          </div>

          {/* Science Programmes Card */}
          <div className="card">
            <h2>Science Programmes</h2>
            <p>Dive deep into scientific concepts and explorations:</p>
            <ul>
              <li>Advanced Physics Concepts</li>
              <li>Chemistry in Everyday Life</li>
            </ul>
          </div>

          {/* Combined Programmes Card */}
          <div className="card">
            <h2>Combined Programmes</h2>
            <p>Experience interdisciplinary learning for a broader perspective:</p>
            <ul>
              <li>Mathematics and Physics</li>
              <li>Computer Science Fundamentals</li>
            </ul>
          </div>
        </div>

        <p className="footer-text">
          For more information about each programme, please contact us or explore our website further!
        </p>
      </div>
    </div>
  );
};

export default Programmes;
