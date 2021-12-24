import { ComponentType, lazy, LazyExoticComponent } from 'react';

const Languages = lazy(() => import('../components/fields/languages/components'));
const Skills = lazy(() => import('../components/fields/skills'));
const Projects = lazy(() => import('../components/fields/projects'));
const PersonalInformation = lazy(() => import('../components/fields/personal-information'));
const Certifications = lazy(() => import('../components/fields/certifications'));

export const FORM_MAP: {
  [key: number]: LazyExoticComponent<ComponentType<unknown>>;
} = {
  0: PersonalInformation,
  1: Languages,
  2: Skills,
  3: Projects,
  4: Certifications,
};
