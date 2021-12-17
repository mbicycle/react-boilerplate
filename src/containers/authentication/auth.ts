import { GoogleLoginResponse } from 'react-google-login';
import { AuthProviderConfig, initReactQueryAuth } from 'react-query-auth';
import jwtDecode from 'jwt-decode';
import {
  loginWithGoogleTokenId,
  User,
} from './api';

import { storage } from './utils/storage';

async function loginFn(data: GoogleLoginResponse): Promise<User> {
  let user: User | null = null;

  try {
    const tokenObj = await loginWithGoogleTokenId(data);
    storage.setToken(tokenObj);
    if (storage.getToken()) {
      user = jwtDecode(tokenObj.accessToken);
    }

    return user as User;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loadUser(): Promise<User> {
  let user = null;

  try {
    const accessToken = storage.getToken();
    if (accessToken) {
      user = jwtDecode(accessToken);
    }

    return user as User;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function logoutFn(): Promise<void> {
  await storage.clearToken();
}

const authConfig: AuthProviderConfig<User, unknown> = {
  loadUser,
  loginFn,
  registerFn: async (user: User) => user,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth<User>(authConfig);

export { AuthProvider, useAuth };
