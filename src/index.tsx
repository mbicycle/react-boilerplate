import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline } from '@mui/material';

import App from './App';
import GlobalStyle from './common/globalStyle';

import reportWebVitals from './reportWebVitals';

const RootComponent = function (): JSX.Element {
  return (
    <React.StrictMode>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      <GlobalStyle />
      <App />
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<RootComponent />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
