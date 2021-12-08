import { memo } from 'react';

import { FieldFormTitleWrapper, FieldSubTitleStyled, FieldTitleStyled } from './styled';
import { CVTitles } from '../../utils/constants';

interface CVFormTitleProps {
    activeStep: number;
}

const CVFormTitle = function ({ activeStep }: CVFormTitleProps): JSX.Element {
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
