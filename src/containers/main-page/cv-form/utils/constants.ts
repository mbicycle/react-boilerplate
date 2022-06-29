import { ROUTE } from 'common/components/routes/utils/constants';

export const enum Step {
  PersonalInformation,
  Languages,
  Skills,
  Projects,
  Certifications
}

export interface CvFormStep {
  readonly text: string;
  readonly route: string;
}

export const CV_FORM_STEPS: CvFormStep[] = [
  {
    text: 'PERSONAL INFORMATION',
    route: ROUTE.DASHBOARD.PERSONAL_INFORMATION,
  },
  {
    text: 'LANGUAGES',
    route: ROUTE.DASHBOARD.LANGUAGES.MAIN,
  },
  {
    text: 'SKILLS',
    route: ROUTE.DASHBOARD.SKILLS,
  },
  {
    text: 'PROJECTS',
    route: ROUTE.DASHBOARD.PROJECTS,
  },
  {
    text: 'CERTIFICATIONS',
    route: ROUTE.DASHBOARD.CERTIFICATES,
  }];

export enum ButtonStep {
  Back = 'Back',
  Next = 'Next',
  Finish = 'Finish',
  Save = 'Save',
  Cancel = 'Cancel'
}

interface CVTitlesInterface {
  [key: number]: { title: string, description: string; };
}

export const CVTitles: CVTitlesInterface = {
  0: {
    title: 'Personal information',
    description: 'Any explanation text',
  },
  1: {
    title: 'Add a language',
    description: 'Any explanation text',
  },
  2: {
    title: 'Add a category',
    description: 'Any explanation text',
  },
  3: {
    title: 'Add a project',
    description: 'Any explanation text',
  },
  4: {
    title: 'Add a certificate',
    description: 'Any explanation text',
  },
} as const;
