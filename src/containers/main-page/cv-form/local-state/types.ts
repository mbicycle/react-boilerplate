import { SkillModel } from '../components/fields/skills/utils/models';
import { SkillActionOperationType, SkillState } from './SkillContext';

export type PartialSkillModel = Partial<SkillModel>;
export type ReturnPartialSkillModelType = () => PartialSkillModel;

export type SkillReducerReturnType = {
  [key in `${SkillActionOperationType}`]: SkillState | ReturnPartialSkillModelType;
};
