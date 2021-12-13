import { useCallback, useEffect, useState } from 'react';

import { DropzoneState, useDropzone } from 'react-dropzone';
import { ExtendedFileType } from './types';

type UseFileUploadReturnType = Pick<DropzoneState, 'getRootProps' | 'getInputProps'> & {
  files: ExtendedFileType[];
  onResetFilesHandle: VoidFunction;
};

export const useFileUpload = (): UseFileUploadReturnType => {
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

  useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const onResetFilesHandle = useCallback((): void => {
    setFiles([]);
  }, []);

  return {
    files,
    getRootProps,
    getInputProps,
    onResetFilesHandle,
  };
};
