import { ThemeOptions } from '@mui/material';

export interface ExtraBackground {
  blue: string;
  white: string;
  backgroundGray: string;
}

export type BackgroundExtendedType = Partial<ExtraBackground>;

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxs' | 'xxl';

export type ExtendedThemeOptions = ThemeOptions & {
  palette: {
    background: BackgroundExtendedType;
  };
};
