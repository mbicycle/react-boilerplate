import { Paper, styled } from '@mui/material';

export const SearchPaperStyled = styled(Paper)(({ theme }) => ({
  position: 'fixed',
  width: '395px',
  marginTop: theme.spacing(-2),
  borderRadius: 0,
  padding: theme.spacing(0, 2),
  zIndex: '1',
}));
