import React from 'react';
import './home.css';

const Home = () => {
  return (
    <div className="home">
      <section className="hero">
        <h1>Welcome to TeamGit</h1>
        <p>Your ultimate platform for collaborative development</p>
        <button className="cta-button">Get Started</button>
      </section>
      <section className="features">
        <h2>Our Features</h2>
        <div className="feature-grid">
          <div className="feature">
            <h3>Version Control</h3>
            <p>Powerful Git-based version control for your projects</p>
          </div>
          <div className="feature">
            <h3>Team Collaboration</h3>
            <p>Work together seamlessly with your team members</p>
          </div>
          <div className="feature">
            <h3>Code Review</h3>
            <p>Review and improve code quality with pull requests</p>
          </div>
        </div>
      </section>
      <section className="about">
        <h2>About TeamGit</h2>
        <p>TeamGit is a modern platform designed to streamline your development workflow and enhance team productivity.</p>
      </section>
    </div>
  );
};

export default Home;