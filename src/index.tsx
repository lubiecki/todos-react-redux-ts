import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';
// @ts-ignore
import Normalize from 'react-normalize';
// @ts-ignore
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;800&display=swap');
  body, #root {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-family: 'Open Sans', sans-serif;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Normalize />
        <GlobalStyle />
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
