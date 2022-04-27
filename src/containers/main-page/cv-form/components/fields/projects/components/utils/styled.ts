import { Button, styled, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

export const CategoriesTitleStyled = styled(Typography)(({ theme }) => ({
  paddingBottom: theme.spacing(2),
  paddingRight: theme.spacing(1),
  marginBottom: theme.spacing(2),
}));

export const InfoIconStyled = styled(InfoIcon)(({ theme }) => ({
  cursor: 'default',
  paddingTop: theme.spacing(1),
}));

export const SkillsToolsButtonStyled = styled(Button)(({ theme }) => ({
  marginLeft: theme.spacing(4),
}));
