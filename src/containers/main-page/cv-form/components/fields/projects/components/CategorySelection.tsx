import { useState, memo, useEffect } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  Grid, Typography,
  Tooltip, Box, Button,
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import CircularSpinner from 'common/components/circular-spinner/circular-spinner';

import { ProjectFieldValues } from '../utils/types';
import { useUserFromDb } from '../../personal-information/lib/query-hooks';
import { ButtonText, CategoryAddText, tooltipText } from './utils/constants';

import { CategoriesTitleStyled, InfoIconStyled } from './utils/styled';
import SkillsToolsDialog from './SkillsToolsDialog';
import CategoryItem from './CategoryItem';

const CategorySelection = function (
  { formValues }:{formValues: UseFormReturn<ProjectFieldValues>;},
): JSX.Element {
  const { data, isLoading } = useUserFromDb();

  const [open, setOpen] = useState(false);

  const handleClickOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (_: React.SyntheticEvent<unknown>, reason?: string): void => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };

  if (isLoading) {
    return <CircularSpinner size="medium" color="primary" />;
  }
  console.log(formValues.getValues());

  return (
    <Grid item xs={12}>
      <Box display="inline-flex">
        <CategoriesTitleStyled variant="h5">{CategoryAddText.Title}</CategoriesTitleStyled>
        <Tooltip title={<Typography>{tooltipText}</Typography>}>
          <InfoIconStyled fontSize="medium" color="disabled" />
        </Tooltip>
      </Box>
      <Grid container>
        <Grid item container xs={12}>
          <Typography sx={{ mt: 2 }} variant="body1">
            {formValues.getValues().categories ? (
              <CategoryItem
                category={formValues.getValues().categories}
                skill={formValues.getValues().skill}
                tool={formValues.getValues().tools}
              />
            ) : null}
          </Typography>
        </Grid>
        <Button
          color="primary"
          variant="outlined"
          sx={{ marginLeft: 'auto' }}
          onClick={handleClickOpen}
        >
          <AddCircleOutlineIcon fontSize="large" />
          &nbsp;
          {ButtonText.Add}
        </Button>

        <SkillsToolsDialog
          formValues={formValues}
          user={data}
          open={open}
          onClose={handleClose}
        />
      </Grid>
    </Grid>
  );
};

export default memo(CategorySelection);
