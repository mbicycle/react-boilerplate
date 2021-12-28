import { memo } from 'react';

import { v4 as uuidv4 } from 'uuid';

import {
  FormControl, InputLabel,
  MenuItem, Select,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useForm } from 'common/utils/hooks';

import { LEVELS } from '../../../languages/mock';

import { MenuItemText } from '../../utils/styled';

const LevelSelection = function ():JSX.Element {
  const { values, handleChange } = useForm<{level: string}>({ level: '' });

  return (

    <FormControl fullWidth>
      <InputLabel>Level</InputLabel>
      <Select
        value={values.level}
        label="Level"
        name="level"
        onChange={handleChange}
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
