import { Skill } from 'common/models/User';
import { CategoryActionOperationType, CategoryState } from './CategoryContext';

export type PartialSkillModel = Partial<Skill>;
export type ReturnPartialSkillModelType = () => PartialSkillModel;

export type SkillReducerReturnType = {
  [key in `${CategoryActionOperationType}`]: CategoryState | ReturnPartialSkillModelType;
};
