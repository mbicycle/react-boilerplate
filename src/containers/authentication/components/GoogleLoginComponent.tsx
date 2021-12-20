import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GoogleLogin from 'react-google-login';

import { Button } from '@mui/material';

import { useAuth } from 'containers/authentication/auth';
import { Text } from 'containers/authentication/utils/constants';
import { GoogleLoginResponseType } from 'containers/authentication/types/LoginResult';
import { refreshTokenSetup } from 'containers/authentication/utils/helpers';

import LogoGoogleWhite from 'common/icons/LogoGoogleWhite';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';

import { storage } from '../utils/storage';

import { GoogleLoginContainerStyled } from './styled';

const clientId = process.env.REACT_APP_CLIENT_ID as string;

const GoogleLoginComponent = function (): JSX.Element {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const onSuccessHandle = async (result: GoogleLoginResponseType): Promise<void> => {
    await login(result);
    const accessToken = storage.getAccessToken();

    if (accessToken) {
      await refreshTokenSetup(accessToken);
      navigate(from, { replace: true });
    }
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
