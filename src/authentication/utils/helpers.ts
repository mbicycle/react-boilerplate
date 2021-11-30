import { GoogleLoginResponse } from 'react-google-login';

export const refreshTokenSetup = (res: GoogleLoginResponse): void => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async (): Promise<void> => {
    const newAuthResult = await res.reloadAuthResponse();

    refreshTiming = (newAuthResult.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
