import { Breakpoints } from '@mui/material/styles';


// TODO: Extract it to d.ts
declare module '@mui/material/styles' {
    interface BreakpointOverrides {
        xxs: true;
        xxl: true;
    }
}

export const breakpoints: Partial<
{ unit: string; step: number } & Breakpoints
> = {
    keys: ['xxs','xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
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
