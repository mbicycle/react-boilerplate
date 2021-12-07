import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StepperControlsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: theme.spacing(12, 15),
  borderTop: `1px solid ${theme.palette.secondary.dark}`,
}));

export const CVFormWrapper = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  height: '100%',
});
