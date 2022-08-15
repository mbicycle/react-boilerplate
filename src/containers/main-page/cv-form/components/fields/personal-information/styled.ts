import { styled } from '@mui/material/styles';

import { Grid, IconButton } from '@mui/material';

import PersonIcon from 'common/icons/PersonIcon';

type ExtendedImgType = {
  $width?: number;
};

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

export const ThumbContainerStyled = styled('aside')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: theme.spacing(3),
}));

export const ThumbStyled = styled('div')(({ theme }) => ({
  display: 'inline-flex',
  borderRadius: '50%',
  border: `1px solid ${theme.palette.primary.main}`,
  marginBottom: theme.spacing(3),
  marginRight: theme.spacing(3),
  marginLeft: theme.spacing(6),
  width: 100,
  height: 100,
  padding: theme.spacing(1),
  boxSizing: 'border-box',
}));

export const ImageStyled = styled('img', {
  shouldForwardProp: (prop) => prop !== '$width',
})<ExtendedImgType>(({ $width }) => ({
  display: 'block',
  width: $width || 'auto',
  height: '100%',
  borderRadius: '50%',
  aspectRatio: '1/1',
  objectFit: 'cover',
}));

export const ShumbInnerStyled = styled('div')({
  position: 'initial',
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
});

export const IconButtonStyled = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  marginTop: theme.spacing(-5),
  marginLeft: theme.spacing(20),
}));
