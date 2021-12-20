import {
  Box, FormControl, Grid, styled, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  minHeight: 220,
  border: `1px solid ${theme.palette.border}`,
  borderRadius: theme.shape.borderRadius,
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const GridWrapperStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(6),
}));

export const TitleWrapperStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'left',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.border}`,
  display: 'inline-flex',
  padding: theme.spacing(2.2, 3),
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  width: '100%',
}));

export const MenuItemText = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
}));
