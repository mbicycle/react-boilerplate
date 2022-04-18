import { memo } from 'react';

import { IconButton, Typography } from '@mui/material';

import GarbageIcon from 'common/icons/GarbageIcon';

import {
  DragIndicatorIconStyled, LeftSideWrapperStyled,
  LeveledLanguageItemStyled, TextContainerStyled,
} from './styled';

interface ProfiencyItem {
  headText: string;
  bodyText: string | JSX.Element | React.ReactNode;
  onDelete: (id?: string) => void;
  onClick?: () => void;
}

const ProfiencyItem = function ({
  headText, bodyText, onDelete, onClick,
}: ProfiencyItem): JSX.Element {
  const setSkillIdHandle = (): void => {
    if (onClick) {
      onClick();
    }
  };

  const onDeleteLanguageHandle = (): void => {
    onDelete();
  };

  return (
    <LeveledLanguageItemStyled>
      <DragIndicatorIconStyled fontSize="large" />
      <LeftSideWrapperStyled onClick={setSkillIdHandle}>
        <TextContainerStyled>
          <Typography variant="body1">
            {headText}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {bodyText}
          </Typography>
        </TextContainerStyled>
      </LeftSideWrapperStyled>
      <IconButton onClick={onDeleteLanguageHandle}>
        <GarbageIcon color="primary" />
      </IconButton>
    </LeveledLanguageItemStyled>
  );
};

export default memo(ProfiencyItem);
