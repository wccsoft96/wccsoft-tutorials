import React from "react";
import "./App.css";
import AccessibleButton from "./accessible-component/AccessibleButton";
import AccessibleDropdown from "./accessible-component/AccessibleDropdown";

function App() {
  return (
    <div className="App">
      <h1>Accessible React Components</h1>
      <p>Building inclusive apps for everyone! 🚀</p>

      {/* Accessible Button */}
      <section>
        <h2>Accessible Button</h2>
        <AccessibleButton onClick={() => alert("Button clicked!")}>
          Click Me
        </AccessibleButton>
      </section>

      {/* Keyboard-Navigable Dropdown */}
      <section>
        <h2>Accessible Dropdown</h2>
        <AccessibleDropdown/>
      </section>
    </div>
  );
}

export default App;
