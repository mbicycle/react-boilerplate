import Certifications from 'containers/main-page/cv-form-fields/certifications';
import Languages from 'containers/main-page/cv-form-fields/languages';
import Projects from 'containers/main-page/cv-form-fields/projects';
import Skills from 'containers/main-page/cv-form-fields/skills';
import PersonalInformation from '../../cv-form-fields/personal-information';

export const CV_FORM_STEPS = ['PERSONAL INFORMATION',
  'LANGUAGES',
  'SKILLS',
  'PROJECTS',
  'CERTIFICATIONS'];

export enum STEP {
    Next = 'Next',
    Finish = 'Finish'
}

export const getFormByStep = (step: number): ({ value, handleChange }: any) => JSX.Element => {
  const cvSteps: { [key: number]: ({ value, handleChange }: any) => JSX.Element } = {
    0: PersonalInformation,
    1: Languages,
    2: Skills,
    3: Projects,
    4: Certifications,
  };
  return cvSteps[step];
};
