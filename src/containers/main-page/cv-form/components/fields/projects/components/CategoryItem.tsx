import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Category, Project } from 'common/models/User';
import dayjs from 'dayjs';
import { memo } from 'react';

const CategoryItem = function ({ category, skill, tool } : any): JSX.Element {
  const onDeleteHandle = (): void => {
    console.log('I am from CategoryItem');
  };
  const tools = tool?.length ? tool.join(', ') : '';
  return (
    <ProfiencyItem
      onDelete={onDeleteHandle}
      headText={`${category} - ${skill}`}
      bodyText={`( ${tools} )`}
    />
  );
};

export default memo(CategoryItem);
