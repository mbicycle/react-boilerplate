import { Category } from 'common/models/User';
import { NewCategoryActionOperationType, NewCategoryState } from './NewCategoryContext';

export type PartialCategoryModel = Partial<Category>;
export type ReturnPartialCategoryModelType = () => PartialCategoryModel;
export type NewSkillReducerReturnType = {
  [key in `${NewCategoryActionOperationType}`]: NewCategoryState | ReturnPartialCategoryModelType;
};
