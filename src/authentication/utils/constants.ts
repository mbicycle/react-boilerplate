export enum Text {
  ButtonLogin = 'Continue with Google',
  ButtonLogout = 'Logout',
  CookiePolicy = 'single_host_origin',
  CardTitle = 'Online CV Generator',
  CardDescription = 'Use your corporate email to login',
}

export enum Endpoint {
  UserInfo = '/userinfo',
  AuthToken = '/authentication/token',
}

export const AUTH_HEADER = 'authorization' as const;
