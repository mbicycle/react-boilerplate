export interface SkillModel {
  category: string;
  tools: Tool[];
}

export interface Tool {
  name: string;
  level: string;
  experience: number;
}
