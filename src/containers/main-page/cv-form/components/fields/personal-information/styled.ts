import { styled } from '@mui/material/styles';

import { Grid } from '@mui/material';

import PersonIcon from 'common/icons/PersonIcon';

export const MyPhotoUploadStyled = styled(Grid)(({ theme }) => ({
  border: `2px dashed ${theme.palette.border}`,
  padding: theme.spacing(6.3),
  borderRadius: theme.shape.borderRadius,
}));

export const PersonIconStyled = styled(PersonIcon)(({ theme }) => ({
  color: theme.palette.text.disabled,
  fontSize: 37,
  marginRight: theme.spacing(3),
}));
