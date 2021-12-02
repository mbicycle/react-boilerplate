import { memo } from 'react';
import { Link } from 'react-router-dom';

import { AppBar, Toolbar } from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { LogoIconStyled } from './styled';

const ApplicationBar = function (): JSX.Element {
  return (
    <AppBar color="primary">
      <Toolbar>
        <Link to={ROUTE.DEFAULT}>
          <LogoIconStyled fontSize="large" />
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default memo(ApplicationBar);
