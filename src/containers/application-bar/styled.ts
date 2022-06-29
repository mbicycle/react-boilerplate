import {
  Button, Grid, Toolbar,
} from '@mui/material';
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

export const ButtonsWrapperStyled = styled(Grid)({
  width: 'auto',
  alignItems: 'center',
});

export const ButtonStyled = styled(
  Button,
  {
    skipSx: true,
    name: 'ButtonStyledHeader',
  },
)(({ theme }) => ({
  textTransform: 'none',
  margin: theme.spacing(0, 3),
  padding: theme.spacing(2, 6),
}));
