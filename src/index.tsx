import React from 'react';
import ReactDOM from 'react-dom';

import { CssBaseline, ThemeProvider } from '@mui/material';

import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import theme from 'common/theme';
import AppSnackbarProvider from 'common/providers/AppSnackbar/AppSnackbarProvider';
import App from './App';
import GlobalStyle from './common/globalStyle';

import reportWebVitals from './reportWebVitals';

const RootComponent = function (): JSX.Element {
  return (
    <AppSnackbarProvider>
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <ReactQueryProvider>
            <CssBaseline />
            <GlobalStyle />
            <App />
          </ReactQueryProvider>
        </ThemeProvider>
      </React.StrictMode>
    </AppSnackbarProvider>
  );
};

const rootElement = document.getElementById('root');

ReactDOM.render(<RootComponent />, rootElement);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
