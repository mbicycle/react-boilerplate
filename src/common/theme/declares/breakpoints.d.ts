import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;
  interface BreakpointOverrides {
    xxs: true,
    xxl: true;
  }
}
