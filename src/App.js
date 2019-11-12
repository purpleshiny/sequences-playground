import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SequencesViewer from './SequencesViewer';
import examples from './ExampleSequences.json';
import {Container, Header} from "semantic-ui-react";

function App() {
  return (
    <div>
      <Header as="h1" textAlign="center" className="App-header">DNA Sequences</Header> 
      <Container>
        <SequencesViewer items={examples.sequences}></SequencesViewer>
      </Container>
    </div>
  );
}

export default App;
