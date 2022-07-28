import { styled } from '@mui/material/styles';

import { Grid, Paper } from '@mui/material';

export const MainPageContainerStyled = styled(Grid)(({ theme }) => ({
  height: '92vh',
  overflowY: 'auto',
  [theme.breakpoints.down('xl')]: {
    overflow: 'auto',
  },
}));

export const FormWrapperStyled = styled(Grid)(() => ({}));

export const PreviewWrapperStyled = styled(Grid, {
  name: 'PreviewWrapperStyled',

})(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(15, 32),
  [theme.breakpoints.up('sm')]: {
    overflow: 'auto',
  },
}));

export const PaperWrapperStyled = styled(Paper, {
  name: 'PaperWrapperStyled',
})(({ theme }) => ({
  maxWidth: '100%',
  padding: theme.spacing(4),
  margin: theme.spacing(4.5, 6, 0),
  borderRadius: theme.shape.borderRadius,
}));
