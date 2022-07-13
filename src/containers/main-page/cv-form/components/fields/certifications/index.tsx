import { memo } from 'react';

import CircularSpinner from '../../../../../../common/components/circular-spinner/circular-spinner';
import AddProfiency from '../../../../../../common/components/add-pattern';
import { useUserFromDb } from '../personal-information/lib/query-hooks';
import AddedCertificatesList from './components/addedSertificates/AddedCertificatesList';

const Certifications = function (): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  if (isLoading) {
    return <CircularSpinner size="large" color="primary" />;
  }
  return (
    <AddProfiency
      collection={data?.certificates || []}
      title="Certificate"
    >
      <AddedCertificatesList certificates={data?.certificates || []} />
    </AddProfiency>
  );
};

export default memo(Certifications);
