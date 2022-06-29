import { palette } from '../palette';

const MuiStepLabel = {
  styleOverrides: {
    iconContainer: {
      display: 'none',
    },
    root: {
      p: {
        color: palette.text.primary,
        fontWeight: 400,
      },
      '.Mui-completed': {
        p: {
          color: palette.primary.main,
        },
      },
      '.Mui-active': {
        p: {
          color: palette.primary.main,
          fontWeight: 600,
        },
      },
    },
  },
};
export default MuiStepLabel;
