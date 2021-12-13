import { styled } from '@mui/material/styles';

import { Grid, IconButton, Typography } from '@mui/material';

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
  width: 50,
  height: 50,
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
  marginLeft: theme.spacing(8),
}));

export const UploadOneStyled = styled(Typography)({
  cursor: 'pointer',

  '&:hover': {
    textDecoration: 'underline',
  },
});
