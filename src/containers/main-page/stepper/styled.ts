import { styled } from '@mui/material/styles';
import { Box, StepConnector, StepLabel } from '@mui/material';

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

export const StepConnectorStyled = styled(StepConnector)(({ theme }) => ({
  paddingX: theme.spacing(7),
  '& span': {
    borderColor: theme.palette.divider,
  },
}));

export const StepperWrapperStyled = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'row',
  pt: 2,
}));
