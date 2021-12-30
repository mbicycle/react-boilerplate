import { SkillModel } from './models';

export const enum Text {
  Category = 'Category',
  AddTool = 'Add a tool',
  Tool = 'Tool',
  Delete = 'Delete'
}

export const enum CategoryInputText {
  Label = 'Title Category',
  Name = 'titleCategory'
}

export const enum ToolInputText {
  Label = 'Skill/tool',
  Name = 'name'
}

export const enum TimeUsedInputText {
  Label = 'Time used (years)',
  Name = 'experience'
}

export const LEVEL_LABEL = 'Level' as const;

export const TOOLS: SkillModel[] = [
  {
    category: 'Mock category',
    tools: [
      {
        id: 'sdfsdfsdfvsdfr', experience: 10, level: 'Advanced', name: 'JS',
      },
    ],
  },
];
