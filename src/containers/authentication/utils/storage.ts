import { TokenType } from '../types/TokenType';

export const storage = {
  getAccessToken: (): string | undefined => {
    const token = window.localStorage.getItem('__access-token__');
    if (token) return token;
    return undefined;
  },
  getRefreshToken: (): string | undefined => {
    const token = window.localStorage.getItem('__refresh-token__');
    if (token) return token;
    return undefined;
  },
  getExpiresAt: (): number | undefined => {
    const unix = window.localStorage.getItem('__expires-at__');
    if (unix) return +unix;
    return undefined;
  },
  getCreatedAt: (): number | undefined => {
    const unix = window.localStorage.getItem('__created-at__');
    if (unix) return +unix;
    return undefined;
  },
  setToken: (tokenObj: TokenType): void => {
    window.localStorage.setItem('__access-token__', tokenObj.accessToken);
    window.localStorage.setItem('__refresh-token__', tokenObj.refreshToken);
    window.localStorage.setItem('__created-at__', tokenObj.accessTokenStartDate.toString());
    window.localStorage.setItem('__expires-at__', tokenObj.accessTokenExpires.toString());
  },
  clearToken: (): void => window.localStorage.removeItem('__access-token__'),
};
