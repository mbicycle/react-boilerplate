import { memo, useCallback, useState } from 'react';

import { useDropzone } from 'react-dropzone';
import { Typography } from '@mui/material';

import { Text } from '../constants';
import Thumbs from './Thumbs';

import {
  MyPhotoUploadStyled, PersonIconStyled,
  ThumbContainerStyled,
  UploadOneStyled,
} from './utils/styled';
import { ExtendedFileType } from './utils/types';

const FileUpload = function (): JSX.Element {
  const [files, setFiles] = useState<ExtendedFileType[]>([]);

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
    },
  });

  const onDropFilesHandle = useCallback((): void => {
    setFiles([]);
  }, []);

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
        <Thumbs
          onDropFileSelection={onDropFilesHandle}
          files={files}
        />
      </ThumbContainerStyled>
    </MyPhotoUploadStyled>
  );
};

export default memo(FileUpload);
