import { Tool } from './Tool';

export interface Skill {
  _id: string;
  category: string;
  tools?: Tool[];
}
