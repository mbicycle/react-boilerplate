import { defaultTheme } from '../defaultTheme';

const MuiSelect = {
  styleOverrides: {
    outlined: {
      padding: 0,
      height: 48,
      '.MuiTypography-root': {
        marginTop: 4,
        marginLeft: 12,
      },
      '&.MuiInputBase-input': {
        height: 'auto',
        paddingLeft: defaultTheme.spacing(2),
        marginBottom: defaultTheme.spacing(1.5),
      },
    },
  },
};
export default MuiSelect;
