import { palette } from '../palette';
import { spacing } from '../spacing';

const MuiStepConnector = {
  styleOverrides: {
    root: {
      padding: `0 ${spacing(7)}`,
      '& span': {
        borderColor: palette.divider,
      },
    },
  },
};
export default MuiStepConnector;
