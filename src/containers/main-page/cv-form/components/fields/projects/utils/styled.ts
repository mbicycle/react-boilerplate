import {
  Button, Divider,
  Grid, styled, Typography,
} from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

export const AddResponsibilityButtonStyled = styled(Button)(({ theme }) => ({
  width: 220,
  height: 48,
  padding: theme.spacing(0, 4),
  backgroundColor: theme.palette.grey[300],
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));
