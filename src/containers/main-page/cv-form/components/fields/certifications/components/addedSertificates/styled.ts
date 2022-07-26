import {
  Box, FormControl, Grid, styled,
} from '@mui/material';

export const AddedCertificateItemStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(4, 3),
  marginBottom: theme.spacing(4),
  borderRadius: theme.shape.borderRadius,
  border: `1px solid ${theme.palette.border}`,
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  flexDirection: 'column',
}));

export const GridWrapperStyled = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(6),
}));

export const FormControlStyled = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(1),
  width: '100%',
}));

export const FormControlStyledP4 = styled(FormControl)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  width: '100%',
}));

export const SaveButtonWrapperStyled = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(4),
  width: '100%',
  display: 'inline-flex',
  justifyContent: 'flex-end',
}));
