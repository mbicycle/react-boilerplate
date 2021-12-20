import { memo, useCallback, useState } from 'react';

import { Button } from '@mui/material';

import { Outlet, useNavigate } from 'react-router-dom';

import { ROUTE } from 'common/components/routes/utils/constants';
import LanguageTitle from './LanguageTitle';
import { ButtonText } from './utils/constants';

import LanguageSelection from './LanguageSelection';

import {
  AddCircleIconStyled, ButtonContainer,
} from './utils/styled';

const Languages = function (): JSX.Element {
  const navigate = useNavigate();

  const [pressedAdd, setPressedAdd] = useState(false);

  const onAddLanguage = (): void => {
    setPressedAdd(true);
    navigate(ROUTE.DASHBOARD.LANGUAGES.ADD);
  };

  const onReturnHandle = useCallback(() => {
    setPressedAdd(false);
    navigate(ROUTE.DASHBOARD.LANGUAGES.MAIN);
  }, [navigate]);

  return (
    <ButtonContainer>
      {pressedAdd && <LanguageTitle onReturn={onReturnHandle} />}
      {!pressedAdd ? (
        <Button variant="contained" onClick={onAddLanguage}>
          <AddCircleIconStyled />
          {ButtonText.Add}
        </Button>
      )
        : <LanguageSelection onReturn={onReturnHandle} />}
      <Outlet />
    </ButtonContainer>
  );
};

export default memo(Languages);
