import { styled } from '@mui/material/styles';
import { StepConnector, StepLabel } from '@mui/material';

export const StepLabelStyled = styled(StepLabel)(({ theme }) => ({
  '& span .Mui-completed': {
    color: theme.palette.primary.dark,
    fontWeight: 400,
  },
  '& span .Mui-active': {
    color: theme.palette.primary.dark,
    fontWeight: 600,
  },
  '& span.MuiStepLabel-iconContainer': {
    display: 'none',
  },
}));

export const StepConnectorStyled = styled(StepConnector)(() => ({
  padding: '0 2.8rem',
  '& span': {
    borderColor: '#656565',
  },
}));
