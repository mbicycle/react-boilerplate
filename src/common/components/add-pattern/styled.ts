import { Box, Button, styled } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

type IsProfiencySelectedPropType = {
  $isProfiencySelected?: boolean;
};

export const AddProfiencyStyled = styled(Box, {
  name: 'AddProfiencyStyled',
})({
  display: 'flex',
  width: '100%',
  height: 'calc(100% - 123px)',
  alignItems: 'flex-start',
  overflow: 'auto',
});

export const ContainerStyled = styled(Box, {
  shouldForwardProp: (prop) => prop !== '$isProfiencySelected',
  name: 'ContainerStyled',
})<IsProfiencySelectedPropType>(({ theme, $isProfiencySelected }) => ({
  display: 'flex',
  minHeight: 220,
  marginBottom: theme.spacing(2),
  marginTop: theme.spacing(2),
  width: '100%',
  justifyContent: 'center',
  border: $isProfiencySelected ? 'none' : `1px solid ${theme.palette.border}`,
  borderRadius: theme.shape.borderRadius,
  alignItems: 'center',
  flexDirection: 'column',
}));

export const AddButtonStyled = styled(Button, {
  name: 'AddButtonStyled',
  shouldForwardProp: (prop) => prop !== '$isProfiencySelected',
})<IsProfiencySelectedPropType>(({ theme, $isProfiencySelected }) => ({
  padding: theme.spacing(3, 7),
  alignSelf: $isProfiencySelected ? 'flex-end' : 'center',
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const TitleWrapperStyled = styled(Box)(({ theme }) => ({
  width: '100%',
  justifyContent: 'left',
  alignItems: 'center',
  borderBottom: `1px solid ${theme.palette.border}`,
  display: 'inline-flex',
  padding: theme.spacing(2.2, 3),
}));
