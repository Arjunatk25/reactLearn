import React from "react";
import '../styles/GetStarted.css';

const GetStarted = () => {
  return (
    <div className="getStarted">
      <div className="container">
        <h1 className="head">Getting Started with React</h1>
        <p className="description">
          Now that we have installed React, let's explore the project structure and understand how a basic React application works.
        </p>

        <div className="section">
          <h2>1. Understanding the Project Structure</h2>
          <p>When you create a React app, the project structure looks like this:</p>
          <pre>
            <code>
{`my-app/
├── node_modules/ 
├── public/
│   ├── index.html
├── src/
│   ├── App.js
│   ├── index.js
├── .gitignore
├── package.json
├── README.md`}
            </code>
          </pre>
          <p>
            - The `src/` folder contains your React components and logic.  
            - The `public/` folder contains static files like `index.html`.  
            - `package.json` contains dependencies and scripts.
          </p>
        </div>

        <div className="section">
          <h2>2. Editing Your First Component</h2>
          <p>Open <code>src/App.js</code> and modify the default content:</p>
          <pre>
            <code>
{`function App() {
  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your first React app.</p>
    </div>
  );
}

export default App;`}
            </code>
          </pre>
          <p>Save the file and check the browser. You should see your updated message!</p>
        </div>

        <div className="section">
          <h2>3. Running Your First React App</h2>
          <p>Start the development server if it's not running:</p>
          <pre>
            <code>npm start  # For Create React App</code>
          </pre>
          <pre>
            <code>npm run dev  # For Vite</code>
          </pre>
          <p>Now open <code>http://localhost:3000</code> or <code>http://localhost:5173</code> in your browser.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
