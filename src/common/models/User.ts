import { UserLanguage } from './UserLanguage';

// export interface User {
//   _id: string;
//   email: string;
//   firstName: string;
//   lastName: string;
//   picture: string;
//   role: string;
//   skype: string;
//   languages: UserLanguage[];
//   summaryOfQualifications: string;
// }

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
