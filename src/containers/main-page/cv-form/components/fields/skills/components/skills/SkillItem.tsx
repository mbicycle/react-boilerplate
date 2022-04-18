import { memo } from 'react';

import ProfiencyItem from 'common/components/profiency/ProfiencyItem';

import { useNavigate } from 'react-router-dom';
import { storage } from 'containers/authentication/utils/storage';
import ToolItem from './ToolItem';
import { Tool } from '../../utils/models';

interface SkillItemProps {
  id: string;
  category:string;
  tools: Tool[]
}

const SkillItem = function ({ id, category, tools }: SkillItemProps): JSX.Element {
  // const { dispatch } = useSkillCollectionContext();
  const navigate = useNavigate();

  const onDeleteToolHandlee = (): void => {
    // dispatch({ type: 'remove', skill: { category, tools } });
  };

  const openHandle = (): void => {
    storage.setSkillId(id);
    navigate('edit');
  };

  return (
    <ProfiencyItem
      key={category}
      headText={category}
      bodyText={
        tools?.map((tool) => <ToolItem key={tool.id} tool={tool} />)
      }
      onDelete={onDeleteToolHandlee}
      onClick={openHandle}
    />
  );
};

export default memo(SkillItem);