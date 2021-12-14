import { palette } from '../palette';

const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      minHeight: 48,
      height: '100%',

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.border,
        bordrWidth: 1,
      },

      '&:hover fieldset': {
        borderColor: `${palette.border} !important`,
      },
    },
  },
};
export default MuiOutlinedInput;
