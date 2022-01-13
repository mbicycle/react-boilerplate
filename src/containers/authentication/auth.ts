import { GoogleLoginResponse } from 'react-google-login';
import { AuthProviderConfig, initReactQueryAuth } from 'react-query-auth';
import {
  getUser,
  loginWithGoogleTokenId,
  User,
} from './api';

import { storage } from './utils/storage';
import { refreshTokenSetup } from './utils/helpers';

async function loginFn(data: GoogleLoginResponse): Promise<User> {
  let user: User | null = null;

  try {
    const tokenObj = await loginWithGoogleTokenId(data);
    storage.setToken(tokenObj);
    if (storage.getAccessToken()) {
      user = await getUser();
    }

    return user as User;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loadUser(): Promise<User> {
  let user = null;

  try {
    const accessToken = storage.getAccessToken();
    if (accessToken) {
      await refreshTokenSetup(accessToken);
      user = await getUser();
    }

    return user as User;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function logoutFn(): Promise<void> {
  storage.clearToken();
}

const authConfig: AuthProviderConfig<User, unknown> = {
  loadUser,
  loginFn,
  registerFn: async (user: User) => user,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth<User>(authConfig);

export { AuthProvider, useAuth };
