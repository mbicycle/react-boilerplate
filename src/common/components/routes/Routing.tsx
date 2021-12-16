import { memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import { LoginRoute } from 'common/components/routes/LoginRoute';
import { PrivateRoute } from 'common/components/routes/PrivateRoute';
import { useAuth } from 'containers/authentication/auth';

import Login from 'containers/authentication/components';
import { ROUTE } from './utils/constants';
import MainPage from '../../../containers/main-page';
import CircularSpinner from '../circular-spinner/circular-spinner';

const Routing = function (): JSX.Element {
  const { user, isLoggingIn, isRegistering } = useAuth();

  if (!user && (isLoggingIn || isRegistering)) {
    return (
      <CircularSpinner
        size="large"
        color="primary"
      />
    );
  }

  return (
    <Routes>
      <Route path="/" element={<LoginRoute user={user} />} />
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route
        path={ROUTE.DASHBOARD.DEFAULT}
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
