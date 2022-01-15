import ApplicationBar from 'containers/application-bar';
import { MainPage } from 'containers/main-page';
import Provider from 'containers/main-page/local-state/Provider';

import { ContainerStyled } from 'styled';
import { ThemeProvider } from '@mui/material';
import theme from './common/theme';

const App = function (): JSX.Element {
  return (
    <Provider>
      <ThemeProvider theme={theme}>
        <ContainerStyled>
          <ApplicationBar />
          <MainPage />
        </ContainerStyled>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
