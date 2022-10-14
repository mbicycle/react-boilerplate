import { memo } from 'react';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import { ButtonText } from './constants';
import { ButtonStyled, LoadingButtonStyled } from './styled';
import { useSavePDFFile } from './hooks';

const PdfButtonSet = function (): JSX.Element {
  const { handleSave, loading } = useSavePDFFile();

  return (
    <>
      <LoadingButtonStyled
        startIcon={<FileUploadOutlinedIcon fontSize="medium" />}
        variant="outlined"
        color="secondary"
        onClick={handleSave}
        loadingPosition="start"
        loading={loading}
      >
        {ButtonText.Export}
      </LoadingButtonStyled>
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
