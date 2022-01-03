import { styled } from '@mui/material/styles';

import { Box } from '@mui/material';

export const CVFormWrapperStyled = styled(Box, {
  label: 'CVFormWrapperDtyled',
})({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const CVFormContainerStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(10),
  flexGrow: 1,
  height: 0,
}));
