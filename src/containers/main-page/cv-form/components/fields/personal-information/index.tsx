import { memo } from 'react';

import { Typography } from '@mui/material';

import { MyPhotoUploadStyled, PersonIconStyled } from './styled';
import { Text } from './constants';

const PersonalInformation = function (): JSX.Element {
  return (
    <MyPhotoUploadStyled
      container
      justifyContent="center"
      alignItems="center"
    >
      <PersonIconStyled />
      <Typography
        color="text.disabled"
        variant="h5"
      >
        {Text.FileUpload}
      </Typography>
      &nbsp;
      <Typography
        color="primary"
        variant="h5"
        sx={{ cursor: 'pointer' }}
      >
        {Text.UploadOne}
      </Typography>
    </MyPhotoUploadStyled>
  );
};

export default memo(PersonalInformation);
