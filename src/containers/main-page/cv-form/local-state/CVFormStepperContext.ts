import { createContext } from 'react';
import { Step } from '../utils/constants';

export type CVFormStepperActionType = { type: 'next' | 'prev'; };
export type CVFormStepperState = { activeStep: Step; };
export type CVFormStepperDispatch = (action: CVFormStepperActionType) => void;
export type ContextType = { state: CVFormStepperState; dispatch: CVFormStepperDispatch; };

export const CVFormStepperContext = createContext<ContextType | undefined>(undefined);
