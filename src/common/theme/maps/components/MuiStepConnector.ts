import { palette } from '../palette';
import { defaultTheme } from '../defaultTheme';

const MuiStepConnector = {
  styleOverrides: {
    root: {
      padding: defaultTheme.spacing(0, 7),
      '& span': {
        borderColor: palette.divider,
      },
    },
  },
};
export default MuiStepConnector;
