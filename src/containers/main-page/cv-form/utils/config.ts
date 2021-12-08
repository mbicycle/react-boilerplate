import { MemoExoticComponent } from 'react';

import Certifications from '../fields/certifications';
import Languages from '../fields/languages';
import Skills from '../fields/skills';
import Projects from '../fields/projects';
import PersonalInformation from '../fields/personal-information';

export const FORM_MAP: {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  [key: number]: MemoExoticComponent<unknown>;
} = {
  0: PersonalInformation,
  1: Languages,
  2: Skills,
  3: Projects,
  4: Certifications,
};
