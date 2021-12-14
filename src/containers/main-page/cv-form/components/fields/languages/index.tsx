import { memo } from 'react';

import { Button } from '@mui/material';
import AddCircleIcon from '@mui/icons-material/AddCircle';

import { ButtonContainer } from './utils/styled';
import { ButtonText } from './utils/constants';

const Languages = function (): JSX.Element {
  return (
    <ButtonContainer>
      <Button variant="contained">
        <AddCircleIcon sx={{ mr: 1 }} />
        {ButtonText.Add}
      </Button>
    </ButtonContainer>
  );
};

export default memo(Languages);
