import { createContext } from 'react';

export type CVFormStepperActionType = { type: 'next' | 'prev'; };
export type CVFormStepperState = { activeStep: number; };
export type CVFormStepperDispatch = (action: CVFormStepperActionType) => void;
export type ContextType = { state: CVFormStepperState; dispatch: CVFormStepperDispatch; };

export const CVFormStepperContext = createContext<ContextType | undefined>(undefined);
