import { memo, useCallback, useState } from 'react';

import { Outlet, useNavigate } from 'react-router-dom';

import { ROUTE } from 'common/components/routes/utils/constants';

import LanguageTitle from './LanguageTitle';
import LanguageSelection from './LanguageSelection';
import { ButtonText } from '../utils/constants';

import {
  AddButtonStyled,
  AddCircleIconStyled, LanguagesContainerStyled,
} from '../utils/styled';

import { useLanguageContext } from '../local-state/hooks';
import LeveledLanguageList from './leveled-languages/LeveledLanguageList';

const Languages = function (): JSX.Element {
  const { state: leveledLanguages } = useLanguageContext();
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
    <LanguagesContainerStyled
      $isLanguageSelected={!!leveledLanguages.length && !pressedAdd}
    >
      {pressedAdd && <LanguageTitle onReturn={onReturnHandle} />}
      {!pressedAdd
        ? (
          <>
            {
              leveledLanguages.length
                ? <LeveledLanguageList languages={leveledLanguages} />
                : null
            }
            <AddButtonStyled
              variant="contained"
              onClick={onAddLanguage}
              $isLanguageSelected={!!leveledLanguages.length}
            >
              <AddCircleIconStyled />
              {ButtonText.Add}
            </AddButtonStyled>
          </>
        )
        : <LanguageSelection onReturn={onReturnHandle} />}
      <Outlet />
    </LanguagesContainerStyled>
  );
};

export default memo(Languages);
