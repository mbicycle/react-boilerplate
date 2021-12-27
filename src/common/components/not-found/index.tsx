import image from '../../assets/not-found.png';

import { NotFoundContainerStyled } from './styled';

const NotFound = function (): JSX.Element {
  return (
    <NotFoundContainerStyled>
      <img src={image} alt="not-found" />
    </NotFoundContainerStyled>
  );
};

export default NotFound;
