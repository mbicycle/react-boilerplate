import { memo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useMsal } from '@azure/msal-react';

import { Button, Typography } from '@mui/material';

import {
  useCreateDbUser,
} from 'containers/main-page/cv-form/components/fields/personal-information/lib/query-hooks';
import { Text } from 'containers/authentication/utils/constants';
import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import MicrosoftIcon from 'common/icons/MicrosoftIcon';
import { AuthError } from '@azure/msal-browser';
import { loginRequest } from 'authConfig';

import { msalInstance } from 'common/interceptors/ms-graph-interceptor';
import { storage } from '../utils/storage';

import { MsLoginContainerStyled } from './styled';

const MicrosoftLoginComponent = function (): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  const { mutateAsync } = useCreateDbUser();

  const from = location.state?.from?.pathname || '/';

  const { logger } = useMsal();

  const handleLogin = async (): Promise<void> => {
    try {
      const userData = await msalInstance.loginPopup(loginRequest);

      if (userData.account?.name) {
        const [givenName, surname] = userData.account.name.split(' ');

        mutateAsync({
          email: userData.account?.username,
          firstName: givenName,
          lastName: surname,
        });
      }

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
    <MsLoginContainerStyled>
      <Button variant="contained" onClick={handleLogin}>
        <MicrosoftIcon />
        <Typography
          sx={{ textTransform: 'initial', pl: 2 }}
          variant="body2"
        >
          {Text.ButtonLogin}
        </Typography>
      </Button>
    </MsLoginContainerStyled>
  );
};

export default memo(MicrosoftLoginComponent);
