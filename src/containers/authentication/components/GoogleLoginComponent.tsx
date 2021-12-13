import { memo } from 'react';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';

import { Button } from '@mui/material';

import { useAuth } from 'containers/authentication/auth';
import { Text } from 'containers/authentication/utils/constants';
import { GoogleLoginResponseType } from 'containers/authentication/types/LoginResult';
import { refreshTokenSetup } from 'containers/authentication/utils/helpers';
import { storage } from 'containers/authentication/utils/storage';

import LogoGoogleWhite from 'common/icons/LogoGoogleWhite';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';

import { GoogleLoginContainerStyled } from './styled';

const clientId = process.env.REACT_APP_CLIENT_ID as string;

const GoogleLoginComponent = function (): JSX.Element {
  const { login } = useAuth();

  const onSuccessHandle = async (result: GoogleLoginResponseType): Promise<void> => {
    storage.setExpiresAt((result as GoogleLoginResponse).tokenObj.expires_at);

    await refreshTokenSetup(result as GoogleLoginResponse);
    await login(result);
  };

  const onFailureHandle = (result: Record<string, unknown>): void => {
    SnackBarUtils.error(result.error as string);
  };

  return (
    <GoogleLoginContainerStyled>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccessHandle}
        buttonText={Text.ButtonLogin}
        onFailure={onFailureHandle}
        cookiePolicy={Text.CookiePolicy}
        scope="email"
        isSignedIn
        render={(props) => (
          <Button
            onClick={props.onClick}
            disabled={props.disabled}
            variant="contained"
            color="inherit"
          >
            <LogoGoogleWhite fontSize="small" />
            &nbsp;&nbsp;
            {Text.ButtonLogin}

          </Button>
        )}
      />
    </GoogleLoginContainerStyled>
  );
};

export default memo(GoogleLoginComponent);
