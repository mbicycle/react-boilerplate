import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useSkillCollectionContext } from 'containers/main-page/cv-form/local-state/hooks';
import ToolItem from './ToolItem';
import { Tool } from '../../utils/models';

interface SkillItemProps {
  category:string;
  tools: Tool[] | undefined
}

const SkillItem = function ({ category, tools }: SkillItemProps): JSX.Element {
  const { dispatch } = useSkillCollectionContext();

  const onDeleteToolHandlee = (): void => {
    dispatch({ type: 'remove', skill: { category, tools } });
  };

  return (
    <ProfiencyItem
      key={category}
      headText={category}
      bodyText={
        tools?.map((tool) => <ToolItem key={tool.id} tool={tool} />)
      }
      onDelete={onDeleteToolHandlee}
    />
  );
};

export default memo(SkillItem);
