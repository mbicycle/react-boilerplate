import { memo } from 'react';
import { Link } from 'react-router-dom';

import { Box, Toolbar } from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { LogoIconStyled } from './styled';

const ApplicationBar = function (): JSX.Element {
  return (
    <Box height="8rem" bgcolor="primary.main">
      <Toolbar>
        <Link to={ROUTE.DEFAULT}>
          <LogoIconStyled fontSize="large" />
        </Link>
      </Toolbar>
    </Box>
  );
};

export default memo(ApplicationBar);
