/* eslint-disable max-len */
import { lazy, memo } from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from 'containers/authentication/components';
import LanguageSelection from 'containers/main-page/cv-form/components/fields/languages/components/LanguageSelection';
import { PrivateRoute } from 'common/components/routes/PrivateRoute';
import { useAuth } from 'containers/authentication/auth';

import { ROUTE } from './utils/constants';
import MainPage from '../../../containers/main-page';
import CircularSpinner from '../circular-spinner/circular-spinner';
import NotFound from '../not-found';

const PersonalInformation = lazy(() => import('containers/main-page/cv-form/components/fields/personal-information'));
const Languages = lazy(() => import('containers/main-page/cv-form/components/fields/languages'));
const Skills = lazy(() => import('containers/main-page/cv-form/components/fields/skills'));
const Projects = lazy(() => import('containers/main-page/cv-form/components/fields/projects'));
const Certifications = lazy(() => import('containers/main-page/cv-form/components/fields/certifications'));

const Routing = function (): JSX.Element {
  const { user, isLoggingIn, isRegistering } = useAuth();

  if (!user && (isLoggingIn || isRegistering)) {
    return <CircularSpinner size="large" color="primary" />;
  }

  return (
    <Routes>
      <Route path={ROUTE.LOGIN} element={<Login />} />
      <Route
        path={ROUTE.DASHBOARD.DEFAULT}
        element={(
          <PrivateRoute>
            <MainPage />
          </PrivateRoute>
        )}
      >
        <Route path={ROUTE.DASHBOARD.PERSONAL_INFORMATION} element={<PersonalInformation />} />
        <Route path={ROUTE.DASHBOARD.LANGUAGES.MAIN} element={<Languages />}>
          <Route path={ROUTE.DASHBOARD.LANGUAGES.ADD} element={<LanguageSelection />} />
        </Route>
        <Route path={ROUTE.DASHBOARD.SKILLS} element={<Skills />} />
        <Route path={ROUTE.DASHBOARD.PROJECTS} element={<Projects />} />
        <Route path={ROUTE.DASHBOARD.CERTIFICATES} element={<Certifications />} />

      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default memo(Routing);
