import React from "react";

const JSXBasics = () => {
  return (
    <div className="jsxBasics">
      <div className="container">
      <h1 style={{ fontSize: "90px" }}>JSX Basics</h1>
        <p>
          JSX (JavaScript XML) is a syntax extension for JavaScript that looks similar to HTML. It is used in React to describe the UI structure.
        </p>

        <div className="section">
          <h2>1. Writing JSX</h2>
          <p>JSX allows you to write elements like this:</p>
          <pre>
            <code>
{`const element = <h1>Hello, JSX!</h1>;`}
            </code>
          </pre>
          <p>This syntax is converted into JavaScript using Babel.</p>
        </div>

        <div className="section">
          <h2>2. Embedding Expressions in JSX</h2>
          <p>You can embed JavaScript expressions inside JSX using curly braces <code>{`{}`}</code>:</p>
          <pre>
            <code>
{`const name = "React";
const element = <h1>Welcome to {name}!</h1>;`}
            </code>
          </pre>
        </div>

        <div className="section">
          <h2>3. JSX Must Return a Single Parent Element</h2>
          <p>JSX must be wrapped inside a single parent element:</p>
          <pre>
            <code>
{`function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>This is valid JSX.</p>
    </div>
  );
}`}
            </code>
          </pre>
        </div>

        <div className="section">
          <h2>4. JSX with Functions</h2>
          <p>You can use JSX inside functions:</p>
          <pre>
            <code>
{`function Greeting() {
  return <h1>Hello, React!</h1>;
}`}
            </code>
          </pre>
        </div>

        <div className="section">
          <h2>5. JSX Attributes</h2>
          <p>JSX uses <code>camelCase</code> for attributes instead of standard HTML:</p>
          <pre>
            <code>
{`const element = <button onClick={handleClick}>Click Me</button>;`}
            </code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default JSXBasics;
