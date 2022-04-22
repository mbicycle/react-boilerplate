import { Level } from 'containers/main-page/cv-form/components/fields/languages/components/utils/level.enum';

export interface UserLanguage {
  level: string;
  name: string;
}

export interface Tool {
  id: string;
  name: string;
  experience: number;
  level: `${Level}`;
}

export interface Skill {
  name: string;
  tools: Tool[];
}

export interface Project {
  title: string;
  role: string;
  from: string;
  to: string;
  link: string;
  description: string;
  responsibilities: string;
  skills: Skill[];
}

export interface Certificate {
  name: string;
  link: string;
}

export interface DbUser {
  email: string;
  firstName: string;
  lastName: string;
  summary: string;
  languages: UserLanguage[];
  technology: string;
  skype: string;
  skills: Skill[];
  projects: Project[];
  certificates: Certificate[];
}

export interface MsUser {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  businessPhones: any[];
  displayName: string;
  givenName: string;
  jobTitle: string;
  mail: string;
  mobilePhone: string;
  officeLocation: string;
  preferredLanguage: string;
  surname: string;
  userPrincipalName: string;
  id: string;
}
