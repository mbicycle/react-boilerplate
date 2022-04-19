import { memo } from 'react';
import { Typography } from '@mui/material';

import { useAuth } from 'containers/authentication/auth';
import { useUserPhoto } from 'common/services/user-service/hooks/useUserPhoto';
import { useFileUpload } from './utils/hooks';

import Thumbs from './Thumbs';
import { Text } from './utils/types';

import {
  ChangeCircleIconStyled,
  ChangeCircleIconWrapper, MyPhotoUploadStyled,
  PersonIconStyled, ThumbContainerStyled,
  UploadOneStyled,
} from './utils/styled';
import { ImageStyled } from '../styled';

const FileUpload = function (): JSX.Element {
  const { user } = useAuth();
  const { photo } = useUserPhoto();

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
      {photo ? (
        <ImageStyled
          referrerPolicy="no-referrer"
          alt={user?.mail}
          src={photo}
          $width={60}
        />
      ) : <PersonIconStyled />}
      {!files[0] ? (
        <>
          <Typography color="text.disabled" variant="h5">
            {photo ? Text.UpdatePhoto : Text.FileUpload}
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
