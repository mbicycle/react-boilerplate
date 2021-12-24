import { memo } from 'react';

import { IconButton, Typography } from '@mui/material';

import GarbageIcon from 'common/icons/GarbageIcon';

import { useLanguageContext } from '../../local-state/hooks';

import {
  DragIndicatorIconStyled, LeftSideWrapperStyled,
  LeveledLanguageItemStyled, TextContainerStyled,
} from './styled';

const LeveledLanguageItem = function ({
  language, level,
}: {language: string, level: string}): JSX.Element {
  const { dispatch } = useLanguageContext();

  const onDeleteLanguageHandle = (): void => {
    dispatch(
      {
        type: 'remove',
        leveledLanguage: {
          language,
          level,
        },
      },
    );
  };

  return (
    <LeveledLanguageItemStyled>
      <DragIndicatorIconStyled fontSize="large" />
      <LeftSideWrapperStyled>
        <TextContainerStyled>
          <Typography variant="body1">
            {language}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {level}
          </Typography>
        </TextContainerStyled>
      </LeftSideWrapperStyled>
      <IconButton onClick={onDeleteLanguageHandle}>
        <GarbageIcon color="primary" />
      </IconButton>
    </LeveledLanguageItemStyled>
  );
};

export default memo(LeveledLanguageItem);
