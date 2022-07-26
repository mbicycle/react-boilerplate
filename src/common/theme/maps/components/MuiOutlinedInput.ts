import { defaultTheme } from '../defaultTheme';
import { palette } from '../palette';

const MuiOutlinedInput = {
  styleOverrides: {
    root: {
      minHeight: 48,

      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: palette.border,
        bordrWidth: 1,
      },

      input: {
        height: '100%',
        padding: defaultTheme.spacing(2, 2),
      },

      '&:hover fieldset': {
        borderColor: `${palette.border} !important`,
      },

      '& .Mui-disabled': {
        opacity: 1,
        WebkitTextFillColor: palette.text.secondary,
      },
    },
  },
};
export default MuiOutlinedInput;
