import { TokenType } from './types';

export const storage = {
  getToken: (): string | undefined => {
    const token = window.localStorage.getItem('__access-token__');
    if (token) return token;
    return undefined;
  },
  getExpiresAt: (): number | undefined => {
    const ms = window.localStorage.getItem('__expires-at__');
    if (ms) return +ms;
    return undefined;
  },
  setToken: (tokenObj: TokenType): void => {
    window.localStorage.setItem('__access-token__', tokenObj.accessToken);
    window.localStorage.setItem('__refresh-token__', tokenObj.refreshToken);
    window.localStorage.setItem('__created-at__', tokenObj.accessTokenStartDate.toString());
    window.localStorage.setItem('__expires-in__', tokenObj.accessTokenExpires.toString());
  },
  setExpiresAt: (ms: number): void => window.localStorage.setItem('__expires-at__', ms?.toString()),
  clearToken: (): void => window.localStorage.removeItem('__access-token__'),
};
