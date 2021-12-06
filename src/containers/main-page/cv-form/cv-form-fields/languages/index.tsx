import React, { memo } from 'react';
import { Typography } from '@mui/material';

const Languages = function (): JSX.Element {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Add a language
      </Typography>
      <Typography variant="body1" sx={{ padding: '0.8rem 0 2.4rem 0' }}>
        Any explanation text
      </Typography>
    </>
  );
};

export default memo(Languages);
