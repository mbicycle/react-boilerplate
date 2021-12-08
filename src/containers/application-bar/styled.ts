import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';

import LogoIcon from 'common/icons/LogoIcon';

export const ToolbarStyled = styled(Toolbar)({
  justifyContent: 'space-between',
});

export const LogoIconStyled = styled(LogoIcon)(({ theme }) => ({
  width: '6em',
  height: '100%',
  margin: theme.spacing(3.5, 0),
}));
