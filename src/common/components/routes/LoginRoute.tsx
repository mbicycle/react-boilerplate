import { memo } from 'react';
import { Navigate } from 'react-router-dom';

import Login from 'containers/authentication/components';
import { User } from 'containers/authentication/api';

import { ROUTE } from './utils/constants';

interface MsLoginRouteProps {
  user: User | undefined;
}

export const LoginRoute = memo(({ user }: MsLoginRouteProps) => (
  user
    ? <Navigate to={`dashboard/${ROUTE.DASHBOARD.PERSONAL_INFORMATION}`} />
    : <Login />
));
