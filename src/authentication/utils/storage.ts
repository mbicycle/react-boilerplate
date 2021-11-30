export const storage = {
  getToken: (): string | undefined => {
    const token = window.localStorage.getItem('__access-token__');
    if (token) return token;
    return undefined;
  },
  setToken: (token: string): void => window.localStorage.setItem('__access-token__', token),
  clearToken: (): void => window.localStorage.removeItem('__access-token__'),
};
