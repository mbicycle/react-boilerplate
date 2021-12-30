import React from 'react';
import { Tool } from '../components/fields/skills/utils/models';

export type ToolType = Tool;

export type ToolAction = {
  type: 'update';
  tool: ToolType;
};
export type ToolState = ToolType;
export type ToolDispatch = (action: ToolAction) => void;
export type ToolContextType = { state: ToolState; dispatch: ToolDispatch; };

export const ToolContext = React.createContext<{
  state: ToolState,
  dispatch: ToolDispatch,
} | undefined>(undefined);
