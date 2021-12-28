export interface SkillModel {
  category: string;
  tools: Tool[];
}

interface Tool {
  name: string;
  level: string;
  experience: number;
}
