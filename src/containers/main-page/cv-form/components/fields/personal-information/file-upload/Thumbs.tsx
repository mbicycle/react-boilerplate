import { memo, useEffect } from 'react';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import {
  IconButtonStyled, ImageStyled,
  ShumbInnerStyled, ThumbStyled,
} from './utils/styled';
import { ExtendedFileType } from './utils/types';

interface ThumbsProps {
files:ExtendedFileType[]
onDropFileSelection: VoidFunction
}

const Thumbs = function ({ files, onDropFileSelection }: ThumbsProps): JSX.Element {
  useEffect(() => () => {
    files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, [files]);

  const onDeleteImageHandle = (event: React.MouseEvent): void => {
    event.stopPropagation();
    onDropFileSelection();
  };

  return (
    <>
      {files.map((file) => (
        <ThumbStyled key={file.name}>
          <ShumbInnerStyled>
            <IconButtonStyled size="small" onClick={onDeleteImageHandle}>
              <CancelRoundedIcon fontSize="small" color="error" />
            </IconButtonStyled>
            <ImageStyled
              alt={file.name}
              src={file.preview}
            />
          </ShumbInnerStyled>
        </ThumbStyled>
      ))}
    </>
  );
};

export default memo(Thumbs);
