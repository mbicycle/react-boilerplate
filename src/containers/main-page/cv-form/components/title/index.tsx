import { memo } from 'react';

import { FieldFormTitleWrapper, FieldSubTitleStyled, FieldTitleStyled } from './styled';
import { CVTitles } from '../../utils/constants';
import { useFormData } from '../../local-state/hooks';

const CVFormTitle = function (): JSX.Element {
  const { state } = useFormData();
  const { activeStep } = state;

  return (
    <FieldFormTitleWrapper>
      <FieldTitleStyled variant="h2">
        {CVTitles[activeStep].title}
      </FieldTitleStyled>
      <FieldSubTitleStyled variant="h6">
        {CVTitles[activeStep].description}
      </FieldSubTitleStyled>
    </FieldFormTitleWrapper>
  );
};

export default memo(CVFormTitle);
