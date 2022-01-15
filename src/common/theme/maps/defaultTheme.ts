import { createTheme } from '@mui/material/styles';
import { palette } from './palette';
import { breakpoints } from './breakpoints';
import { shadows } from './shadows';
import { shape } from './shape';
import { transitions } from './transitions';
import { typography } from './typography';
import { zIndex } from './zIndex';
import { spacing } from './spacing';

export const defaultTheme = createTheme({
  breakpoints,
  palette,
  shadows,
  shape,
  spacing,
  transitions,
  typography,
  zIndex,
});
