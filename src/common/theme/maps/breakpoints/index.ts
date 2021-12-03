import { Breakpoints } from "@mui/material";

export const breakpoints: Partial<
    { unit: string; step: number } & Partial<Breakpoints>
    >  = {
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
