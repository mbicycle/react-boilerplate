import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import type { Tool } from 'common/models/User';

import { useSkillItem } from './utils/hooks';

interface SkillItemProps {
  id: string;
  name: string;
  tools: Tool[]
}

const SkillItem = function ({ id, name, tools }: SkillItemProps): JSX.Element {
  const {
    isLoading,
    onDeleteToolHandle,
    openHandle,
  } = useSkillItem({ id });

  return (
    <ProfiencyItem
      key={id}
      headText={name}
      bodyText={`Skills ammount: ${tools?.length}`}
      onDelete={onDeleteToolHandle}
      onClick={openHandle}
      isLoading={isLoading}
    />
  );
};

export default memo(SkillItem);
