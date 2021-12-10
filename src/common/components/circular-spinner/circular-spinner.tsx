import { memo } from 'react';
import { CircularProgressStyled } from './styled';

type Size = 'tiny' | 'small' | 'medium' | 'large';
const CircularSpinner = function (
  {
    size,
    color = 'secondary',
  }:{size: Size, color?: 'primary' | 'secondary' | 'inherit';},
): JSX.Element {
  const setSize = (): number => {
    switch (size) {
      case 'tiny':
        return 14;
      case 'small':
        return 24;
      case 'medium':
        return 32;
      case 'large':
        return 64;
      default: return 0;
    }
  };

  return <CircularProgressStyled size={setSize()} color={color} />;
};

export default memo(CircularSpinner);
