import { useState, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  DialogActions,
  DialogTitle, DialogContent,
  FormControl, InputLabel, OutlinedInput,
  MenuItem, SelectChangeEvent, Dialog, Button, Grid,
} from '@mui/material';

import { getKeyOf } from 'common/utils/helpers';

import ReactHookFormSelect from 'common/components/react-hook-forms/ReactHookFormSelect';
import type {
  Category, DbUser, Skill, Tool,
} from 'common/models/User';

import { ProjectFieldValues } from '../utils/types';
import { ButtonText, CategoryAddText } from './utils/constants';

interface SkillsToolsDialogProps {
  formValues: UseFormReturn<ProjectFieldValues>;
  user: DbUser | undefined
  open: boolean;
  onClose: (event: React.SyntheticEvent<unknown>, reason?: string) => void
}

const SkillsToolsDialog = function ({
  formValues,
  user,
  open,
  onClose,
}: SkillsToolsDialogProps): JSX.Element {
  const [category, setCategory] = useState<Category | undefined>();
  const [skill, setSkill] = useState<Skill | undefined>();
  const [tool, setTool] = useState<Tool | undefined>();

  const { onChange, ...rest } = formValues.register('categories');

  const handleCategoryChange = (event: SelectChangeEvent<typeof skill | unknown>): void => {
    setCategory(user?.categories.find((c) => c.name === event.target.value));
    onChange(event);
  };

  const handleSkillChange = (event: SelectChangeEvent<typeof skill | unknown>): void => {
    setSkill(category?.skills.find((s) => s.name === event.target.value));
    onChange(event);
  };

  const handleToolChange = (event: SelectChangeEvent<typeof tool | unknown>): void => {
    setTool(skill?.tools.find((t) => t.name === event.target.value));
    onChange(event);
  };

  return (
    <Dialog disableEscapeKeyDown open={open} onClose={onClose}>
      <DialogTitle>{CategoryAddText.DialogTitle}</DialogTitle>
      <DialogContent>
        <Grid container rowGap={4} sx={{ minWidth: 420 }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel htmlFor="category-dialog">{CategoryAddText.Category}</InputLabel>
            <ReactHookFormSelect
              {...rest}
              id="category-dialog"
              onChange={handleCategoryChange}
              name={getKeyOf<ProjectFieldValues>('categories')}
              control={formValues.control}
              input={<OutlinedInput label={CategoryAddText.Category} />}
            >
              {user?.categories.map((c) => (
                <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>
              ))}
            </ReactHookFormSelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="skill-dialog">{CategoryAddText.Skill}</InputLabel>
            <ReactHookFormSelect
              {...rest}
              id="skill-dialog"
              value={skill?.name || ''}
              onChange={handleSkillChange}
              name={getKeyOf<ProjectFieldValues>('skill')}
              control={formValues.control}
              disabled={!category?.name}
              input={<OutlinedInput label={CategoryAddText.Skill} />}
            >
              {category?.skills.map((s) => (
                <MenuItem key={s.id} value={s.name}>{s.name}</MenuItem>
              ))}
            </ReactHookFormSelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="tool-dialog">{CategoryAddText.Tool}</InputLabel>
            <ReactHookFormSelect
              {...rest}
              id="tool-dialog"
              value={tool?.name || ''}
              onChange={handleToolChange}
              control={formValues.control}
              name={getKeyOf<ProjectFieldValues>('tool')}
              disabled={!category?.name && !skill?.name}
              input={<OutlinedInput label={CategoryAddText.Tool} />}
            >
              {skill?.tools.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  {name}
                </MenuItem>
              ))}
            </ReactHookFormSelect>
          </FormControl>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>{ButtonText.Cancel}</Button>
        <Button variant="contained" onClick={onClose}>{ButtonText.Ok}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(SkillsToolsDialog);
