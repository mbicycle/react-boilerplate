import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';
import dotenv from 'dotenv';

import { CssBaseline, ThemeProvider } from '@mui/material';

import ApplicationBar from 'containers/application-bar';

import Routing from 'common/components/routes/Routing';
import AppSnackbarProvider from 'common/providers/AppSnackbar/AppSnackbarProvider';
import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import GlobalStyle from 'common/theme/css/globalStyle';
import { AuthProvider } from 'containers/authentication/auth';
import { msalInstance } from 'common/interceptors/ms-graph-interceptor';
import theme from './common/theme';

dotenv.config();

const App = function (): JSX.Element {
  return (
    <AppSnackbarProvider>
      <React.StrictMode>
        <MsalProvider instance={msalInstance}>
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
        </MsalProvider>
      </React.StrictMode>
    </AppSnackbarProvider>
  );
};

export default App;
