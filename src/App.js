import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SequencesViewer from './SequencesViewer';
import examples from './ExampleSequences.json';
import {Container, Header} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header>This is my app!</Header>
      <SequencesViewer items={examples.sequences}></SequencesViewer>
    </Container>
  );
}

export default App;
