import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from 'common/theme';
import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import App from './App';
import GlobalStyle from './common/theme/css/globalStyle';
import reportWebVitals from './reportWebVitals';

const RootComponent = function (): JSX.Element {
  return (
    <React.StrictMode>
      <ReactQueryProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ReactQueryProvider>
    </React.StrictMode>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<RootComponent />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
