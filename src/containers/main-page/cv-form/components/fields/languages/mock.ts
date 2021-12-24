export enum Level {
  Beginner = 'Beginner',
  PreIntermediate = 'Pre-Intermediate',
  Intermediate = 'Intermediate',
  UpperIntermediate = 'Upper-Intermediate',
  Advanced = 'Advanced',
  Proficiency = 'Proficiency'
}

export interface Language {
  name: string;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
type LevelType = 'Beginner' | 'Pre-intermediate'
  | 'Intermediate' | 'Upper-Intermediate'
  | 'Advanced' | 'Proficiency';

export const LANGUAGES: Language[] = [
  {
    name: 'English',
  }, {
    name: 'Turkish',
  }, {
    name: 'Spanish',
  }, {
    name: 'Italian',
  },
];

export const LEVELS: Language[] = [
  {
    name: Level.Beginner,
  },
  {
    name: Level.PreIntermediate,
  },
  {
    name: Level.Intermediate,
  },
  {
    name: Level.UpperIntermediate,
  },
  {
    name: Level.Advanced,
  },
  {
    name: Level.Proficiency,
  },
];
