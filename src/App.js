import React from 'react';
import logo from './logo.svg';
import {Card} from 'semantic-ui-react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card>
          <Card.Content>
            <p> Hello World! </p>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </Card.Content>
        </Card>
      </header>
    </div>
  );
}

export default App;