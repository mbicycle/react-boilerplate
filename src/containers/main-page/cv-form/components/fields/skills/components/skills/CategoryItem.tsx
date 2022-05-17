import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import type { Skill } from 'common/models/User';

import { useCategoryItem } from './utils/hooks';

interface SkillItemProps {
  id: string;
  name: string;
  skills: Skill[]
}

const CategoryItem = function ({ id, name, skills }: SkillItemProps): JSX.Element {
  const {
    isLoading,
    onDeleteToolHandle,
    openHandle,
  } = useCategoryItem({ id, skills });

  return (
    <ProfiencyItem
      key={name}
      headText={name}
      bodyText={`Skills ammount: ${skills.length}`}
      onDelete={onDeleteToolHandle}
      onClick={openHandle}
      isLoading={isLoading}
    />
  );
};

export default memo(CategoryItem);
