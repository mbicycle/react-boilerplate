import { memo } from 'react';
import { Navigate } from 'react-router-dom';

import Login from 'authentication/components';
import { User } from 'authentication/api';
import { ROUTE } from './utils/constants';

interface MsLoginRouteProps {
  user: User | undefined;
}

export const LoginRoute = memo(({ user }: MsLoginRouteProps) => (
  user
    ? <Navigate to={ROUTE.DEFAULT} />
    : <Login />
));
