export const storage = {
  getAccessToken: (): string | undefined => {
    const token = localStorage.getItem('__access-token__');
    if (token) return token;
    return undefined;
  },
  getIdToken: (): string | undefined => {
    const token = localStorage.getItem('__id-token__');
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
  setToken: (token: string | undefined): void => {
    localStorage.setItem('__access-token__', token as string);
  },
  setIdToken: (token: string | undefined): void => {
    localStorage.setItem('__id-token__', token as string);
  },
  clearToken: (): void => localStorage.removeItem('__access-token__'),
  clearIdToken: (): void => localStorage.removeItem('__id-token__'),
  clearAll: (): void => localStorage.clear(),
};
