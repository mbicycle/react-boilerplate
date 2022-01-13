import { TokenType } from '../types/TokenType';

export const storage = {
  getAccessToken: (): string | undefined => {
    const token = localStorage.getItem('__access-token__');
    if (token) return token;
    return undefined;
  },
  getRefreshToken: (): string | undefined => {
    const token = localStorage.getItem('__refresh-token__');
    if (token) return token;
    return undefined;
  },
  getExpiresAt: (): number | undefined => {
    const unix = localStorage.getItem('__expires-at__');
    if (unix) return +unix;
    return undefined;
  },
  getCreatedAt: (): number | undefined => {
    const unix = localStorage.getItem('__created-at__');
    if (unix) return +unix;
    return undefined;
  },
  setToken: (tokenObj: TokenType): void => {
    localStorage.setItem('__access-token__', tokenObj.accessToken);
    localStorage.setItem('__refresh-token__', tokenObj.refreshToken);
    localStorage.setItem('__created-at__', tokenObj.accessTokenStartDate.toString());
    localStorage.setItem('__expires-at__', tokenObj.accessTokenExpires.toString());
  },
  clearToken: (): void => localStorage.removeItem('__access-token__'),
  clearAll: (): void => localStorage.clear(),
};
