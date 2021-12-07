import { createContext } from 'react';

export interface CVFormStepperState {
    activeStep: number;
}

export type CVFormStepperActionType = 'next' | 'prev';

export interface CVFormStepperAction {
    type: CVFormStepperActionType
}

export type CVFormStepperDispatch = (action: CVFormStepperAction) => void;

export type ContextType = { state: CVFormStepperState; dispatch: CVFormStepperDispatch; }

export const CVFormStepperContext = createContext<ContextType | undefined>(undefined);
