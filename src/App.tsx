import { AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';
import dotenv from 'dotenv';

import ApplicationBar from 'containers/application-bar';

import Routing from 'common/components/routes/Routing';
import AppProvider from 'common/providers/AppProvider';
import ReactQueryProvider from 'common/providers/ReactQueryProvider';
import Login from 'containers/authentication/components';
import { AuthProvider } from 'containers/authentication/auth';

dotenv.config();

const App = function (): JSX.Element {
  return (
    <AppProvider>
      <UnauthenticatedTemplate>
        <Login />
      </UnauthenticatedTemplate>
      <AuthenticatedTemplate>
        <ReactQueryProvider>
          <AuthProvider>
            <ApplicationBar />
            <Routing />
          </AuthProvider>
        </ReactQueryProvider>
      </AuthenticatedTemplate>
    </AppProvider>
  );
};

export default App;
