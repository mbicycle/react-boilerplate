import { ComponentType, MemoExoticComponent } from 'react';

import Certifications from '../components/fields/certifications';
import Languages from '../components/fields/languages';
import Skills from '../components/fields/skills';
import Projects from '../components/fields/projects';
import PersonalInformation from '../components/fields/personal-information';

export const FORM_MAP: {
  [key: number]: MemoExoticComponent<ComponentType<unknown>>;
} = {
  0: PersonalInformation,
  1: Languages,
  2: Skills,
  3: Projects,
  4: Certifications,
};
