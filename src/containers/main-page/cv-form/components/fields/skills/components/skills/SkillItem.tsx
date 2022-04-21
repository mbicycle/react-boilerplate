import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import type { Tool } from 'common/models/User';

import ToolItem from './ToolItem';
import { useSkillItem } from './utils/hooks';

interface SkillItemProps {
  name: string;
  tools: Tool[]
}

const SkillItem = function ({ name, tools }: SkillItemProps): JSX.Element {
  const {
    isLoading,
    onDeleteToolHandlee,
    openHandle,
  } = useSkillItem({ name, tools });

  return (
    <ProfiencyItem
      key={name}
      headText={name}
      bodyText={
        tools?.map((tool) => <ToolItem key={tool.name} tool={tool} />)
      }
      onDelete={onDeleteToolHandlee}
      onClick={openHandle}
      isLoading={isLoading}
    />
  );
};

export default memo(SkillItem);
