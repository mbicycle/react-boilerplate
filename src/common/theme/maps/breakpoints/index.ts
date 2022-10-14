import { Breakpoints, Theme } from '@mui/material';

declare module '@mui/material/styles' {
  type DefaultTheme = Theme;
  interface BreakpointOverrides {
    xxs: true,
    xxl: true;
  }
}

export const breakpoints: Partial<
  { unit: string; step: number; } & Partial<Breakpoints>
> = {
  keys: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
  values: {
    xxs: 0,
    xs: 600,
    sm: 960,
    md: 1080,
    lg: 1300,
    xl: 1600,
    xxl: 1920,
  },
};
