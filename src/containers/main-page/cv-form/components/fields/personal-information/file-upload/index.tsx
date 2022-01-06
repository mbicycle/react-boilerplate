import { memo } from 'react';

import { Typography } from '@mui/material';

import { useAuth } from 'containers/authentication/auth';

import Thumbs from './Thumbs';
import { Text } from './utils/types';
import { useFileUpload } from './utils/hooks';

import {
  ChangeCircleIconStyled,
  ChangeCircleIconWrapper, MyPhotoUploadStyled,
  PersonIconStyled, ThumbContainerStyled,
  UploadOneStyled,
} from './utils/styled';
import { ImageStyled } from '../styled';

const FileUpload = function (): JSX.Element {
  const { user } = useAuth();
  const {
    files,
    getRootProps,
    getInputProps,
    onResetFilesHandle,
    onUploadNewAvatar,
    isUploading,
  } = useFileUpload();

  return (
    <MyPhotoUploadStyled
      {...getRootProps({ className: 'dropzone' })}
      container
      justifyContent="center"
      alignItems="center"
    >
      <input {...getInputProps()} />
      {user?.picture ? (
        <ImageStyled
          referrerPolicy="no-referrer"
          alt={user?.email}
          src={user?.picture}
          $width={40}
        />
      ) : <PersonIconStyled />}
      {!files[0] ? (
        <>
          <Typography color="text.disabled" variant="h5">
            {user?.picture ? Text.UpdatePhoto : Text.FileUpload}
          </Typography>
          &nbsp;
          <UploadOneStyled color="primary" variant="h5">
            {Text.UploadOne}
          </UploadOneStyled>
        </>
      ) : (
        <ChangeCircleIconWrapper>
          <ChangeCircleIconStyled
            color="disabled"
            fontSize="large"
            $isUploading={isUploading}
          />
        </ChangeCircleIconWrapper>
      )}
      <ThumbContainerStyled>
        <Thumbs
          files={files}
          onDropFiles={onResetFilesHandle}
          onUploadNewAvatar={onUploadNewAvatar}
        />
      </ThumbContainerStyled>
    </MyPhotoUploadStyled>
  );
};

export default memo(FileUpload);
