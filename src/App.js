import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hello World (from <a href="https://adeptask-demo.youtrack.cloud/issue/DEV-20/Change-page-title">DEV-20</a>)
        </a>
      </header>
    </div>
  );
}

export default App;
