import { UserLanguage } from './UserLanguage';

export interface Me {
  firstName: string;
  lastName: string;
  skype: string;
  summary: string;
  picture: string;
  summaryOfQualifications: string;
  languages: UserLanguage[];
}
