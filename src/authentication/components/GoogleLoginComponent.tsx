import { memo } from 'react';
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login';

import { GoogleLoginResponseType } from 'authentication/types/LoginResult';
import { Text } from 'authentication/utils/constants';
import { Button } from '@mui/material';

import { useAuth } from 'authentication/auth';
import { refreshTokenSetup } from 'authentication/utils/helpers';
import LogoGoogleWhite from 'common/icons/LogoGoogleWhite';

import { GoogleLoginContainerStyled } from './styled';

const clientId = process.env.REACT_APP_CLIENT_ID as string;

const GoogleLoginComponent = function (): JSX.Element {
  const { login } = useAuth();

  const onSuccessHandle = async (result: GoogleLoginResponseType): Promise<void> => {
    refreshTokenSetup(result as GoogleLoginResponse);

    await login(result);
  };

  const onFailureHandle = (result: Record<string, unknown>): void => {
    // TODO: Add Snackbar
  };

  return (
    <GoogleLoginContainerStyled>
      <GoogleLogin
        clientId={clientId}
        onSuccess={onSuccessHandle}
        buttonText={Text.ButtonLogin}
        onFailure={onFailureHandle}
        cookiePolicy={Text.CookiePolicy}
        isSignedIn={false}
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
