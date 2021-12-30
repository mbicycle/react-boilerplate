import { memo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  FormControl, InputLabel,
  MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { LEVELS } from '../../../languages/mock';

import { MenuItemText } from '../../utils/styled';
import { LEVEL_LABEL } from '../../utils/constants';

interface LevelSelectionProps{
  selectedLevel: string;
  onChange: (e: SelectChangeEvent<string>) => void;
}

const LevelSelection = function (
  { selectedLevel, onChange }: LevelSelectionProps,
):JSX.Element {
  return (

    <FormControl fullWidth>
      <InputLabel>{LEVEL_LABEL}</InputLabel>
      <Select
        value={selectedLevel || ''}
        label="Level"
        name="level"
        onChange={onChange}
        fullWidth
        IconComponent={KeyboardArrowDownIcon}
      >
        {LEVELS.map((item) => (
          <MenuItem
            key={uuidv4()}
            value={item.name}
          >
            <MenuItemText color="text.secondary">
              {item.name}
            </MenuItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default memo(LevelSelection);
