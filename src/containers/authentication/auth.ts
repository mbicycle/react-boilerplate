import { AuthProviderConfig, initReactQueryAuth } from 'react-query-auth';

import account from 'common/interceptors/ms-graph-interceptor';
import { MsUser } from 'common/models/User';
import { storage } from './utils/storage';
import { getUser } from './api';

async function loginFn(): Promise<MsUser> {
  return new Promise<MsUser>((resolve, reject) => {
    getUser()
      .then((response: MsUser) => resolve(response))
      .catch((error) => reject(error));
  });
}

async function logoutFn(): Promise<void> {
  storage.clearToken();
}

async function loadUser(): Promise<MsUser> {
  let user = null;

  try {
    const accessToken = storage.getAccessToken();
    if (!accessToken) {
      account.setActiveAccount();
    }
    user = await getUser();

    return user as MsUser;
  } catch (error) {
    await logoutFn();
    return Promise.reject(error);
  }
}

const authConfig: AuthProviderConfig<MsUser, unknown> = {
  loadUser,
  loginFn,
  registerFn: async (user: MsUser) => user,
  logoutFn,
};

const { AuthProvider, useAuth } = initReactQueryAuth<MsUser>(authConfig);

export { AuthProvider, useAuth };
