import { GoogleLoginResponse } from 'react-google-login';
import { storage } from './storage';

export const refreshTokenSetup = async (res: GoogleLoginResponse): Promise<void> => {
  let refreshTiming = (res.tokenObj.expires_in || 3600 - 5 * 60) * 1000;

  const refreshToken = async (): Promise<void> => {
    storage.clearToken();
    const newAuthResult = await res.reloadAuthResponse();

    refreshTiming = (newAuthResult.expires_in || 3600 - 5 * 60) * 1000;
    setTimeout(refreshToken, refreshTiming);
  };

  setTimeout(refreshToken, refreshTiming);
};
