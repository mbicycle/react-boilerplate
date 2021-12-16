export const ROUTE = {
  LOGIN: '/login',
  LOGOUT: '/logout',
  DASHBOARD: {
    DEFAULT: 'dashboard/*',
    PERSONAL_INFORMATION: 'personal-information',
    LANGUAGES: 'languages',
    SKILLS: 'skills',
    PROJECTS: 'projects',
    CERTIFICATES: 'certificates',
  },
  NOT_FOUND: '/404',
} as const;
