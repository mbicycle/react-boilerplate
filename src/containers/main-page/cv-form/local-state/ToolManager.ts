import { v4 as uuidv4 } from 'uuid';

import type { Skill, Tool } from 'common/models/User';
import type { NewCategoryAction, NewCategoryState } from './NewCategoryContext';

export default class ToolManager {
  private skill;

  private state;

  private action: NewCategoryAction;

  private skills: Skill[];

  private tools: Tool[];

  constructor(
    state: NewCategoryState,
    skill: Skill,
    action: NewCategoryAction,
  ) {
    this.skill = skill;
    this.state = state;
    this.action = action;
    this.skills = state.skills || [];
    this.tools = this.skills.find((s) => s.id === this.action.skillId)?.tools || [];
  }

  public addTool(): NewCategoryState {
    this.skill.tools = [...this.skill.tools, {
      id: uuidv4(), name: '', level: '', experience: 0,
    }];
    return { ...this.state };
  }

  public updateTool(): NewCategoryState {
    if (this.tools?.length) {
      const selectedToolIndex = this.tools.findIndex((t) => t.id === this.action.tool?.id);

      if (selectedToolIndex !== -1 && this.action.tool) {
        this.tools[selectedToolIndex] = { ...this.action.tool };
      }
    }

    return { ...this.state };
  }

  removeTool(): NewCategoryState {
    if (this.tools?.length) {
      const selectedToolIndex = this.tools.findIndex((tool) => tool.id === this.action.tool?.id);
      if (selectedToolIndex !== -1) {
        this.tools.splice(selectedToolIndex, 1);
      }
    }

    return { ...this.state };
  }
}
