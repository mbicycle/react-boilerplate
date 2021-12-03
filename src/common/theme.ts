import { createTheme } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { BackgroundExtendedType, ExtendedThemeOptions } from './theme-types';

import UbuntuMedium from './fonts/Ubuntu-Medium.ttf';
import UbuntuRegular from './fonts/Ubuntu-Regular.ttf';
import UbuntuBold from './fonts/Ubuntu-Bold.ttf';

export const PALETTE = {
  BLUE: '#2A57E0',
  GRAY: '#76828A',
  WHITE: '#FFFFFF',
  BLACK: '#051C2C',
  TRANSPARENT: 'transparent',
};

const ubuntuRegular = {
  fontFamily: 'Ubuntu-Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('Ubuntu'), local('Ubuntu-Regular'), url(${UbuntuRegular}) format('ttf')`,
} as CSSProperties;

const ubuntuMedium = {
  fontFamily: 'Ubuntu-Medium',
  fontStyle: 'semibold',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `local('Ubuntu'), local('Ubuntu-Medium'), url(${UbuntuMedium}) format('ttf')`,
} as CSSProperties;

const ubuntuBold = {
  fontFamily: 'Ubuntu-Bold',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `local('Ubuntu'), local('Ubuntu-Bold'), url(${UbuntuBold}) format('ttf')`,
} as CSSProperties;

const FONTS = {
  UBUNTU_REG: '"Ubuntu-Regular", sans-serif',
  UBUNTU_MEDIUM: '"Ubuntu-Medium", sans-serif',
  UBUNTU_BOLD: 'Ubuntu-Bold", sans-serif',
};

export const MEDIA_BREAKPOINTS = {
  xxs: 1,
  xs: 600,
  sm: 960,
  md: 1080,
  lg: 1300,
  xl: 1600,
  xxl: 1920,
};

export const TOOLBAR_HEIGHT = 64;
export const XS_DIALOG_MAX_WIDTH = 412;
export const MAP_HEIGHT_OFFSET = 40;
export const PINS_SIZE = 24;

const BORDER_RADIUS = 6;

export const SPACING = 4;

const theme = createTheme({
  palette: {
    primary: {
      light: PALETTE.GRAY,
      main: PALETTE.BLACK,
      dark: PALETTE.BLACK,
      contrastText: '#fff',
    },
    secondary: {
      light: PALETTE.WHITE,
      main: PALETTE.WHITE,
      dark: PALETTE.BLACK,
      contrastText: PALETTE.WHITE,
    },
    // warning: {

    // },
    // success: {
    //   main: PALETTE.SUCCESS,
    // },
    // error: {
    //   main: PALETTE.ERROR,
    // },
    text: {
      primary: PALETTE.BLACK,
      secondary: PALETTE.GRAY,
    },
    background: {
      white: PALETTE.WHITE,
      border: PALETTE.GRAY,
    } as BackgroundExtendedType,
  },
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: 'Raleway, Arial',
    button: {
      textTransform: 'none',
    },
    h2: {
      fontFamily: FONTS.UBUNTU_BOLD,
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h3: {
      fontFamily: FONTS.UBUNTU_BOLD,
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: FONTS.UBUNTU_MEDIUM,
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontFamily: FONTS.UBUNTU_BOLD,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h6: {
      fontFamily: FONTS.UBUNTU_MEDIUM,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: '27px',
      letterSpacing: 'normal',
    },
    subtitle1: {
      fontFamily: FONTS.UBUNTU_REG,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontFamily: FONTS.UBUNTU_REG,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body1: {
      fontFamily: FONTS.UBUNTU_MEDIUM,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: FONTS.UBUNTU_MEDIUM,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    caption: {
      fontFamily: FONTS.UBUNTU_REG,
      fontWeight: 400,
      fontSize: 24,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    overline: {

    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '@global': {
          '@font-face': [ubuntuMedium, ubuntuBold, ubuntuRegular],
        },
      },
    },
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true,
      },
      styleOverrides: {
        colorPrimary: {
          backgroundColor: PALETTE.BLUE,
        },
        root: {
          minHeight: 80,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        colorInherit: {
          backgroundColor: PALETTE.BLUE,
        },
        root: {
          padding: '14px 28px',
          color: PALETTE.WHITE,
          ':hover': {
            color: PALETTE.BLACK,
          },
        },
      },
    },
  },
  breakpoints: {
    values: MEDIA_BREAKPOINTS,
  },
} as ExtendedThemeOptions);

export default theme;
