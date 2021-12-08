import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Avatar, Box } from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { useAuth } from 'authentication/auth';

import { LogoIconStyled, ToolbarStyled } from './styled';

const ApplicationBar = function (): JSX.Element {
  const { user } = useAuth();

  return (
    <Box height="8rem" bgcolor="primary.main">
      <ToolbarStyled>
        <Link to={ROUTE.DEFAULT}>
          <LogoIconStyled fontSize="large" />
        </Link>
        <Avatar alt={user?.email} src={user?.avatarUrl} />
      </ToolbarStyled>
    </Box>
  );
};

export default memo(ApplicationBar);
