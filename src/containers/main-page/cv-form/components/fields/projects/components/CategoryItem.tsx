import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { memo } from 'react';

type CategoryItemProps = {
  category: string;
  skill: string;
  tool: string[];
  onDelete: () => void;
}

const CategoryItem = function ({
  category, skill, tool, onDelete,
}: CategoryItemProps): JSX.Element {
  const tools = tool?.length ? tool.join(', ') : '';

  const itemHeadText = (`${category} : ${skill} ( ${tools} )`);

  return (
    <ProfiencyItem
      headText={itemHeadText}
      bodyText
      onDelete={onDelete}
    />
  );
};

export default memo(CategoryItem);
