import { spacing } from '../spacing';

const MuiButton = {
  styleOverrides: {
    root: {
      padding: `${spacing(3.5)} ${spacing(11)}`,
      boxShadow: 'none',
      ':hover': {
        boxShadow: 'none',
      },
    },
  },
};
export default MuiButton;
