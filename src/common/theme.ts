import { createTheme } from '@mui/material';
import { CSSProperties } from 'styled-components';
import { OpenSansBold, OpenSansRegular, OpenSansSemibold } from './fonts/index';
import { BackgroundExtendedType, ExtendedThemeOptions } from './theme-types';

export const PALETTE = {
  BLUE: '#1D86E7',
  MEDIUM_BLUE: '#1060AA',
  DARK_BLUE: '#0B4275',
  GRAY: '#C4C4C4',
  DARKER_GRAY: '#D8D8D8',
  LIGHTER_GRAY: '#F5F5F5',
  LIGHT_GRAY: '#BFC9D1',
  BACKGROUND_GRAY: '#E5E5E5',
  BACKGROUND_LIGHT_GRAY: '#F6F7F9',
  GRAY_BLUE: '#51728E',
  DARK_GRAY: '#737984',
  MEDIUM_GRAY: '#535E67',
  WHITE: '#FFFFFF',
  BLACK: '#131212',
  TEXT_DISABLED: '#85939F',
  ERROR: '#EA001B',
  SUCCESS: '#0FA958',
  BACKDROP_COLOR: '#26323833',
  TRANSPARENT: 'transparent',
  PIN_YELLOW: '#F2CB41',
  PIN_YELLOW_LIGHT: '#F1EBB0',
  PIN_GREEN: '#3EBF7A',
};

const openSansReg = {
  fontFamily: 'OpenSans-Regular',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `local('OpenSans-Regular'), url(${OpenSansRegular}) format('woff2')`,
} as CSSProperties;

const openSansSemiBold = {
  fontFamily: 'OpenSans-SemiBold',
  fontStyle: 'semibold',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `local('OpenSans-SemiBold'), url(${OpenSansSemibold}) format('woff2')`,
} as CSSProperties;

const openSansBold = {
  fontFamily: 'OpenSans-Bold',
  fontStyle: 'bold',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `local('OpenSans-Bold'), url(${OpenSansBold}) format('woff2')`,
} as CSSProperties;

const FONTS = {
  OPEN_SANS_REG: '"OpenSans-Regular", sans-serif',
  OPEN_SANS_SEMIBOLD: '"OpenSans-SemiBold", sans-serif',
  OPEN_SANS_BOLD: '"OpenSans-Bold", sans-serif',
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
      light: PALETTE.LIGHT_GRAY,
      main: PALETTE.BLACK,
      dark: PALETTE.BLACK,
      contrastText: '#fff',
      meduimGray: PALETTE.MEDIUM_GRAY,
    },
    secondary: {
      light: PALETTE.WHITE,
      main: PALETTE.WHITE,
      dark: PALETTE.BLACK,
      contrastText: PALETTE.WHITE,
    },
    // warning: {

    // },
    success: {
      main: PALETTE.SUCCESS,
    },
    error: {
      main: PALETTE.ERROR,
    },
    text: {
      primary: PALETTE.BLACK,
      secondary: PALETTE.MEDIUM_BLUE,
      disabled: PALETTE.TEXT_DISABLED,
      mediumGray: PALETTE.MEDIUM_GRAY,
    },
    background: {
      blue: PALETTE.MEDIUM_BLUE,
      darkBlue: PALETTE.DARK_BLUE,
      white: PALETTE.WHITE,
      border: PALETTE.GRAY,
      borderLight: PALETTE.LIGHT_GRAY,
      gray: PALETTE.BACKGROUND_GRAY,
      lightGray: PALETTE.BACKGROUND_LIGHT_GRAY,
      darkGray: PALETTE.DARKER_GRAY,
    } as BackgroundExtendedType,
  },
  spacing: SPACING,
  shape: {
    borderRadius: BORDER_RADIUS,
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: FONTS.OPEN_SANS_REG,
    button: {
      textTransform: 'none',
    },
    h2: {
      fontFamily: FONTS.OPEN_SANS_BOLD,
      fontWeight: 700,
      fontSize: 48,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h3: {
      fontFamily: FONTS.OPEN_SANS_BOLD,
      fontWeight: 700,
      fontSize: 38,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h4: {
      fontFamily: FONTS.OPEN_SANS_SEMIBOLD,
      fontWeight: 600,
      fontSize: 30,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h5: {
      fontFamily: FONTS.OPEN_SANS_BOLD,
      fontWeight: 600,
      fontSize: 24,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    h6: {
      fontFamily: FONTS.OPEN_SANS_SEMIBOLD,
      fontWeight: 600,
      fontSize: 18,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle1: {
      fontFamily: FONTS.OPEN_SANS_REG,
      fontWeight: 400,
      fontSize: 18,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    subtitle2: {
      fontFamily: FONTS.OPEN_SANS_REG,
      fontWeight: 400,
      fontSize: 14,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body1: {
      fontFamily: FONTS.OPEN_SANS_SEMIBOLD,
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    body2: {
      fontFamily: FONTS.OPEN_SANS_SEMIBOLD,
      fontWeight: 600,
      fontSize: 14,
      lineHeight: 'normal',
      letterSpacing: 'normal',
    },
    caption: {
      fontFamily: FONTS.OPEN_SANS_REG,
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
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        minHeight: 80,
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
        '@font-face': [openSansReg, openSansSemiBold, openSansBold],
      },
    },
    MuiSvgIcon: {
      colorAction: {
        color: PALETTE.BLUE,
      },
      colorPrimary: {
        color: PALETTE.SUCCESS,
      },
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
          borderColor: PALETTE.MEDIUM_BLUE,
          bordrWidth: 1,
        },
        '&:hover fieldset': {
          borderColor: `${PALETTE.MEDIUM_BLUE} !important`,
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
      input: {
        height: 10,
        borderRadius: BORDER_RADIUS,
        fontSize: 14,
        '&.Mui-disabled': {
          backgroundColor: PALETTE.LIGHTER_GRAY,
        },
      },
    },
    MuiCircularProgress: {
      colorPrimary: {
        color: PALETTE.BLUE,
      },
    },
    MuiCheckbox: {
      root: {
        color: PALETTE.LIGHT_GRAY,
      },
      colorPrimary: {
        '&$checked': {
          color: PALETTE.MEDIUM_BLUE,
        },
      },
    },
    MuiBackdrop: {
      root: {
        backgroundColor: PALETTE.BACKDROP_COLOR,
      },
    },
  },
  breakpoints: {
    values: MEDIA_BREAKPOINTS,
  },
} as ExtendedThemeOptions);

export default theme;
