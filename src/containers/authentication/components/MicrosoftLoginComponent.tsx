import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

import { Button, Typography } from '@mui/material';

import { Text } from 'containers/authentication/utils/constants';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import MicrosoftIcon from 'common/icons/MicrosoftIcon';
import { AuthError, IPublicClientApplication } from '@azure/msal-browser';
import { loginRequest } from 'authConfig';

import { storage } from '../utils/storage';

import { GoogleLoginContainerStyled } from './styled';

const MicrosoftLoginComponent = function (): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  const { instance, logger } = useMsal();

  const handleLogin = async (instances: IPublicClientApplication): Promise<void> => {
    try {
      const userData = await instances.loginPopup(loginRequest);
      // TODO: Add create user to db
      storage.setToken(userData.accessToken);
      storage.setIdToken(userData.idToken);

      navigate(from, { replace: true });
    } catch (error) {
      if (error instanceof AuthError) {
        logger.error(error?.message);
        SnackBarUtils.error(error?.message);
      }
    }
  };

  return (
    <GoogleLoginContainerStyled>
      <Button variant="contained" onClick={() => handleLogin(instance)}>
        <MicrosoftIcon />
        <Typography
          sx={{ textTransform: 'initial', pl: 2 }}
          variant="body2"
        >
          {Text.ButtonLogin}
        </Typography>
      </Button>
    </GoogleLoginContainerStyled>
  );
};

export default memo(MicrosoftLoginComponent);
