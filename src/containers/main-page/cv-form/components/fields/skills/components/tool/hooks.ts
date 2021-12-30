import { useSkillContext, useToolContext } from 'containers/main-page/cv-form/local-state/hooks';
import { ToolType } from 'containers/main-page/cv-form/local-state/ToolContext';
import { useCallback, useEffect, useState } from 'react';
import { Tool } from '../../utils/models';

export const useMappingSkills = ({ tools }: { tools: Tool[] | undefined; }): VoidFunction => {
  const { dispatch } = useSkillContext();
  const { state: toolState } = useToolContext();

  const [toolsState, setToolsState] = useState<ToolType[] | undefined>(tools);

  useEffect(() => {
    if (tools?.length) {
      setToolsState(() => {
        const copy = [...tools];
        const toolIndex = copy.findIndex((t) => t.id === toolState.id);
        if (toolIndex !== -1) copy[toolIndex] = toolState;

        return copy;
      });
    }
  }, [toolState, tools]);

  const onSaveToolsHandle = useCallback((): void => {
    dispatch({ type: 'update-tools', newTools: toolsState });

    // TODO: Resolve bug with saving items.
    console.log(toolsState);
  }, [dispatch, toolsState]);

  return onSaveToolsHandle;
};
