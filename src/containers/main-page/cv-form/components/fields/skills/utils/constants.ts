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
  Name = 'tool'
}

export const enum TimeUsedInputText {
  Label = 'Time used (years)',
  Name = 'usedTime'
}

export const TOOLS: SkillModel[] = [
  {
    category: 'Mock category',
    tools: [
      { experience: 10, level: 'Advanced', name: 'JS' },
    ],
  },
];
