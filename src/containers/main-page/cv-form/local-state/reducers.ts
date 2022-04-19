import { Tool } from 'common/models/User';
import { SkillModel } from '../components/fields/skills/utils/models';

import { SkillCollectionAction, SkillCollectionState } from './SkillCollectionContext';
import { SkillAction, SkillState } from './SkillContext';
import { ReturnPartialSkillModelType, SkillReducerReturnType } from './types';

const DELETE_COUNT = 1 as const;

export function skillReducer(state: SkillState, action: SkillAction): SkillState {
  const copy = { ...state };
  const tools = [...copy?.tools || []] as Tool[];

  function addTool(): SkillState {
    tools.push({
      name: '', level: '', experience: 0,
    });
    return { ...state, tools };
  }

  function updateTool(): SkillState {
    if (copy.tools?.length) {
      const selectedToolIndex = copy.tools.findIndex((tool) => tool.name === action.tool?.name);

      if (selectedToolIndex !== -1 && action.tool) {
        copy.tools[selectedToolIndex] = { ...action.tool };
      }
    }

    return { ...state, tools: copy.tools };
  }

  function removeTool(): SkillState {
    if (copy.tools?.length) {
      const selectedToolIndex = copy.tools.findIndex((tool) => tool.name === action.tool?.name);
      if (selectedToolIndex !== -1) {
        copy.tools.splice(selectedToolIndex, DELETE_COUNT);
      }
    }

    return copy;
  }

  const skill = {
    'add-category': { category: action.skill?.category, tools: copy?.tools },
    'add-tool': addTool,
    'update-tools': { ...state, ...action.tools },
    'update-tool': updateTool,
    'remove-tool': removeTool,
  } as SkillReducerReturnType;

  if (typeof skill[action.type] === 'function') {
    return (skill[action.type] as ReturnPartialSkillModelType)();
  }
  return skill[action.type] as SkillState;
}

export function skillCollectionReducer(
  state: SkillCollectionState,
  action: SkillCollectionAction,
): SkillCollectionState {
  const copy = [...state];

  if (action.type === 'add') {
    copy.push(action.skill as SkillModel);
  } else {
    const langIndex = copy.findIndex((x) => x.category === action.skill.category);
    copy.splice(langIndex, DELETE_COUNT);
  }

  return copy;
}
