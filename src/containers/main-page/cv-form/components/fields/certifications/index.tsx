import { memo, useEffect } from 'react';
import { useQueryClient } from 'react-query';
import CircularSpinner from '../../../../../../common/components/circular-spinner/circular-spinner';
import AddProfiency from '../../../../../../common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';
import AddedCertificatesList from './components/addedSertificates/AddedCertificatesList';
import { QueryKey } from './lib/query-key';
import { DbUser } from '../../../../../../common/models/User';

const Certifications = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }
  return (
    <AddProfiency
      collection={data?.certificates}
      title="Certificate"
    >
      <AddedCertificatesList certificates={data?.certificates || []} />
    </AddProfiency>
  );
};

export default memo(Certifications);
