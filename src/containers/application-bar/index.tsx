import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Avatar, Box, Divider, IconButton, Menu, MenuItem,
} from '@mui/material';

import { ROUTE } from 'common/components/routes/utils/constants';

import { useAuth } from 'containers/authentication/auth';
import { useUserPhoto } from 'common/services/user-service/hooks/useUserPhoto';
import { msalInstance } from 'common/interceptors/ms-graph-interceptor';

import PdfButtonSet from './ButtonSet';

import {
  ButtonsWrapperStyled,
  LogoIconStyled, ToolbarStyled,
} from './styled';

const ApplicationBar = function (): JSX.Element {
  const { user } = useAuth();
  const { photo } = useUserPhoto();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (): void => {
    msalInstance.logoutPopup();
    setAnchorEl(null);
  };

  return (
    <Box bgcolor="primary.main">
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
            <IconButton onClick={handleClick}>
              <Avatar alt={user.mail} src={photo} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </ButtonsWrapperStyled>
        )}
      </ToolbarStyled>
    </Box>
  );
};

export default memo(ApplicationBar);
