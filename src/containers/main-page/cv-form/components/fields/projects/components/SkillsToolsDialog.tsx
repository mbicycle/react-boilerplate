import { useState, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  DialogActions,
  DialogTitle, DialogContent,
  FormControl, InputLabel, OutlinedInput,
  MenuItem, SelectChangeEvent, Dialog, Button, Grid, ListItemText, Checkbox,
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
  // const [tool, setTool] = useState<Tool | undefined>();
  const [selectedTools, setSelectedTools] = useState<Tool[] | undefined>([] as []);
  const { onChange, ...rest } = formValues.register('categories');

  console.log(formValues.getValues());
  console.log(category);
  console.log(skill);
  console.log(selectedTools);

  const handleCategoryChange = (event: SelectChangeEvent<typeof category | unknown>): void => {
    const categorySelected = user?.categories.find((c) => {
      if (c.name === event.target.value) {
        return c;
      }
      return null;
    });
    setCategory(categorySelected);
    onChange(event);
  };

  const handleSkillChange = (event: SelectChangeEvent<typeof skill | unknown>): void => {
    setSkill(category?.skills.find((s) => {
      if (s.name === event.target.value) {
        return s;
      }
      return null;
    }));

    onChange(event);
  };

  const handleToolsChange = (event: SelectChangeEvent<Tool[] | any>): void => {
    const m: Tool = {
      name: event.target.value,
      id: event.target.value,
      experience: 5,
      level: 'Beginner',
    };
    setSelectedTools([m]);
    onChange(event);
  };
  console.log(selectedTools);

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
              value={selectedTools || ''}
              onChange={handleToolsChange}
              control={formValues.control}
              name={getKeyOf<ProjectFieldValues>('tools')}
              disabled={!category?.name && !skill?.name}
              input={<OutlinedInput label={CategoryAddText.Tool} />}
              multiple
              renderValue={(selected: Tool[] | any): string => selected.map((t: { name: string; }) => t.name).join(', ')}
            >
              {skill?.tools.map(({ id, name }) => (
                <MenuItem key={id} value={name}>
                  <ListItemText primary={name} />
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
