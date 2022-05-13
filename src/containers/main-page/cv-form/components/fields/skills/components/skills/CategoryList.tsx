import { memo } from 'react';

import { Category } from 'common/models/User';

import CategoryItem from './CategoryItem';

const CategoryList = function ({ categories }: {categories: Category[]}) : JSX.Element | null {
  return (
    <>
      {categories.map(({ id, skills, name }) => (
        <CategoryItem
          id={id}
          key={id}
          name={name}
          skills={skills || []}
        />
      ))}
    </>
  );
};

export default memo(CategoryList);
