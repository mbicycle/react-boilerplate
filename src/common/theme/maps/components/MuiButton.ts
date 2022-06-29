import { defaultTheme } from '../defaultTheme';

const MuiButton = {
  styleOverrides: {
    root: {
      height: 48,
      padding: defaultTheme.spacing(3.5, 11),
      boxShadow: 'none',
      ':hover': {
        boxShadow: 'none',
      },
    },
  },
};
export default MuiButton;
