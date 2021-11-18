import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerStyled = styled(Container)(({ theme }) => ({
  width: '100vw',
  height: '100vh',
  marginTop: theme.spacing(8),
}));
