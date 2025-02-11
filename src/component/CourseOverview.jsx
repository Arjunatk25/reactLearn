import React from "react";

import "../styles/CourseOverview.css";

const CourseOverview = () => {
  return (
    <div className="courseOverview">
      <div className="container">
        <h2>React Course Overview</h2>
        <p>
          Welcome to the React Course! In this course, you'll learn everything from setting up your environment to building dynamic applications using React.
        </p>

        <div className="section">
          <h2>What You'll Learn</h2>
          <ul>
            <li>React setup and installation</li>
            <li>Understanding JSX and components</li>
            <li>Managing state and effects</li>
            <li>Handling props and component reusability</li>
            <li>Building interactive UIs</li>
          </ul>
        </div>

        <div className="section">
          <h2>Prerequisites</h2>
          <p>
            Basic knowledge of HTML, CSS, and JavaScript is recommended. Some familiarity with ES6+ features will be helpful.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
