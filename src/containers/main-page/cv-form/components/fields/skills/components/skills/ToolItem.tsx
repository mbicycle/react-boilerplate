import { memo } from 'react';

import { Box, Typography } from '@mui/material';

import { Tool } from 'common/models/User';

const ToolItem = function ({ tool }: {tool: Tool}): JSX.Element {
  return (
    <Box component="span" sx={{ display: 'inline-flex', textAlign: 'center' }}>
      <Typography variant="body2">{tool.level}</Typography>
      &#58;&nbsp;
      <Typography variant="body2">{tool.experience || ''}</Typography>
    </Box>
  );
};

export default memo(ToolItem);
