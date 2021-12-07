import { MemoExoticComponent } from 'react';

import Skills from '../cv-form-fields/skills';
import PersonalInformation from '../cv-form-fields/personal-information';
import Languages from '../cv-form-fields/languages';
import Projects from '../cv-form-fields/projects';
import Certifications from '../cv-form-fields/certifications';

export const FORM_MAP: {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    [key: number]: MemoExoticComponent<unknown>
} = {
  0: PersonalInformation,
  1: Languages,
  2: Skills,
  3: Projects,
  4: Certifications,
};
