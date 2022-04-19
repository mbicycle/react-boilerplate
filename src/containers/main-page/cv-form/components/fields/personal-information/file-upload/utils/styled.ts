import { styled, keyframes } from '@mui/material/styles';

import {
  Grid, IconButton, Typography, Box,
} from '@mui/material';

import PersonIcon from 'common/icons/PersonIcon';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';

type UploadProcessType = {
  $isUploading?: boolean;
};

const rotating = keyframes`
  from {
    -webkit-transform: rotate(360deg);
  }
  to{
    -webkit-transform: rotate(0deg);
  }
`;

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

export const ThumbContainerStyled = styled('aside')({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
});

export const ThumbStyled = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  marginRight: theme.spacing(3),
  marginLeft: theme.spacing(6),
  width: 60,
  height: 60,
  padding: theme.spacing(1),
  boxSizing: 'border-box',
}));

export const ImageStyled = styled('img')({
  display: 'block',
  width: 'auto',
  height: '100%',
  borderRadius: '50%',
});

export const ShumbInnerStyled = styled('div')({
  position: 'initial',
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
});

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  marginTop: theme.spacing(-4),
  marginLeft: theme.spacing(9),
}));

export const CloudIconButtonStyled = styled(IconButtonStyled)(({ theme }) => ({
  marginTop: theme.spacing(9),
  marginLeft: theme.spacing(8),
}));

export const UploadOneStyled = styled(Typography)({
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
});

export const ChangeCircleIconWrapper = styled(Box)(({ theme }) => ({
  marginLeft: theme.spacing(6),
}));

export const ChangeCircleIconStyled = styled(ChangeCircleIcon, {
  shouldForwardProp: (prop) => prop !== '$isUploading',
})<UploadProcessType>(({ theme, $isUploading }) => ({
  animation: $isUploading ? `${rotating} 1s infinite ease` : 'unset',
  color: $isUploading ? theme.palette.success.light : 'defaultColor',
}));
