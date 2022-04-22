import { styled } from '@mui/material/styles';

import { Box } from '@mui/material';

export const CVFormWrapperStyled = styled(Box, {
  label: 'CVFormWrapperDtyled',
})({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});

export const CVFormContainerStyled = styled(Box, {
  label: 'CVFormContainerStyled',
})(({ theme }) => ({
  padding: theme.spacing(10),
  flexGrow: 1,
  height: '100%',
  [theme.breakpoints.up('xl')]: {
    height: 0,
  },
}));
