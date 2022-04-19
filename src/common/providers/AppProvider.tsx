import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { MsalProvider } from '@azure/msal-react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import AppSnackbarProvider from 'common/providers/AppSnackbar/AppSnackbarProvider';
import GlobalStyle from 'common/theme/css/globalStyle';
import { msalInstance } from 'common/interceptors/ms-graph-interceptor';
import theme from 'common/theme';

const AppProvider = function ({ children }: { children: React.ReactNode}): JSX.Element {
  return (
    <AppSnackbarProvider>
      <React.StrictMode>
        <CssBaseline />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <MsalProvider instance={msalInstance}>
              {children}
            </MsalProvider>
          </BrowserRouter>
        </ThemeProvider>
      </React.StrictMode>
    </AppSnackbarProvider>
  );
};

export default AppProvider;
