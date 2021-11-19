import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerStyled = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '90vh',
  marginBottom: theme.spacing(2),
  paddingBottom: theme.spacing(8),
}));
