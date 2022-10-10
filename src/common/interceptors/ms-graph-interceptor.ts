import {
  AccountInfo, AuthenticationResult, EventMessage, EventType, InteractionType, PublicClientApplication,
} from '@azure/msal-browser';
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
  const accounts = msalInstance.getAllAccounts();
  const request = {
    ...loginRequest,
    account: accounts[0],
  };

  if (!activeAccount) {
    if (request.account) {
      msalInstance.setActiveAccount(request.account);
    }
  } else {
    msalInstance.acquireTokenSilent(request).then((response) => {
      storage.clearAll();
      storage.setToken(response.accessToken);
      storage.setIdToken(response.idToken);
    }).catch(() => {
      msalInstance.acquireTokenPopup(request).then((response) => {
        storage.clearAll();
        storage.setToken(response.accessToken);
        storage.setIdToken(response.idToken);
        msalInstance.setActiveAccount(request.account);
      });
    });
  }

  msalInstance.addEventCallback((event: EventMessage) => {
    if (event.eventType === EventType.LOGIN_SUCCESS && event.payload) {
      // Set the active account - this simplifies token acquisition
      const authResult = event.payload as AuthenticationResult;
      msalInstance.setActiveAccount(authResult.account);
    }
  });

  return activeAccount;
};

let id: NodeJS.Timeout | null = null;

const clearTokenUpdateInterval = (): void => {
  if (id) clearInterval(id);
};

const ensureClient = (authProvider: AuthCodeMSALBrowserAuthenticationProvider): Client => {
  const interval = 10000;

  if (!graphClient) {
    graphClient = Client.initWithMiddleware({ authProvider });
  }

  id = setInterval(() => {
    setActiveAccount();
  }, interval);

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
  msalInstance,
  setActiveAccount,
  clearTokenUpdateInterval,
};
