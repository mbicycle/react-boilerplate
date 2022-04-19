import { Tool } from 'common/models/User';

export interface SkillModel {
  category: string;
  tools: Tool[];
}
