import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

export const MainPageContainerStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(10, 15),
  [theme.breakpoints.down('xl')]: {
    overflow: 'auto',
  },
}));

export const FormWrapperStyled = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    paddingRight: theme.spacing(15),
  },
}));

export const PreviewWrapperStyled = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(15, 32),
  [theme.breakpoints.up('md')]: {
    overflow: 'auto',
    height: `calc(90vh - ${theme.spacing(20)})`,
  },
}));
