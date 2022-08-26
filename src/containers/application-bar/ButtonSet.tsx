import { memo, useState } from 'react';

import html2canvas from 'html2canvas';
import JsPDF from 'jspdf';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import { ButtonText } from './constants';
import { ButtonStyled, LoadingButtonStyled } from './styled';
import { useUserFromDb } from '../main-page/cv-form/components/fields/personal-information/lib/query-hooks';

const PdfButtonSet = function (): JSX.Element {
  const { data: user } = useUserFromDb();
  const [loading, setLoading] = useState(false);

  const handleSave = (): void => {
    const el = document.getElementById('preview');

    if (el) {
      setLoading((load) => !load);
      html2canvas(el, {
        scale: 4,
      })
        .then((canvas) => {
          const image = {
            type: 'png',
            quality: 1,
          };
          const imgWidth = 210;
          let imgHeight = 290;

          const innerPageWidth = imgWidth;
          const innerPageHeight = imgHeight;

          const pxFullHeight = canvas.height;
          const pxPageHeight = canvas.width * (imgHeight / imgWidth);
          const nPages = Math.ceil(pxFullHeight / pxPageHeight);
          imgHeight = innerPageHeight;
          const pageCanvas = document.createElement('canvas');
          const pageCtx = pageCanvas.getContext('2d');
          pageCanvas.width = canvas.width;
          pageCanvas.height = pxPageHeight;
          const pdf = new JsPDF('p', 'mm', 'a4', true);

          for (let page = 0; page < nPages; page += 1) {
            if (page === nPages - 1 && pxFullHeight % pxPageHeight !== 0) {
              pageCanvas.height = pxFullHeight % pxPageHeight;
              imgHeight = (pageCanvas.height * innerPageWidth) / pageCanvas.width;
            }

            const w = pageCanvas.width;
            const h = pageCanvas.height;
            if (pageCtx) {
              pageCtx.fillStyle = 'white';
              pageCtx.fillRect(0, 0, w, h);
              pageCtx.drawImage(canvas, 0, page * pxPageHeight, w, h, 0, 0, w, h);
            }

            if (page > 0) pdf.addPage();
            const imgData = pageCanvas.toDataURL(`image/${image.type}`, image.quality);
            pdf.addImage(imgData, image.type, 0, page ? 15 : 0, innerPageWidth, imgHeight);
          }

          pdf.save(`CV_${user?.firstName}_${user?.lastName}`);
          setLoading((load) => !load);
        });
    }
  };
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
