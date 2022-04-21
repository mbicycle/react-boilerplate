import {
  memo, useCallback, useEffect, useState,
} from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';
import { ButtonText, Step } from './constants';
import Title from './Title';

import {
  AddButtonStyled, AddCircleIconStyled,
  AddProfiencyStyled, ContainerStyled,
} from './styled';

interface AddProfiencyProps{
  title: `${Step}`;
  children: React.ReactNode;
  collection: ArrayLike<unknown>;
}

const AddProfiency = function ({ title, children, collection }: AddProfiencyProps): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();

  const { dispatch: dispatchSkill } = useSkillContext();

  const [pressedAdd, setPressedAdd] = useState(true);

  const handleAdd = (): void => {
    setPressedAdd(true);
    navigate('add');
    dispatchSkill({ type: 'reset-skill' });
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
    <AddProfiencyStyled>
      <ContainerStyled $isProfiencySelected={!!collection.length && !pressedAdd}>
        {pressedAdd && <Title name={title} onReturn={onReturnHandle} />}
        {!pressedAdd
        && (
          <>
            {collection.length ? children : null}
            {!location.pathname.includes('edit') && (
              <AddButtonStyled
                variant="contained"
                onClick={handleAdd}
                $isProfiencySelected={!!collection.length}
              >
                <AddCircleIconStyled />
                {ButtonText.Add}
              </AddButtonStyled>
            )}
          </>
        )}
        <Outlet />
      </ContainerStyled>
    </AddProfiencyStyled>
  );
};

export default memo(AddProfiency);
