import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import { Project } from 'common/models/User';
import dayjs from 'dayjs';
import { memo } from 'react';

type CategoryItemProps = {
  id: string;
  name: string;
  // link: string;
};

const CategoryItem = function ({
  id, name,
}: CategoryItemProps): JSX.Element {
  const onDeleteHandle = (): void => {
    console.log('delete');
  };

  return (
    <ProfiencyItem
      headText={name}
      bodyText={id ? dayjs(id).format('DD.MM.YYYY') : ''}
      onDelete={onDeleteHandle}
    // link={link}
    />
  );
};

export default memo(CategoryItem);
