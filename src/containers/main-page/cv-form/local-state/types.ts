import { Skill } from 'common/models/User';
import { SkillActionOperationType, SkillState } from './SkillContext';

export type PartialSkillModel = Partial<Skill>;
export type ReturnPartialSkillModelType = () => PartialSkillModel;

export type SkillReducerReturnType = {
  [key in `${SkillActionOperationType}`]: SkillState | ReturnPartialSkillModelType;
};
