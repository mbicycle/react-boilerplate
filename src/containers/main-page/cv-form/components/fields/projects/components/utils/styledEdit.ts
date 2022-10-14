import InfoIcon from '@mui/icons-material/Info';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import {
  Box, styled, Typography, Button,
} from '@mui/material';

export const ProjectTitleStyled = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const InfoIconStyled = styled(InfoIcon)(({ theme }) => ({
  cursor: 'default',
  paddingTop: theme.spacing(1),
}));

export const InputContainerStyled = styled(Box)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: theme.spacing(4),
  paddingTop: theme.spacing(4, 4, 0, 4),
}));

export const AddCircleIconStyled = styled(AddCircleIcon)(({ theme }) => ({
  marginRight: theme.spacing(1),
}));

export const AddProjectButtonStyled = styled(Button)(({ theme }) => ({
  width: 220,
  height: 48,
  padding: theme.spacing(0, 4),
  backgroundColor: theme.palette.grey[300],
}));
