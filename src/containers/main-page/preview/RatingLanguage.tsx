import React from 'react';
import { Rating } from '@mui/material';

import { Labels } from '../cv-form/components/fields/languages/components/utils/level.enum';

import { BoxRatingStyled, RectangleBlueIconStyled, RectangleIconStyled } from '../styled';

const RatingLanguage = function ({ level }: { level: keyof typeof Labels }): JSX.Element {
  return (
    <BoxRatingStyled>
      <Rating
        name="hover-feedback"
        value={Labels[level]}
        max={6}
        precision={1}
        readOnly
        icon={(
          <RectangleBlueIconStyled
            fontSize="large"
          />
        )}
        emptyIcon={(
          <RectangleIconStyled
            fontSize="large"
          />
        )}
      />
    </BoxRatingStyled>
  );
};

export default React.memo(RatingLanguage);
