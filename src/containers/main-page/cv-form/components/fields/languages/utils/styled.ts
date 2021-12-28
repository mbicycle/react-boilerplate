import {
  FormControl, Grid, styled, Typography,
} from '@mui/material';

export const GridWrapperStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(6),
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  width: '100%',
}));

export const MenuItemText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));
