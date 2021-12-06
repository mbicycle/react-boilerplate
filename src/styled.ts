import { Container } from '@mui/material';
import { styled } from '@mui/material/styles';

export const ContainerStyled = styled(Container)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  width: '100vw',
  height: '93.5vh',
  paddingTop: theme.spacing(5),
}));
