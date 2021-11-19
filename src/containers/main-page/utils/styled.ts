import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';

export const PaperStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  overflow: 'auto',
  height: '100%',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
}));

export const PokeDetailsStyled = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
}));
