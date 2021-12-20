import { memo } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
  Grid, InputLabel,
  MenuItem, Select,
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { useForm } from 'common/utils/hooks';

import { LANGUAGES, LEVELS } from './mock';

import { LANGUAGE, LEVEL } from './utils/constants';

import { FormControlStyled, MenuItemText } from './utils/styled';

type SelectionType = {
    Language: string;
    Level: string;
}

const LanguageSelectionForm = function (): JSX.Element {
  const { values, handleChange } = useForm<SelectionType>({ Language: '', Level: '' });

  return (
    <>
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LANGUAGE}</InputLabel>
          <Select
            value={values.Language}
            label={LANGUAGE}
            name={LANGUAGE}
            onChange={handleChange}
            fullWidth
            IconComponent={KeyboardArrowDownIcon}
          >
            {LANGUAGES.map((item) => (
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
        </FormControlStyled>
      </Grid>
      <Grid item xs={6}>
        <FormControlStyled fullWidth>
          <InputLabel>{LEVEL}</InputLabel>
          <Select
            value={values.Level}
            label={LEVEL}
            name={LEVEL}
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
        </FormControlStyled>
      </Grid>
    </>
  );
};

export default memo(LanguageSelectionForm);
