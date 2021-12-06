import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

export const StepperControlsWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  paddingTop: theme.spacing(12),
  borderTop: '1px solid #DADCE1',
}));

export const CVFormWrapper = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100%',
}));
