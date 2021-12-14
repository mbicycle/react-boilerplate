import { Box, styled } from '@mui/material';

export const ButtonContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  height: 220,
  border: `1px solid ${theme.palette.border}`,
  borderRadius: theme.shape.borderRadius,
  alignItems: 'center',
  justifyContent: 'center',
}));
