import { useState, useEffect, memo } from 'react';
import { UseFormReturn } from 'react-hook-form';

import {
  DialogActions,
  DialogTitle, DialogContent,
  FormControl, InputLabel, OutlinedInput,
  MenuItem, SelectChangeEvent, Dialog, Button,
} from '@mui/material';

import { getKeyOf } from 'common/utils/helpers';

import ReactHookFormSelect from 'common/components/react-hook-forms/ReactHookFormSelect';
import type { DbUser, Skill } from 'common/models/User';

import { ProjectFieldValues } from '../utils/types';
import { ButtonText, CategoryAddText } from './utils/constants';

interface SkillsToolsDialogProps {
  formValues: UseFormReturn<ProjectFieldValues>;
  user: DbUser | undefined
  open: boolean;
  onClose: (event: React.SyntheticEvent<unknown>, reason?: string) => void
  onGetReadyText: (text: string) => void;
}

const SkillsToolsDialog = function ({
  formValues,
  user,
  open,
  onClose,
  onGetReadyText,
}: SkillsToolsDialogProps): JSX.Element {
  const [skill, setSkill] = useState<string | unknown>('');
  const [toolsfromSkill, setToolsFromSkill] = useState<Skill | undefined>();
  const [tools, setTools] = useState<string[] | unknown>([]);

  const handleSkillChange = (event: SelectChangeEvent<typeof skill | unknown>): void => {
    setSkill(event.target.value);
    setToolsFromSkill(user?.skills.find((s) => s.name === event.target.value));
  };

  const handleToolChange = (event: SelectChangeEvent<typeof tools | unknown>): void => {
    const { target: { value } } = event;

    setTools(typeof value === 'string' ? value.split(', ') : value);
  };

  useEffect(() => {
    if ((tools as string[]).length > 0) {
      onGetReadyText(
        `${formValues.getValues('responsibilities')}: ${(tools as string[]).join(', ')}`,
      );
    }
  }, [tools, formValues, onGetReadyText]);

  return (
    <Dialog disableEscapeKeyDown open={open} onClose={onClose}>
      <DialogTitle>{CategoryAddText.DialogTitle}</DialogTitle>
      <DialogContent>
        <FormControl sx={{ m: 2, minWidth: 240 }}>
          <InputLabel htmlFor="skill-dialog">{CategoryAddText.Skill}</InputLabel>
          <ReactHookFormSelect
            id="skill-dialog"
            value={skill}
            onChange={handleSkillChange}
            name={getKeyOf<ProjectFieldValues>('skill')}
            control={formValues.control}
            input={<OutlinedInput label={CategoryAddText.Skill} />}
          >
            {user?.skills.map((s) => (
              <MenuItem key={s.name} value={s.name}>{s.name}</MenuItem>
            ))}
          </ReactHookFormSelect>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 420 }}>
          <InputLabel htmlFor="tool-dialog">{CategoryAddText.Tool}</InputLabel>
          <ReactHookFormSelect
            id="tool-dialog"
            disabled={!toolsfromSkill}
            multiple
            displayEmpty
            value={tools}
            onChange={handleToolChange}
            control={formValues.control}
            name={getKeyOf<ProjectFieldValues>('tool')}
            input={<OutlinedInput label={CategoryAddText.Tool} />}
          >
            {toolsfromSkill?.tools.map(({ name }) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </ReactHookFormSelect>
        </FormControl>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" onClick={onClose}>{ButtonText.Cancel}</Button>
        <Button variant="contained" onClick={onClose}>{ButtonText.Ok}</Button>
      </DialogActions>
    </Dialog>
  );
};

export default memo(SkillsToolsDialog);
