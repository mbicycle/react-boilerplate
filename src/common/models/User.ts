import { UserLanguage } from './UserLanguage';

export interface User {
  _id: string;
  email: string;
  firstName: string;
  lastName: string;
  picture: string;
  role: string;
  skype: string;
  languages: UserLanguage[];
  summaryOfQualifications: string;
}
