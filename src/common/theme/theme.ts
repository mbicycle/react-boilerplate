import { createTheme } from '@mui/material/styles';
import { palette } from './maps/palette';
import { typography } from './maps/typography';
import { shadows } from './maps/shadows';
import { shape } from './maps/shape';
import { transitions } from './maps/transitions';
import { zIndex } from './maps/zIndex';
import { breakpoints } from './maps/breakpoints';
import { components } from './maps/components';
import { spacing } from './maps/spacing';

export const theme = createTheme({
  breakpoints,
  palette,
  components,
  shadows,
  spacing,
  shape,
  transitions,
  typography,
  zIndex,
});
