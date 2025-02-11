import React from "react";
import '../styles/SetupInstallation.css';

const SetupInstallation = () => {
  return (
    <div className="setupInstallation">
      <div className="container">
        <h1 className="head">React Setup & Installation</h1>
        <p>
          Before we start coding, let's set up our React development environment.
        </p>

        <div className="section1">
          <h2>1. Install Node.js</h2>
          <p >
            React requires Node.js. Download and install it from 
            <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">
              nodejs.org
            </a>.
          </p>
        </div>

        <div className="section1">
          <h2>2. Create a React App</h2>
          <p>Use the following command to create a new React project:</p>
          <pre>
            <code>npx create-react-app my-app</code>
          </pre>
          <p>For Vite, use:</p>
          <pre>
            <code>npm create vite@latest my-app --template react</code>
          </pre>
        </div>

        <div className="section1">
          <h2>3. Start the Development Server</h2>
          <p>Navigate to your project folder and start the server:</p>
          <pre>
            <code>cd my-app</code>
          </pre>
          <pre>
            <code>npm start  # For Create React App</code>
          </pre>
          <pre>
            <code>npm run dev  # For Vite</code>
          </pre>
        </div>

        <div className="section1">
          <h2>4. Open in Browser</h2>
          <p>Once the server is running, open <code>http://localhost:3000</code> (CRA) or <code>http://localhost:5173</code> (Vite) in your browser.</p>
        </div>
      </div>
    </div>
  );
};

export default SetupInstallation;
