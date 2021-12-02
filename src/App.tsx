import React from 'react';
import dotenv from 'dotenv';

import { CssBaseline, ThemeProvider } from '@mui/material';

import ApplicationBar from 'containers/application-bar';

import { Routing } from 'common/components/routes/Routing';
import { BrowserRouter } from 'react-router-dom';

import AppSnackbarProvider from 'common/providers/AppSnackbar/AppSnackbarProvider';
import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import theme from 'common/theme';
import { AuthProvider } from 'authentication/auth';

import { ContainerStyled } from 'styled';
import GlobalStyle from './common/globalStyle';

dotenv.config();

const App = function (): JSX.Element {
  return (
    <AppSnackbarProvider>
      <React.StrictMode>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <ReactQueryProvider>
              <AuthProvider>
                <CssBaseline />
                <GlobalStyle />
                <ContainerStyled>
                  <ApplicationBar />
                  <Routing />
                </ContainerStyled>
              </AuthProvider>
            </ReactQueryProvider>
          </ThemeProvider>
        </BrowserRouter>
      </React.StrictMode>
    </AppSnackbarProvider>

  );
};

export default App;
