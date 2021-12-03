import ApplicationBar from 'containers/application-bar';
import { MainPage } from 'containers/main-page';
import Provider from 'containers/main-page/local-state/Provider';
import { ContainerStyled } from 'styled';

const App = function (): JSX.Element {
  return (
    <Provider>
      <ApplicationBar />
      <ContainerStyled maxWidth={false} disableGutters>
        <MainPage />
      </ContainerStyled>
    </Provider>
  );
};

export default App;
