import { PaletteOptions } from '@mui/material/styles';
import { PALETTE } from '../../constants';

export const palette: PaletteOptions = {
  primary: {
    light: PALETTE.BLUE,
    main: PALETTE.MEDIUM_BLUE,
    dark: PALETTE.DARK_BLUE,
    contrastText: PALETTE.WHITE,
  },
  secondary: {
    main: '#26262a',
  },
  text: {
    primary: PALETTE.BLACK,
    secondary: PALETTE.GRAY_BLUE,
    disabled: PALETTE.TEXT_DISABLED,
  },
  background: {
    default: '#FFFFFF',
  },
  success: {
    main: PALETTE.SUCCESS,
  },
  warning: {
    main: '#D4AD47',
  },
  common: {
    black: '#26262a',
  },
};
