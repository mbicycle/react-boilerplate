import { defaultTheme } from '../../defaultTheme';

export const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: defaultTheme.spacing(25),
      minWidth: defaultTheme.spacing(28.5),
      height: defaultTheme.spacing(12),
      padding: defaultTheme.spacing(3, 6),
      textTransform: 'capitalize',
      '&.Mui-disabled .MuiButton-startIcon svg path': {
        fill: defaultTheme.palette.action.disabled,
      },
    },
    sizeLarge: {
      height: defaultTheme.spacing(15),
      padding: defaultTheme.spacing(4.5, 9.5),
    },
    contained: {
      padding: defaultTheme.spacing(3, 6),
      backgroundColor: defaultTheme.palette.primary.main,
      color: defaultTheme.palette.common.white,
      '&:hover': {
        backgroundColor: defaultTheme.palette.primary.dark,
      },
    },
    outlined: {
      padding: defaultTheme.spacing(3, 6),
      color: defaultTheme.palette.primary.main,
      border: `2px solid ${defaultTheme.palette.primary.main}`,
      '& svg path': {
        fill: defaultTheme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: defaultTheme.palette.primary.main,
        color: defaultTheme.palette.common.white,
        border: `2px solid ${defaultTheme.palette.primary.main}`,
        '& svg path': {
          fill: defaultTheme.palette.common.white,
        },
      },
    },
    text: {
      color: defaultTheme.palette.primary.main,
      '& svg path': {
        fill: defaultTheme.palette.primary.main,
      },
      '&:hover': {
        backgroundColor: 'transparent',
        color: defaultTheme.palette.primary.dark,
        '& svg path': {
          fill: defaultTheme.palette.primary.dark,
        },
      },
    },
  },
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
};
