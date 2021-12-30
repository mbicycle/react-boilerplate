export interface SkillModel {
  category: string;
  tools: Tool[];
}

export interface Tool {
  id: string;
  name: string;
  level: string;
  experience: number;
}
