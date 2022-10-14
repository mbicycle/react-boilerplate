/* eslint-disable max-len */
import { lazy, memo } from 'react';
import {
  Navigate, Route, Routes, useLocation,
} from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

import Login from 'containers/authentication/components';
import LanguageSelection from 'containers/main-page/cv-form/components/fields/languages/components/LanguageSelection';
import Category from 'containers/main-page/cv-form/components/fields/skills/components';
import EditProject from 'containers/main-page/cv-form/components/fields/projects/components/tool/EditProject';
import EditCategory from 'containers/main-page/cv-form/components/fields/skills/components/EditTool';
import { PrivateRoute } from 'common/components/routes/PrivateRoute';

import { ROUTE } from './utils/constants';
import MainPage from '../../../containers/main-page';
import CircularSpinner from '../circular-spinner/circular-spinner';
import NotFound from '../not-found';
import CertificateSelection
  from '../../../containers/main-page/cv-form/components/fields/certifications/components/CertificateSelection';

const PersonalInformation = lazy(() => import('containers/main-page/cv-form/components/fields/personal-information'));
const Languages = lazy(() => import('containers/main-page/cv-form/components/fields/languages'));
const Skills = lazy(() => import('containers/main-page/cv-form/components/fields/skills'));
const Projects = lazy(() => import('containers/main-page/cv-form/components/fields/projects'));
const Certifications = lazy(() => import('containers/main-page/cv-form/components/fields/certifications'));
const Project = lazy(() => import('containers/main-page/cv-form/components/fields/projects/components'));

const Routing = function (): JSX.Element {
  const { inProgress } = useMsal();
  const location = useLocation();

  if (location.pathname === '/' || location.pathname === '') {
    return <Navigate to={`dashboard/${ROUTE.DASHBOARD.PERSONAL_INFORMATION}`} />;
  }

  if (inProgress !== 'none') {
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
          <Route path={ROUTE.ADD} element={<LanguageSelection />} />
        </Route>
        <Route path={ROUTE.DASHBOARD.SKILLS} element={<Skills />}>
          <Route path={ROUTE.ADD} element={<Category />} />
          <Route path={ROUTE.EDIT} element={<EditCategory />} />
        </Route>
        <Route path={ROUTE.DASHBOARD.PROJECTS} element={<Projects />}>
          <Route path={ROUTE.ADD} element={<Project />} />
          <Route path={ROUTE.EDIT} element={<EditProject />} />
        </Route>
        <Route path={ROUTE.DASHBOARD.CERTIFICATES} element={<Certifications />}>
          <Route path={ROUTE.ADD} element={<CertificateSelection />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default memo(Routing);
