import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { memo } from 'react';

const CategoryItem = function ({
  category, skill, tool, onDelete,
}: any): JSX.Element {
  const tools = tool?.length ? tool.join(', ') : '';
  return (
    <ProfiencyItem
      headText={`${category} : ${skill} ( ${tools} )`}
      bodyText
      onDelete={onDelete}
    />
  );
};

export default memo(CategoryItem);
