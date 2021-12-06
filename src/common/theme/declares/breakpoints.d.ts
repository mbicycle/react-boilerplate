import { Theme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface DefaultTheme extends Theme {}
    interface BreakpointOverrides {
        xxs: true,
        xxl: true
    }
}
