import { memo } from 'react';
import ProfiencyItem from 'common/components/profiency/ProfiencyItem';
import dayjs from 'dayjs';
import { Category, Project } from 'common/models/User';

interface ProjectItemProps extends Project {
  id: string;
  title: string;
  from: string;
  to: string;
  categories: Category[];
}

const ProjectItem = function ({
  title, from, to, categories, id,
}: Project): JSX.Element {
  const date = dayjs(from).format('MMM YYYY');
  const toDate = dayjs(to).format('MMM YYYY');
  const onDelete = (): void => {
    console.log('delete');
  };
  console.log(title, from, to, categories);
  return (
    <ProfiencyItem
      headText={title}
      bodyText={`${date} - ${toDate}`}
      onDelete={onDelete}

    // onClick={ }
    // isLoading={ }
    // link={ }
    />
  );
};
//   const onDeleteHandle = (): void => {
//     console.log('delete');
//   };
//   const projectLength = dayjs(to).diff(dayjs(from).format('DD.MM.YYYY'), 'day');
//   return (
//     <ProfiencyItem
//       onDelete={onDeleteHandle}
//       headText="hhj"
//       bodyText={projectLength}
//     />
//   );
// };

//   return (
//     <ProfiencyItem
//       headText={title}
//       bodyText={from ? projectLength : ''}
//       onDelete={onDeleteHandle}
//     />
//   );
// };

export default memo(ProjectItem);
