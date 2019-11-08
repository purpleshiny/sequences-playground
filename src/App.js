import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import SequenceTable from './SequnceTable';
import examples from './ExampleSequences.json';
import {Container, Header} from "semantic-ui-react";

function App() {
  return (
    <Container>
      <Header>This is my app!</Header>
      <SequenceTable items={examples.sequences}></SequenceTable>
    </Container>
  );
}

export default App;
