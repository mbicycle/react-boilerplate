export const CV_FORM_STEPS = ['PERSONAL INFORMATION',
  'LANGUAGES',
  'SKILLS',
  'PROJECTS',
  'CERTIFICATIONS'] as const;

export enum Step {
  Back = 'Back',
  Next = 'Next',
  Finish = 'Finish'
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
    title: 'Add a skill',
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
