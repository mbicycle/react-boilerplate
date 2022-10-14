import { memo } from 'react';

import { IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import { TitleWrapperStyled } from './styled';
import { Step } from './constants';

interface TitleProps {
 name: `${Step}`;
 onReturn: VoidFunction
}

const Title = function ({ name, onReturn }: TitleProps): JSX.Element {
  const onBackHandle = (): void => {
    onReturn();
  };

  return (
    <TitleWrapperStyled>
      <IconButton onClick={onBackHandle} size="small" sx={{ marginRight: 1 }}>
        <ChevronLeftIcon color="primary" />
      </IconButton>
      <Typography variant="body1">
        {name}
      </Typography>
    </TitleWrapperStyled>
  );
};

export default memo(Title);
