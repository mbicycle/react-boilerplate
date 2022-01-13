import { Box, Button, styled } from '@mui/material';

export const AddLanguageStyled = styled(Box)(({ theme }) => ({
  padding: theme.spacing(0, 2),
}));

export const AddLanguageButtonStyled = styled(Button)({
  height: 48,
});
