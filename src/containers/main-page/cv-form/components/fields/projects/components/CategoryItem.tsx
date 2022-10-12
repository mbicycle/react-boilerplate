import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

type CategoryItemProps = {
  category: string;
  skill: string;
  tool: string[];
  onDelete: () => void;
  onClick: () => void;
}

const CategoryItem = function ({
  category, skill, tool, onDelete, onClick,
}: CategoryItemProps): JSX.Element {
  const tools = tool?.length ? tool.join(', ') : '';

  const itemHeadText = (`${category} : ${skill} ( ${tools} )`);

  return (
    <ProfiencyItem
      headText={itemHeadText}
      bodyText
      onDelete={onDelete}
      onClick={onClick}
    />
  );
};

export default memo(CategoryItem);
