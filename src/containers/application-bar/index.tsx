import { memo } from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar, Box, Divider, IconButton,
} from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { useAuth } from 'containers/authentication/auth';
import { useUserPhoto } from 'common/services/user-service/hooks/useUserPhoto';

import PdfButtonSet from './ButtonSet';

import {
  ButtonsWrapperStyled,
  LogoIconStyled, ToolbarStyled,
} from './styled';

const ApplicationBar = function (): JSX.Element {
  const { user } = useAuth();
  const { photo } = useUserPhoto();

  return (
    <Box height="8rem" bgcolor="primary.main">
      <ToolbarStyled>
        <Link to={`dashboard/${ROUTE.DASHBOARD.PERSONAL_INFORMATION}`}>
          <LogoIconStyled fontSize="large" />
        </Link>
        {user && (
          <ButtonsWrapperStyled
            container
            direction="row"
            wrap="nowrap"
            justifyContent="space-between"
          >
            <PdfButtonSet />
            <Divider
              flexItem
              orientation="vertical"
              variant="middle"
            />
            <IconButton>
              <Avatar alt={user.mail} src={photo} />
            </IconButton>
          </ButtonsWrapperStyled>
        )}
      </ToolbarStyled>
    </Box>
  );
};

export default memo(ApplicationBar);
