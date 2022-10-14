import { memo } from 'react';

import { IconButton, Link, Typography } from '@mui/material';

import GarbageIcon from 'common/icons/GarbageIcon';

import {
  DragIndicatorIconStyled, LeftSideWrapperStyled,
  LeveledLanguageItemStyled, TextContainerStyled,
} from './styled';
import CircularSpinner from '../circular-spinner/circular-spinner';

interface ProfiencyItem {
  headText: string;
  bodyText: string | JSX.Element | React.ReactNode;
  onDelete: (id?: string) => void;
  onClick?: () => void;
  isLoading?: boolean;
  link?: string | undefined;
}

const ProfiencyItem = function ({
  headText, bodyText, onDelete, onClick, isLoading, link,
}: ProfiencyItem): JSX.Element {
  const setIdHandle = (): void => {
    if (onClick) {
      onClick();
    }
  };

  const onDeleteEntryHandle = (): void => {
    onDelete();
  };
  return (
    <LeveledLanguageItemStyled>
      <DragIndicatorIconStyled fontSize="large" />
      <LeftSideWrapperStyled onClick={setIdHandle}>
        <TextContainerStyled>
          <Typography variant="body1">
            {headText}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
          >
            {bodyText}
          </Typography>
          <Typography
            component="div"
            variant="body2"
            color="text.secondary"
          >
            <Link href={link} underline="always" target="_blank">
              {link ? 'Go to certificate...' : null}
            </Link>
          </Typography>

        </TextContainerStyled>
      </LeftSideWrapperStyled>
      <IconButton onClick={onDeleteEntryHandle}>
        {isLoading ? <CircularSpinner size="tiny" color="primary" /> : <GarbageIcon color="primary" />}
      </IconButton>
    </LeveledLanguageItemStyled>
  );
};

export default memo(ProfiencyItem);
