import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { ButtonText, Step } from './constants';
import Title from './Title';

import {
  AddButtonStyled, AddCircleIconStyled,
  ContainerStyled,
} from './styled';

interface AddProfiencyProps{
  title: `${Step}`;
  children: React.ReactNode;
  collection: ArrayLike<unknown>;
}

const AddProfiency = function ({ title, children, collection }: AddProfiencyProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const [pressedAdd, setPressedAdd] = useState(true);

  const onAddLanguage = (): void => {
    setPressedAdd(true);
    navigate('add');
  };

  const onReturnHandle = useCallback(() => {
    setPressedAdd(false);
    navigate(-1);
  }, [navigate]);

  useEffect(() => {
    if (!location.pathname.includes('add')) {
      setPressedAdd(false);
    }
  }, [location.pathname]);

  return (
    <ContainerStyled $isProfiencySelected={
      !!collection.length && !pressedAdd
    }
    >
      {pressedAdd && <Title name={title} onReturn={onReturnHandle} />}
      {!pressedAdd
        && (
          <>
            {collection.length ? children : null}
            <AddButtonStyled
              variant="contained"
              onClick={onAddLanguage}
              $isProfiencySelected={!!collection.length}
            >
              <AddCircleIconStyled />
              {ButtonText.Add}
            </AddButtonStyled>
          </>
        )}
      <Outlet />
    </ContainerStyled>
  );
};

export default memo(AddProfiency);
