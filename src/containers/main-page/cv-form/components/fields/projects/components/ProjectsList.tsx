import { Category, DbUser, Project } from 'common/models/User';
import { memo } from 'react';
import ProjectItem from './ProjectItem';

// interface ProjectItemProps {
//   id: string;
//   title: string;
//   from: string;
//   to: string;
//   categories: Category[];
// }

const ProjectsList = function (
  { projects }: { projects: Project[] },
): JSX.Element {
  return (
    <>
      qwe
      {projects?.map(({
        id, title, from, to, categories, role, description, link, responsibilities, teamSize,
      }) => (
        <ProjectItem
          key={id}
          title={title}
          from={from}
          to={to}
          categories={categories || []}
          id={id}
          role={role}
          description={description}
          link={link}
          responsibilities={responsibilities}
          teamSize={teamSize}
        />
      ))}
    </>
  );
};

export default memo(ProjectsList);

//  return (
//     <>
//       {projects.map((
//         {
//           id, title, from, to, categories,
//         }: any,
//       ) => (
//         <ProjectItem
//           key={id}
//           title={title}
//           id={id}
//           from={from}
//           to={to}
//           categories={categories}
//         />
//       ))}
//     </>
//   );
// };
