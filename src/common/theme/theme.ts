import { createTheme, Theme } from '@mui/material/styles';
import { breakpoints } from './maps/breakpoints'
import { palette } from './maps/palette'
import { spacing } from './maps/spacing'
import { shape } from './maps/shape'
import { zIndex } from './maps/zIndex'
import { transitions } from './maps/transitions'
import { shadows } from './maps/shadows'

export const theme = createTheme({
    breakpoints,
    palette,
    spacing,
    shape,
    shadows,
    zIndex,
    transitions
})