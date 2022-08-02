import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Category, Project } from 'common/models/User';
import dayjs from 'dayjs';
import { memo } from 'react';

const CategoryItem = function ({ category, skill, tool } : any): JSX.Element {
  const onDeleteHandle = (): void => {
    console.log('I am from CategoryItem');
  };
  return (
    <ProfiencyItem
      onDelete={onDeleteHandle}
      headText={`${category} - ${skill}`}
      bodyText={tool}
    />
  );
};

export default memo(CategoryItem);
