import { useState, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  Grid, Typography,
  Tooltip, Box, Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import
ReactHookFormTextFieldOutlined
  from 'common/components/react-hook-forms/ReactHookFormTextFieldOutlined';
import { getKeyOf } from 'common/utils/helpers';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import { ProjectFieldValues } from '../utils/types';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import { ButtonText, CategoryAddText, tooltipText } from './utils/constants';

import { CategoriesTitleStyled, InfoIconStyled, SkillsToolsButtonStyled } from './utils/styled';
import SkillsToolsDialog from './SkillsToolsDialog';

const CategorySelection = function (
  { formValues }:{formValues: UseFormReturn<ProjectFieldValues>;},
): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  const [open, setOpen] = useState(false);
  const [readyText, setReadyText] = useState<string>('');

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (_: React.SyntheticEvent<unknown>, reason?: string): void => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  const handleReadyText = (text: string): void => {
    setReadyText(text);
  };

  if (isLoading) {
    return <CircularSpinner size="medium" color="primary" />;
  }

  return (
    <Grid item xs={12}>
      <Box display="inline-flex">
        <CategoriesTitleStyled variant="h5">{CategoryAddText.Title}</CategoriesTitleStyled>
        <Tooltip title={<Typography>{tooltipText}</Typography>}>
          <InfoIconStyled fontSize="medium" color="disabled" />
        </Tooltip>
      </Box>
      <Grid container>
        <Grid item container xs={6} wrap="nowrap">
          <ReactHookFormTextFieldOutlined
            control={formValues.control}
            label="Category"
            name={getKeyOf<ProjectFieldValues>('responsibilities')}
            type="text"
            variant="outlined"
          />
          <SkillsToolsButtonStyled variant="outlined" onClick={handleClickOpen}>
            {ButtonText.SkillsTools}
          </SkillsToolsButtonStyled>

        </Grid>
        <Button
          color="primary"
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
        >
          <AddCircleOutlineIcon fontSize="large" />
          &nbsp;Add
        </Button>
        <Grid item container xs={12}>
          <Typography sx={{ mt: 2 }} variant="body1">
            {readyText}
          </Typography>
        </Grid>
        <SkillsToolsDialog
          formValues={formValues}
          user={data}
          open={open}
          onClose={handleClose}
          onGetReadyText={handleReadyText}
        />
      </Grid>
    </Grid>
  );
};

export default memo(CategorySelection);
