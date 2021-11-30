import dotenv from 'dotenv';

import ApplicationBar from 'containers/application-bar';
import Provider from 'containers/main-page/local-state/Provider';
import Login from 'authentication/components';

import { ContainerStyled } from 'styled';

dotenv.config();

const App = function (): JSX.Element {
  return (
    <Provider>
      <ContainerStyled>
        <ApplicationBar />
        <Login />
      </ContainerStyled>
    </Provider>
  );
};

export default App;
