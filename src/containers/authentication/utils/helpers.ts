import { loginWithGoogleTokenId } from 'containers/authentication/api';
import { GoogleLoginResponse } from 'react-google-login';

const convertTo = (unit: 'milliseconds' | 'seconds', timing: number): number => {
  if (unit === 'milliseconds') return timing * 1000;
  return timing * 100;
};
const HOUR_IN_SECS = 3600 as const;
const SEC = 1 as const;
const MINUTE = 60 as const;

export const refreshTokenSetup = async (res: GoogleLoginResponse): Promise<void> => {
  const expiresInMilliseconds = res.tokenObj.expires_in;
  let refreshTiming = convertTo('milliseconds', expiresInMilliseconds || HOUR_IN_SECS - (SEC * 5) * MINUTE);

  const refreshToken = async (): Promise<void> => {
    const newAuthResult = await res.reloadAuthResponse();
    await loginWithGoogleTokenId(res);

    const newExpiresInMilliseconds = newAuthResult.expires_in;
    refreshTiming = convertTo('milliseconds', newExpiresInMilliseconds || HOUR_IN_SECS - (SEC * 5) * MINUTE);
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
