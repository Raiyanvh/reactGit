import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="about">
      <section className="about-hero">
        <h1>About TeamGit</h1>
        <p>Empowering teams to collaborate and build amazing software</p>
      </section>

      <section className="about-content">
        <div className="about-section">
          <h2>Our Mission</h2>
          <p>
            TeamGit is dedicated to providing the best platform for developers to collaborate,
            manage their code, and build projects together. We believe in making version control
            and team collaboration simple, intuitive, and accessible to everyone.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose TeamGit?</h2>
          <ul>
            <li>Powerful version control with Git integration</li>
            <li>Seamless team collaboration and communication</li>
            <li>Advanced code review and quality assurance tools</li>
            <li>Secure and reliable infrastructure</li>
            <li>24/7 dedicated support</li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Story</h2>
          <p>
            Founded in 2020, TeamGit has grown to serve thousands of development teams worldwide.
            We're passionate about improving the development workflow and helping teams ship better
            software faster. Our team of experienced developers and designers work tirelessly to
            deliver innovative features and maintain the highest standards of service.
          </p>
        </div>
      </section>
    </div>
  );
};

export default About;
