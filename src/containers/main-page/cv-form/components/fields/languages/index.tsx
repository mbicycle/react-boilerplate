import {
  memo, useCallback, useEffect, useState,
} from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ROUTE } from 'common/components/routes/utils/constants';
import { useLanguageContext } from 'containers/main-page/cv-form/local-state/hooks';

import LanguageTitle from './components/LanguageTitle';
import LeveledLanguageList from './components/leveled-languages/LeveledLanguageList';
import { ButtonText } from './utils/constants';

import {
  AddButtonStyled,
  AddCircleIconStyled, LanguagesContainerStyled,
} from './utils/styled';

const Languages = function (): JSX.Element {
  const { state: leveledLanguages } = useLanguageContext();
  const location = useLocation();
  const navigate = useNavigate();

  const [pressedAdd, setPressedAdd] = useState(true);

  const onAddLanguage = (): void => {
    setPressedAdd(true);
    navigate(ROUTE.DASHBOARD.LANGUAGES.ADD);
  };

  const onReturnHandle = useCallback(() => {
    setPressedAdd(false);
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (!location.pathname.includes(ROUTE.DASHBOARD.LANGUAGES.ADD)) {
      setPressedAdd(false);
    }
  }, [location.pathname]);

  return (
    <LanguagesContainerStyled $isLanguageSelected={
      !!leveledLanguages.length && !pressedAdd
    }
    >
      {pressedAdd && <LanguageTitle onReturn={onReturnHandle} />}
      {!pressedAdd
        && (
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
        )}
      <Outlet />
    </LanguagesContainerStyled>
  );
};

export default memo(Languages);
