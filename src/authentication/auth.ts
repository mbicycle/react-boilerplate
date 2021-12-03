import { GoogleLoginResponse } from 'react-google-login';
import { AuthProviderConfig, initReactQueryAuth } from 'react-query-auth';
import {
  getUserProfile,
  loginWithGoogleTokenId,
  User,
} from './api';

import { storage } from './utils/storage';

async function loginFn(data: GoogleLoginResponse): Promise<User> {
  try {
    await loginWithGoogleTokenId(data);
    const user = await getUserProfile();

    return user;
  } catch (error) {
    return Promise.reject(error);
  }
}

async function loadUser(): Promise<User> {
  let user = null;

  try {
    if (storage.getToken()) {
      const data = await getUserProfile();
      user = data;
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
