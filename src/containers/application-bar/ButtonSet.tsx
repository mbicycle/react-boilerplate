import { memo } from 'react';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import { ButtonText } from './constants';
import { ButtonStyled } from './styled';

const PdfButtonSet = function ():JSX.Element {
  return (
    <>
      <ButtonStyled
        startIcon={<FileUploadOutlinedIcon fontSize="medium" />}
        variant="outlined"
        color="secondary"
      >
        {ButtonText.Export}

      </ButtonStyled>
      <ButtonStyled
        startIcon={<FileDownloadOutlinedIcon fontSize="medium" />}
        variant="outlined"
        color="secondary"
      >
        {ButtonText.Import}

      </ButtonStyled>
    </>
  );
};

export default memo(PdfButtonSet);
