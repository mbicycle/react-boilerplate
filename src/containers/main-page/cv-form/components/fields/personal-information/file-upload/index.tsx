import { memo } from 'react';

import { Typography } from '@mui/material';

import { Text } from '../constants';
import Thumbs from './Thumbs';
import { useFileUpload } from './utils/hooks';

import {
  MyPhotoUploadStyled, PersonIconStyled,
  ThumbContainerStyled,
  UploadOneStyled,
} from './utils/styled';

const FileUpload = function (): JSX.Element {
  const {
    files,
    getRootProps,
    getInputProps,
    onResetFilesHandle,
  } = useFileUpload();

  return (
    <MyPhotoUploadStyled
      {...getRootProps({ className: 'dropzone' })}
      container
      justifyContent="center"
      alignItems="center"
    >
      <input {...getInputProps()} />
      <PersonIconStyled />
      <Typography color="text.disabled" variant="h5">
        {Text.FileUpload}
      </Typography>
      &nbsp;
      <UploadOneStyled color="primary" variant="h5">
        {Text.UploadOne}
      </UploadOneStyled>
      <ThumbContainerStyled>
        <Thumbs files={files} onDropFiles={onResetFilesHandle} />
      </ThumbContainerStyled>
    </MyPhotoUploadStyled>
  );
};

export default memo(FileUpload);
