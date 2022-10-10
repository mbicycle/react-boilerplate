import { useState, memo } from 'react';

import {
  DialogActions,
  DialogTitle, DialogContent,
  FormControl, InputLabel, OutlinedInput,
  MenuItem, SelectChangeEvent, Dialog, Button, Grid, ListItemText,
} from '@mui/material';

import ReactHookFormSelect from 'common/components/react-hook-forms/ReactHookFormSelect';
import type {
  Category, DbUser, Skill, Tool,
} from 'common/models/User';

import { ButtonText } from 'common/components/add-pattern/constants';
import { CategoryAddText } from './utils/constants';

type DialogFormReturn = {
  category: Category | undefined | null;
  skill: Skill | undefined | null;
  tools: string[] | undefined | null;
};
interface SkillsToolsDialogProps {
  user: DbUser | undefined
  open: boolean;
  control: any;
  onClose: (event: React.SyntheticEvent<unknown>, reason?: string) => void;
  onSubmit: (data: DialogFormReturn) => void;
}

const SkillsToolsDialog = function ({
  user, open, onClose, control, onSubmit,
}: SkillsToolsDialogProps): JSX.Element {
  const [category, setCategory] = useState<Category | undefined | null>();
  const [skill, setSkill] = useState<Skill | undefined | null>();
  const [tools, setSelectedTools] = useState<string[] | undefined | null>([]);

  const doSubmit = (): any => {
    const returnData = {
      category,
      skill,
      tools,
    };
    onSubmit(returnData);
    setCategory(null);
    setSkill(null);
    setSelectedTools([]);
  };

  const handleCategoryChange = (event: SelectChangeEvent<HTMLSelectElement | unknown>): void => {
    setCategory(user?.categories.find((c) => c.name === event.target.value));
  };

  const handleSkillChange = (event: SelectChangeEvent<HTMLSelectElement | unknown>): void => {
    setSkill(category?.skills.find((s) => s.name === event.target.value));
  };

  const handleToolsChange = (event: SelectChangeEvent<HTMLSelectElement | unknown>): void => {
    setSelectedTools(event.target.value as string[]);
  };
  return (
    <Dialog disableEscapeKeyDown open={open}>
      <DialogTitle>{CategoryAddText.DialogTitle}</DialogTitle>
      <DialogContent>
        <Grid container rowGap={4} sx={{ minWidth: 420 }}>
          <FormControl fullWidth sx={{ mt: 2 }}>
            <InputLabel htmlFor="category-dialog">{CategoryAddText.Category}</InputLabel>
            <ReactHookFormSelect
              id="category-dialog"
              value={category?.name || ''}
              onChange={handleCategoryChange}
              name="category"
              control={control}
              defaultValue=""
              input={<OutlinedInput label={CategoryAddText.Category} />}
            >
              {user?.categories.length && user?.categories.map((c) => (
                <MenuItem key={c.id} value={c.name}>{c.name}</MenuItem>
              ))}
            </ReactHookFormSelect>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="skill-dialog">{CategoryAddText.Skill}</InputLabel>
            <ReactHookFormSelect
              id="skill-dialog"
              value={skill?.name || ''}
              onChange={handleSkillChange}
              name="skill"
              control={control}
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
              id="tool-dialog"
              value={tools || ''}
              onChange={handleToolsChange}
              control={control}
              name="tools"
              disabled={!skill?.name}
              input={<OutlinedInput label={CategoryAddText.Tool} />}
              multiple
              renderValue={(selected: Tool[] | any): string => selected.map((t: string) => t).join(', ')}
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
        <Button variant="contained" onClick={doSubmit}>{ButtonText.Ok}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(SkillsToolsDialog);
