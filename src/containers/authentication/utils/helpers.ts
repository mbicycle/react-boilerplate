import { relogin } from 'containers/authentication/api';
import { storage } from './storage';

const ONE_SEC = 1000 as const;

const convertTo = (unit: 'milliseconds' | 'seconds', timing: number): number => {
  if (unit === 'milliseconds') return timing * 1000;

  return timing * 100;
};

export const refreshTokenSetup = async (accessToken: string): Promise<void> => {
  const expiresIn = storage.getExpiresAt();
  const createdAt = storage.getCreatedAt();
  let refreshTimeout = null;

  const end = createdAt as number;
  const start = expiresIn as number;
  const timeoutInSec = start - end;
  const timeout = convertTo('milliseconds', timeoutInSec);

  const refreshToken = async (): Promise<void> => {
    refreshTimeout = setTimeout(refreshToken, timeout - ONE_SEC);

    await relogin();
  };

  refreshTimeout = setTimeout(refreshToken, timeout);

  if (!accessToken) clearTimeout(refreshTimeout);
};
