import { AccountInfo, InteractionType, PublicClientApplication } from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';
import {
  AuthCodeMSALBrowserAuthenticationProvider,
} from '@microsoft/microsoft-graph-client/authProviders/authCodeMsalBrowser';
import { loginRequest, msalConfig } from 'authConfig';
import { storage } from 'containers/authentication/utils/storage';

export const msalInstance = new PublicClientApplication(msalConfig);

let graphClient: Client | undefined;

const setActiveAccount = (): AccountInfo | null => {
  const activeAccount = msalInstance.getActiveAccount();

  if (!activeAccount) {
    const accounts = msalInstance.getAllAccounts();
    const request = {
      ...loginRequest,
      account: accounts[0],
    };

    if (request.account) {
      msalInstance.setActiveAccount(request.account);
    }

    msalInstance.acquireTokenSilent(request).then((response) => {
      storage.setToken(response.accessToken);
    }).catch(() => {
      msalInstance.acquireTokenPopup(request).then((response) => {
        storage.setToken(response.accessToken);
        msalInstance.setActiveAccount(request.account);
      });
    });
  }

  return activeAccount;
};

const ensureClient = (authProvider: AuthCodeMSALBrowserAuthenticationProvider): Client => {
  if (!graphClient) {
    graphClient = Client.initWithMiddleware({ authProvider });
  }

  setActiveAccount();

  return graphClient;
};

const authProvider = new AuthCodeMSALBrowserAuthenticationProvider(
  msalInstance as PublicClientApplication,
  {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    account: msalInstance.getActiveAccount()!,
    scopes: loginRequest.scopes,
    interactionType: InteractionType.Silent,
  },
);

export default {
  authProvider,
  graphClient: ensureClient(authProvider),
};
