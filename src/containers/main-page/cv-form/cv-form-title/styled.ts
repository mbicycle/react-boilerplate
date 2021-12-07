import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

export const FieldTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightBold,
}));

export const FieldSubTitleStyled = styled(Typography)(({ theme }) => ({
  fontWeight: theme.typography.fontWeightRegular,
  color: theme.palette.text.secondary,
  padding: theme.spacing(2, 0, 6, 0),
}));

export const FieldFormTitleWrapper = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(10.5),
}));
