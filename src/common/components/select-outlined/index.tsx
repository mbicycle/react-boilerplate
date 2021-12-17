import { memo, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import {
  InputLabel, MenuItem,
  Select, SelectChangeEvent,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { FormControlStyled, MenuItemText } from './styled';

interface SelectOutlinedProps {
 label: string;
 // eslint-disable-next-line @typescript-eslint/no-explicit-any
 collection: Array<{[key: string]: any}>;
 fieldNameSelector: string;
}

const SelectOutlined = function ({ label, collection, fieldNameSelector }: SelectOutlinedProps): JSX.Element {
  const [value, setValue] = useState('');

  const handleChange = (event: SelectChangeEvent): void => {
    setValue(event.target.value);
  };

  return (
    <FormControlStyled>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        label={label}
        onChange={handleChange}
        fullWidth
        IconComponent={KeyboardArrowDownIcon}
      >
        {collection.map((item) => (
          <MenuItem
            key={uuidv4()}
            value={item[fieldNameSelector]}
          >
            <MenuItemText color="text.secondary">
              {item[fieldNameSelector]}
            </MenuItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControlStyled>
  );
};

export default memo(SelectOutlined);
