import {
  Step, StepConnector, styled, stepConnectorClasses,
} from '@mui/material';

export const StepStyled = styled(Step)({
  padding: 0,
});

export const StepConnectorStyled = styled(StepConnector, {
  name: 'StepConnectorStyled',
})(({ theme }) => ({
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.palette.primary.light,
    },
  },
}));
