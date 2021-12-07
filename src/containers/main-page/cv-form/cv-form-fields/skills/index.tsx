import React, { memo } from 'react';
import { Typography } from '@mui/material';

const Skills = function (): JSX.Element {
  return (
    <>
      <Typography variant="h5" fontWeight={600}>
        Add a skill
      </Typography>
      <Typography variant="body1" color="textSecondary" sx={{ padding: '0.8rem 0 2.4rem 0' }}>
        Any explanation text
      </Typography>
    </>
  );
};

export default memo(Skills);
