import React from 'react';
import dotenv from 'dotenv';

import { CssBaseline, ThemeProvider } from '@mui/material';

import ApplicationBar from 'containers/application-bar';

import Routing from 'common/components/routes/Routing';
import { BrowserRouter } from 'react-router-dom';

import AppSnackbarProvider from 'common/providers/AppSnackbar/AppSnackbarProvider';
import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import { AuthProvider } from 'containers/authentication/auth';
import GlobalStyle from 'common/theme/css/globalStyle';
import theme from './common/theme';

dotenv.config();

const App = function (): JSX.Element {
  return (
    <AppSnackbarProvider>
      <React.StrictMode>
        <CssBaseline />
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <ReactQueryProvider>
              <AuthProvider>
                <ApplicationBar />
                <Routing />
              </AuthProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    </AppSnackbarProvider>

  );
};

export default App;
