import { Level } from './level.enum';

export interface FormLanguage {
  name: string;
  level: string;
}

export type LevelType = { name: `${Level}`; };
