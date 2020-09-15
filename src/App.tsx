import React from 'react';
import { Todos } from './features/todo/Todos';

// @ts-ignore
import styled from 'styled-components';

const Container = styled.div`
  & {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`

function App() {
  return (
    <Container className="App">
      <header className="App-header">
        <Todos />
      </header>
    </Container>
  );
}

export default App;
