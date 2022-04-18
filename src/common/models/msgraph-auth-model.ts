export interface IdTokenClaims {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  aio: string;
  name: string;
  nonce: string;
  oid: string;
  'preferred_username': string;
  rh: string;
  sub: string;
  tid: string;
  uti: string;
  ver: string;
}

export interface Account {
  homeAccountId: string;
  environment: string;
  tenantId: string;
  username: string;
  localAccountId: string;
  name: string;
  idTokenClaims: IdTokenClaims;
}

export interface IdTokenClaims2 {
  aud: string;
  iss: string;
  iat: number;
  nbf: number;
  exp: number;
  aio: string;
  name: string;
  nonce: string;
  oid: string;
  'preferred_username': string;
  rh: string;
  sub: string;
  tid: string;
  uti: string;
  ver: string;
}

export interface AuthModel {
  authority: string;
  uniqueId: string;
  tenantId: string;
  scopes: string[];
  account: Account;
  idToken: string;
  idTokenClaims: IdTokenClaims2;
  accessToken: string;
  fromCache: boolean;
  expiresOn: Date;
  correlationId: string;
  extExpiresOn: Date;
  familyId: string;
  tokenType: string;
  state: string;
  cloudGraphHostName: string;
  msGraphHost: string;
}
