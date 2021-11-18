import ApplicationBar from 'containers/application-bar';
import { MainPage } from 'containers/main-page';

import { ContainerStyled } from 'styled';

const App = function (): JSX.Element {
  return (
    <ContainerStyled>
      <ApplicationBar />
      <MainPage />
    </ContainerStyled>
  );
};

export default App;
