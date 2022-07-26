import { v4 as uuidv4 } from 'uuid';

import type { Skill } from 'common/models/User';
import type { NewCategoryAction, NewCategoryState } from './NewCategoryContext';

export default class SkillManager {
  private skills: Skill[] = [];

  private state: NewCategoryState;

  private action: NewCategoryAction;

  constructor(state: NewCategoryState, skills: Skill[], action: NewCategoryAction) {
    this.skills = skills;
    this.state = state;
    this.action = action;
  }

  public addSkill(): NewCategoryState {
    this.skills.push({ id: uuidv4(), name: '', tools: [] });

    return { ...this.state, skills: this.skills };
  }

  public removeSkill(): NewCategoryState {
    if (this.state.skills?.length) {
      const selectedToolIndex = this.state.skills.findIndex((skill) => skill.id === this.action.skill?.id);
      if (selectedToolIndex !== -1) {
        this.state.skills.splice(selectedToolIndex, 1);
      }
    }

    return { ...this.state };
  }

  public updateSkillName(): NewCategoryState {
    const skillsCopy = [...this.state.skills as Skill[]];

    const skill = skillsCopy.find((s) => s.id === this.action.skillId);
    const skillIndex = skillsCopy.findIndex((s) => s.id === this.action.skillId);

    if (skillIndex !== -1) {
      const updatedSkill = { ...skill, name: this.action.skillName } as Skill;
      skillsCopy[skillIndex] = updatedSkill;
    }

    return { ...this.state, skills: skillsCopy };
  }
}
