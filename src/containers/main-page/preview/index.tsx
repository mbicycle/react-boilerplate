import { useIsFetching } from 'react-query';
import { useEffect } from 'react';
import { useUserFromDb } from '../cv-form/components/fields/personal-information/lib/query-hooks';
import Wrapper from './Wrapper';

const Preview = function (): JSX.Element {
  const { refetch } = useUserFromDb();
  const isFetching = useIsFetching('db-user');
  useEffect(() => {
    if (isFetching) { refetch(); }
  }, [refetch, isFetching]);

  return (
    <Wrapper />

  );
};

export default Preview;
