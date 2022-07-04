import { memo, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import CircularSpinner from '../../../../../../common/components/circular-spinner/circular-spinner';
import AddProfiency from '../../../../../../common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';
import { QueryKey } from '../languages/lib/query-key';
import { getAllLanguages } from '../languages/lib/api';

const Certifications = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(QueryKey.Languages, getAllLanguages);
  }, [queryClient]);

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }
  return (
    <AddProfiency
      collection={data?.certificates || []}
      title="Certificate"
    >
      {!!data?.certificates?.length && <div />}
    </AddProfiency>
  );
};

export default memo(Certifications);
