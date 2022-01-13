import { Level } from './level.enum';
import { LevelType } from './types';

export const ADD_INPUT_LANGUAGE_NAME = 'name' as const;
export const BUTTON_TEXT = 'Add one' as const;

export const LEVELS: LevelType[] = [
  { name: Level.Beginner },
  { name: Level.PreIntermediate },
  { name: Level.Intermediate },
  { name: Level.UpperIntermediate },
  { name: Level.Advanced },
  { name: Level.Proficiency },
];
