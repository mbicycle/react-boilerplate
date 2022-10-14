import { spacingUnit } from '../config';

export const spacing = (factor: number): string => `${spacingUnit * factor}rem`;
