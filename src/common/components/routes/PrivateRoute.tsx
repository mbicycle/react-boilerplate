import { memo } from 'react';
import {
  Navigate, RouteProps, useLocation,
} from 'react-router-dom';

import { useIsAuthenticated } from '@azure/msal-react';
import { ROUTE } from './utils/constants';

interface PrivateRouteProps extends RouteProps {
  children: JSX.Element
}

export const PrivateRoute = memo(({ children }: PrivateRouteProps):JSX.Element => {
  const isAuthenticated = useIsAuthenticated();
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={ROUTE.LOGIN} state={{ from: location }} />;
  }

  return children;
});
