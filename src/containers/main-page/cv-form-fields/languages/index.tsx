import React, { memo } from 'react';

interface LanguagesProps {
    value: { [key: string]: string };
}

const Languages = function ({ value }: LanguagesProps): JSX.Element {
  return (
    <div>
      Languages Form Part
    </div>
  );
};

export default memo(Languages);
