export const ROUTE = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  ADD: 'add',
  EDIT: 'edit',
  DASHBOARD: {
    DEFAULT: 'dashboard',
    PERSONAL_INFORMATION: 'personal-information',
    LANGUAGES: {
      MAIN: 'languages',
    },
    SKILLS: 'skills',
    PROJECTS: 'projects',
    CERTIFICATES: 'certificates',
  },
  NOT_FOUND: '/404',
} as const;
