import { useCallback, useEffect, useState } from 'react';
import { DropzoneState, FileRejection, useDropzone } from 'react-dropzone';

import { fileToBase64 } from 'common/utils/file';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { ExtendedFileType } from './types';
import { useChangeMyAvatar } from '../../lib/query-hooks';

const Mb5 = 5242880 as const;

type UseFileUploadReturnType = Pick<DropzoneState, 'getRootProps' | 'getInputProps'> & {
  files: ExtendedFileType[];
  onResetFilesHandle: VoidFunction;
  onUploadNewAvatar: VoidFunction;
  isUploading: boolean;
};

export const useFileUpload = (): UseFileUploadReturnType => {
  const mutation = useChangeMyAvatar();

  const [files, setFiles] = useState<ExtendedFileType[]>([]);
  const [base64String, setBase64String] = useState<string | undefined>();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      const newAvatar = await fileToBase64(acceptedFiles[0]);
      setBase64String(newAvatar as string);

      setFiles(acceptedFiles.map((file) => Object.assign(file, {
        preview: URL.createObjectURL(file),
      })));
    },
    maxSize: Mb5,
    onDropRejected: (fileRejections: FileRejection[]) => fileRejections.forEach(
      (fileRejection) => fileRejection.errors.forEach(
        (error) => SnackBarUtils.warning(error.message),
      ),
    ),
  });

  useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const onResetFilesHandle = useCallback((): void => {
    setFiles([]);
  }, []);

  useEffect(() => {
    if (mutation.isSuccess) {
      setFiles([]);
    }
  }, [mutation.isSuccess]);

  const onUploadNewAvatar = useCallback((): void => {
    mutation.mutateAsync(base64String as string);
  }, [base64String, mutation]);

  return {
    isUploading: mutation.isLoading,
    files,
    getRootProps,
    getInputProps,
    onResetFilesHandle,
    onUploadNewAvatar,
  };
};
