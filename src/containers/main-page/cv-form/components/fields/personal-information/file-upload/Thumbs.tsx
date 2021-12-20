import { memo } from 'react';

import CancelRoundedIcon from '@mui/icons-material/CancelRounded';

import { ExtendedFileType } from './utils/types';

import {
  IconButtonStyled, ImageStyled,
  ShumbInnerStyled, ThumbStyled,
} from './utils/styled';

const Thumbs = function ({
  files,
  onDropFiles,
}:{files: ExtendedFileType[], onDropFiles:VoidFunction}): JSX.Element {
  const onDeleteImageHandle = (event: React.MouseEvent): void => {
    event.stopPropagation();
    onDropFiles();
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
              referrerPolicy="no-referrer"
            />
          </ShumbInnerStyled>
        </ThumbStyled>
      ))}
    </>
  );
};

export default memo(Thumbs);
