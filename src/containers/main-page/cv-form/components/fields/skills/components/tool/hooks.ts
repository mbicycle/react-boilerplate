import { useEffect } from 'react';
import isEqual from 'lodash/isEqual';

import { useForm } from 'common/utils/hooks';
import { useSkillContext } from 'containers/main-page/cv-form/local-state/hooks';

import { Tool as ToolType } from 'common/models/User';

type UpdateToolReturnType = { onToolChange: (e: unknown) => void; };

export const useUpdateTool = (
  { toolData }: { toolData: ToolType; },
): UpdateToolReturnType => {
  const { dispatch } = useSkillContext();

  const { values, handleChange } = useForm<ToolType>({
    // id: toolData.name,
    name: toolData.name || '',
    level: toolData.level || '',
    experience: toolData.experience || 0,
  });

  useEffect(() => {
    if (!isEqual(toolData, values)) {
      dispatch({
        type: 'update-tool',
        tool: { ...toolData, ...values },
      });
    }
  }, [dispatch, toolData, values]);

  return { onToolChange: handleChange };
};
