import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { CircularProgress } from '@mui/material';

import { LoginRoute } from 'common/components/routes/LoginRoute';
import { PrivateRoute } from 'common/components/routes/PrivateRoute';
import { useAuth } from 'containers/authentication/auth';

import { ROUTE } from './utils/constants';
import MainPage from '../../../containers/main-page';

const Routing = function (): JSX.Element {
  const { user, isLoggingIn, isRegistering } = useAuth();

  if (!user && (isLoggingIn || isRegistering)) return <CircularProgress color="info" />;

  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<LoginRoute user={user} />} />
      <Route
        path={ROUTE.DEFAULT}
        element={(
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        )}
      />

      <Route path="*" element={<div>Not found</div>} />
    </Routes>
  );
};

export default memo(Routing);
