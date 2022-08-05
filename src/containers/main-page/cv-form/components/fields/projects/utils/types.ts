import type { Project as UserProject, Skill, Tool } from 'common/models/User';

export type ProjectFieldValues = UserProject & {
  skill: Skill;
  tools: Tool[];
};
