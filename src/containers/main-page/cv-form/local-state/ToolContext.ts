import React from 'react';
import { Tool } from '../components/fields/skills/utils/models';

export type ToolType = Tool;

export type ToolAction = {
  type: 'add' | 'remove',
  tool: ToolType;
};
export type ToolState = ToolType[];
export type ToolDispatch = (action: ToolAction) => void;
export type LocationContextType = { state: ToolState; dispatch: ToolDispatch; };

export const ToolContext = React.createContext<{
  state: ToolState,
  dispatch: ToolDispatch;
} | undefined>(undefined);
