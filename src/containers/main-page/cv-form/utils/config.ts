import Certifications from 'containers/main-page/cv-form/cv-form-fields/certifications';
import Languages from 'containers/main-page/cv-form/cv-form-fields/languages';
import Projects from 'containers/main-page/cv-form/cv-form-fields/projects';
import Skills from 'containers/main-page/cv-form/cv-form-fields/skills';
import { MemoExoticComponent } from 'react';
import PersonalInformation from '../cv-form-fields/personal-information';

export const CV_FORM_STEPS = ['PERSONAL INFORMATION',
  'LANGUAGES',
  'SKILLS',
  'PROJECTS',
  'CERTIFICATIONS'];

export enum Step {
    Next = 'Next',
    Finish = 'Finish'
}

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
