import { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { Tool } from '../../utils/models';

const ToolItem = function ({ tool }: {tool: Tool}): JSX.Element {
  return (
    <Box sx={{ display: 'inline-flex', textAlign: 'center' }}>
      <Typography variant="body2">{tool.level}</Typography>
      &#58;&nbsp;
      <Typography variant="body2">{tool.experience || ''}</Typography>
    </Box>
  );
};

export default memo(ToolItem);
