import { useCallback, useEffect, useState } from 'react';
import { DropzoneState, FileRejection, useDropzone } from 'react-dropzone';

import SnackBarUtils from 'common/components/SnackBar/SnackBarUtils';
import { ExtendedFileType } from './types';
import { useUpdateMsAvatar } from '../../lib/query-hooks';

const Mb5 = 5242880 as const;

type UseFileUploadReturnType = Pick<DropzoneState, 'getRootProps' | 'getInputProps'> & {
  files: ExtendedFileType[];
  onResetFilesHandle: VoidFunction;
  onUploadNewAvatar: VoidFunction;
  isUploading: boolean;
};

export const useFileUpload = (): UseFileUploadReturnType => {
  const mutation = useUpdateMsAvatar();

  const [files, setFiles] = useState<ExtendedFileType[]>([]);
  const [fileToUpload, setFileToUpload] = useState<File | undefined>();

  const { getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: 'image/*',
    onDrop: async (acceptedFiles) => {
      setFileToUpload(acceptedFiles[0] as File);

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

  const onUploadNewAvatar = useCallback(async (): Promise<void> => {
    await mutation.mutateAsync(fileToUpload as File);
  }, [fileToUpload, mutation]);

  return {
    isUploading: mutation.isLoading,
    files,
    getRootProps,
    getInputProps,
    onResetFilesHandle,
    onUploadNewAvatar,
  };
};
