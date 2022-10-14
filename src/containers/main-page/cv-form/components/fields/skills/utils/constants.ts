export const enum Text {
  Category = 'Category',
  AddTool = 'Add a tool',
  AddSkill = 'Add a skill',
  Tool = 'Tool',
  Skill = 'Skill',
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
export const DEBOUNCE_TIMEOUT = 300 as const;
