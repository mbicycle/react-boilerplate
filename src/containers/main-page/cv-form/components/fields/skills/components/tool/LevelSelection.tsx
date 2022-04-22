import { memo } from 'react';

import {
  FormControl, InputLabel,
  MenuItem, Select, SelectChangeEvent,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { MenuItemText } from '../../utils/styled';
import { LEVEL_LABEL } from '../../utils/constants';
import { LEVELS as levels } from '../../../languages/components/utils/constants';
import { Level } from '../../../languages/components/utils/level.enum';

interface LevelSelectionProps{
  selectedLevel: `${Level}`;
  onChange: (e: SelectChangeEvent<`${Level}`>) => void;
}

const LevelSelection = function (
  { selectedLevel, onChange }: LevelSelectionProps,
):JSX.Element {
  return (
    <FormControl fullWidth>
      <InputLabel>{LEVEL_LABEL}</InputLabel>
      <Select
        value={selectedLevel}
        label="Level"
        name="level"
        onChange={onChange}
        fullWidth
        IconComponent={KeyboardArrowDownIcon}
      >
        {levels.map((item) => (
          <MenuItem
            key={item.name}
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
