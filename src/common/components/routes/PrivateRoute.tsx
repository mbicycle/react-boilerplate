import { memo } from 'react';
import {
  Navigate, RouteProps, useLocation,
} from 'react-router-dom';

import { useAuth } from 'containers/authentication/auth';
import { ROUTE } from './utils/constants';

interface PrivateRouteProps extends RouteProps {
  children: JSX.Element
}

export const PrivateRoute = memo(({ children }: PrivateRouteProps):JSX.Element => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to={ROUTE.LOGIN} state={{ from: location }} />;
  }

  return children;
});
