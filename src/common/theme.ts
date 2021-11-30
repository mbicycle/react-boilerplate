import { createTheme } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { UbuntuRegular, UbuntuBold, UbuntuMedium } from './fonts/index';
import { BackgroundExtendedType, ExtendedThemeOptions } from './theme-types';

export const PALETTE = {
  BLUE: '#2A57E0',
  GRAY: '#76828A',
  // DARKER_GRAY: '#D8D8D8',
  // LIGHTER_GRAY: '#F5F5F5',
  // LIGHT_GRAY: '#BFC9D1',
  // BACKGROUND_GRAY: '#E5E5E5',
  // BACKGROUND_LIGHT_GRAY: '#F6F7F9',
  // GRAY_BLUE: '#51728E',
  // DARK_GRAY: '#737984',
  // MEDIUM_GRAY: '#535E67',
  WHITE: '#FFFFFF',
  BLACK: '#051C2C',
  // TEXT_DISABLED: '#85939F',
  // ERROR: '#EA001B',
  // SUCCESS: '#0FA958',
  // BACKDROP_COLOR: '#26323833',
  TRANSPARENT: 'transparent',
};

const ubuntuRegular = {
  fontFamily: 'Ubuntu-Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('Ubuntu-Regular'), url(${UbuntuRegular}) format('woff2')`,
} as CSSProperties;

const ubuntuMedium = {
  fontFamily: 'Ubuntu-Medium',
  fontStyle: 'semibold',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `local('Ubuntu-Medium'), url(${UbuntuMedium}) format('woff2')`,
} as CSSProperties;

const ubuntuBold = {
  fontFamily: 'Ubuntu-Bold',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `local('Ubuntu-Bold'), url(${UbuntuBold}) format('woff2')`,
} as CSSProperties;

const FONTS = {
  UBUNTU_REG: '"Ubuntu-Regular", sans-serif',
  UBUNTU_MEDIUM: '"Ubuntu-Medium", sans-serif',
  UBUNTU_BOLD: '"Ubuntu-Bold", sans-serif',
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

const defaultTheme = createTheme({});

const theme = createTheme({
  palette: {
    primary: {
      light: PALETTE.GRAY,
      main: PALETTE.BLACK,
      dark: PALETTE.BLACK,
      contrastText: '#fff',
      // meduimGray: PALETTE.MEDIUM_GRAY,
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
      // disabled: PALETTE.TEXT_DISABLED,
      // mediumGray: PALETTE.MEDIUM_GRAY,
    },
    background: {
      white: PALETTE.WHITE,
      border: PALETTE.GRAY,
      // borderLight: PALETTE.LIGHT_GRAY,
      // gray: PALETTE.BACKGROUND_GRAY,
      // lightGray: PALETTE.BACKGROUND_LIGHT_GRAY,
      // darkGray: PALETTE.DARKER_GRAY,
    } as BackgroundExtendedType,
  },
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: FONTS.UBUNTU_REG,
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
  overrides: {
    MuiAppBar: {
      root: {
        colorSecondary: {
          backgroundColor: `${PALETTE.BLUE} !important`,
        },
      },
    },
    MuiTypography: {
      h2: {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 24,
        },
      },
      h4: {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 24,
        },
      },
      body1: {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 14,
        },
      },
      caption: {
        [defaultTheme.breakpoints.down('md')]: {
          fontSize: 16,
        },
      },
    },
    MuiCssBaseline: {
      '@global': {
        '@font-face': [ubuntuBold, ubuntuMedium, ubuntuRegular],
      },
    },
    MuiSvgIcon: {
      colorAction: {
        color: PALETTE.BLUE,
      },
      // colorPrimary: {
      //   color: PALETTE.SUCCESS,
      // },
      colorDisabled: {
        color: PALETTE.GRAY,
      },
      colorSecondary: {
        color: `${PALETTE.WHITE} !important`,
      },
    },
    MuiSelect: {
      select: {
        marginRight: `${defaultTheme.spacing(1)}px`,
        '&:focus': {
          backgroundColor: PALETTE.TRANSPARENT,
        },
      },
      icon: {
        top: 'calc(50% - 10px)',
      },
    },
    MuiOutlinedInput: {
      root: {
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          bordrWidth: 1,
        },
        '&:hover fieldset': {
        },
      },
    },
    MuiInputBase: {
      root: {
        height: 48,
        '&.Mui-disabled': {
          '&:hover fieldset': {
            borderColor: 'rgba(0, 0, 0, 0.26) !important',
            outline: 'none',
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
