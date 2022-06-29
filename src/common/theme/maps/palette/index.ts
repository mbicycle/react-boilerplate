import { Color } from '../config';

declare module '@mui/material/styles' {
  interface Palette {
    border: Color.GreyBorder;
  }
}

export const palette = {
  primary: {
    main: Color.Blue,
    light: Color.BlueLight,
    dark: Color.BlueDark,
    contrastText: Color.White,
  },
  secondary: {
    main: Color.GreyLight,
    light: Color.White,
    dark: Color.GreyDark,
    contrastText: Color.Blue,
  },
  text: {
    primary: Color.Black,
    secondary: Color.Grey,
    disabled: Color.GreyDark,
  },
  divider: Color.GreyDark,
  border: Color.GreyBorder,
};
